import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    setLoading(true);
    
    try {
      // Dapatkan user yang sedang login
      const { data: { user } } = await supabase.auth.getUser();

      // Insert komentar ke database
      const { error } = await supabase.from("komentar").insert({
        pesan: comment,
        nama: user?.email || "Anonim",
        uid: user?.id || null,
      });

      if (error) throw error;

      // Reset form dan panggil callback
      setComment("");
      onCommentSubmit(); // Refresh daftar komentar
      
    } catch (error) {
      console.error("Gagal mengirim komentar:", error);
      alert("Gagal mengirim komentar. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4 flex flex-col gap-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Tulis komentar Anda..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        rows={4}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !comment.trim()}
        className="self-end bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Mengirim..." : "Kirim Komentar"}
      </button>
    </div>
  );
}