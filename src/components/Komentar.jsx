import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaComment, FaHeart, FaReply, FaSpinner } from "react-icons/fa";

export default function Komentar() {
  const [komentar, setKomentar] = useState([]);
  const [pinnedComment, setPinnedComment] = useState(null);
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch pinned comment
  useEffect(() => {
    const fetchPinnedComment = async () => {
      try {
        const { data, error } = await supabase
          .from('komentar')
          .select('*')
          .eq('is_pinned', true)
          .maybeSingle(); // gunakan maybeSingle() untuk menghindari error jika tidak ada data
        
        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching pinned comment:', error);
          return;
        }
        
        if (data) {
          setPinnedComment(data);
        }
      } catch (error) {
        console.error('Error fetching pinned comment:', error);
      }
    };

    fetchPinnedComment();
  }, []);

  // Fetch regular comments and set up real-time subscription
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        let query = supabase
          .from('komentar')
          .select('*')
          .eq('is_pinned', false) // lebih eksplisit
          .order('created_at', { ascending: false });

        const { data, error } = await query;
        
        if (error) {
          console.error('Database error:', error);
          throw error;
        }
        
        setKomentar(data || []);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError('Gagal memuat komentar');
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();

    // Setup realtime subscription
    const subscription = supabase
      .channel('komentar_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'komentar'
      }, (payload) => {
        console.log('Realtime update:', payload);
        fetchComments(); // Refresh data ketika ada perubahan
      })
      .subscribe((status) => {
        console.log('Subscription status:', status);
      });

    return () => {
      console.log('Unsubscribing from realtime');
      supabase.removeChannel(subscription);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null); // Clear error saat user mengetik
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!form.nama.trim() || !form.pesan.trim()) {
      setError("Nama dan pesan harus diisi");
      return;
    }
    
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("komentar")
        .insert([{ 
          nama: form.nama.trim(),
          pesan: form.pesan.trim(),
          is_pinned: false
        }])
        .select()
        .single();

      if (error) {
        console.error('Insert error:', error);
        throw error;
      }
      
      // Langsung tambahkan ke state untuk UI yang responsif
      setKomentar((prev) => [data, ...prev]);
      setForm({ nama: "", pesan: "" });
      
      // Show success message
      setError(null);
    } catch (err) {
      console.error("Gagal mengirim komentar:", err);
      setError(err.message || "Gagal mengirim komentar. Coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffMinutes = Math.floor((now - date) / (1000 * 60));
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffMinutes < 1) return 'Baru saja';
      if (diffMinutes < 60) return `${diffMinutes}m yang lalu`;
      if (diffHours < 24) return `${diffHours}j yang lalu`;
      if (diffDays < 7) return `${diffDays}h yang lalu`;

      return date.toLocaleDateString("id-ID", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Tanggal tidak valid';
    }
  };

  // Debug connection
  useEffect(() => {
    console.log('Testing Supabase connection...');
    supabase
      .from('komentar')
      .select('count', { count: 'exact', head: true })
      .then(({ count, error }) => {
        if (error) {
          console.error('Supabase connection error:', error);
        } else {
          console.log('Supabase connected successfully. Total comments:', count);
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-800 to-pink-700 py-16 px-4 sm:px-6 text-white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4 text-center">
            Komentar
        </h2>
      <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mb-6 rounded-full"></div>
      </div>
        <p className="text-lg text-pink-200 max-w-2xl mx-auto">
          Berikan pendapatmu dan lihat apa kata mereka tentang Ativerse
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:grid lg:grid-cols-2">
        {/* Form Komentar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 p-6 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20 space-y-6"
          >
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <FaComment className="text-pink-400" />
              Tinggalkan Komentar
            </h3>

            {error && (
              <div className="bg-red-500/20 text-red-200 p-3 rounded-lg text-sm border border-red-500/30">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-sm font-medium text-pink-100 flex items-center gap-1">
                <FaUser className="text-xs" />
                Nama Kamu
              </label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Masukkan nama"
                className="w-full p-4 rounded-xl bg-white/15 text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                required
                maxLength={50}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-pink-100">
                Pesan Kamu
              </label>
              <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                placeholder="Tuliskan pesan disini..."
                className="w-full p-4 h-40 rounded-xl bg-white/15 text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
                required
                maxLength={500}
              />
              <div className="text-xs text-white/50 text-right">
                {form.pesan.length}/500 karakter
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-4 rounded-xl font-bold shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                    Kirim Komentar
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.button>
          </form>
        </motion.div>

        {/* Daftar Komentar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/10 p-6 rounded-3xl shadow-2xl border border-white/20 h-[500px] flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaHeart className="text-pink-400" />
              Komentar Terbaru
            </h3>
            
            <div className="space-y-4 overflow-y-auto pr-2 flex-grow">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <FaSpinner className="animate-spin text-2xl text-pink-400" />
                </div>
              ) : (
                <>
                  {pinnedComment && (
                    <motion.div
                      className="bg-yellow-500/10 p-5 rounded-xl border border-yellow-400/30 shadow-inner backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-500/20 p-2 rounded-full text-yellow-300">
                          <FaUser className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-white">{pinnedComment.nama}</h4>
                            <span className="text-xs text-white/50">
                              {formatDate(pinnedComment.created_at)}
                            </span>
                          </div>
                          <p className="mt-2 text-white/90 whitespace-pre-line">{pinnedComment.pesan}</p>
                          <div className="text-xs text-yellow-300 mt-2 flex items-center gap-1">
                            📌 Disematkan
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {komentar.length === 0 && !pinnedComment ? (
                    <div className="text-center py-10 text-white/70 italic">
                      Jadilah yang pertama berkomentar!
                    </div>
                  ) : (
                    komentar.map((k, i) => (
                      <motion.div
                        key={k.id}
                        className="bg-white/10 p-5 rounded-xl border border-white/15 shadow-inner backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-pink-500/20 p-2 rounded-full text-pink-300">
                            <FaUser className="w-5 h-5" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-white">{k.nama}</h4>
                              <span className="text-xs text-white/50">
                                {formatDate(k.created_at)}
                              </span>
                            </div>
                            <p className="mt-2 text-white/90 whitespace-pre-line">{k.pesan}</p>
                            <button 
                              className="mt-3 text-xs flex items-center gap-1 text-pink-300 hover:text-pink-200 transition-colors"
                              onClick={() => {
                                setForm(prev => ({
                                  ...prev,
                                  pesan: `@${k.nama}: ${prev.pesan}`
                                }));
                                document.querySelector('textarea')?.focus();
                              }}
                            >
                              <FaReply className="text-xs" />
                              Balas
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </>
              )}
            </div>
            
            <div className="pt-4 text-center text-sm text-white/60">
              {komentar.length + (pinnedComment ? 1 : 0)} komentar
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}