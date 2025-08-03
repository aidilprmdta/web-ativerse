import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaComment, FaHeart, FaReply } from "react-icons/fa";

export default function Komentar() {
  const [komentar, setKomentar] = useState([]);
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchKomentar();
  }, []);

  const fetchKomentar = async () => {
    const { data, error } = await supabase
      .from("komentar")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setKomentar(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama || !form.pesan || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("komentar")
        .insert([form])
        .select();
      
      if (!error && data) {
        setKomentar((prev) => [data[0], ...prev]);
        setForm({ nama: "", pesan: "" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-800 to-pink-700 py-16 px-4 sm:px-6 text-white">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Komentar</h2>
        <p className="text-lg text-pink-200 max-w-2xl mx-auto">
          Berikan pendapatmu dan lihat apa kata mereka tentang Ativerse
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:grid lg:grid-cols-2">
        {/* Form Komentar - Always comes first on mobile */}
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
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-4 rounded-xl font-bold shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                {isSubmitting ? "Mengirim..." : "Kirim Komentar"}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.button>
          </form>
        </motion.div>

        {/* Daftar Komentar - Always comes second on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/10 p-6 rounded-3xl shadow-2xl border border-white/20 h-[600px] flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaHeart className="text-pink-400" />
              Komentar Terbaru
            </h3>
            
            <div className="space-y-4 overflow-y-auto pr-2 flex-grow">
              {komentar.length === 0 ? (
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
                      <div className="bg-pink-500/20 p-3 rounded-full">
                        <FaUser className="text-pink-300" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-white">{k.nama}</h4>
                          <span className="text-xs text-white/50">
                            {new Date(k.created_at).toLocaleString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <p className="mt-2 text-white/90">{k.pesan}</p>
                        <button className="mt-3 text-xs flex items-center gap-1 text-pink-300 hover:text-pink-200 transition-colors">
                          <FaReply className="text-xs" />
                          Balas
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            
            <div className="pt-4 text-center text-sm text-white/60">
              {komentar.length} komentar
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}