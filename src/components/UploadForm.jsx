import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const filename = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`galeri/${filename}`, file);

    if (!error) {
      const { data: urlData } = supabase.storage
        .from("images")
        .getPublicUrl(`galeri/${filename}`);

      const { user } = supabase.auth.getUser();

      await supabase.from("galeri").insert({
        url: urlData.publicUrl,
        nama: user?.email || "anonim",
        uid: user?.id,
      });

      onUpload(); // refresh galeri
      setFile(null);
    }

    setLoading(false);
  };

  return (
    <div className="mb-4 flex gap-2 items-center">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        {loading ? "Mengunggah..." : "Unggah Gambar"}
      </button>
    </div>
  );
}
