
# 🌐 Web Ativerse

Web Ativerse adalah website single-page (SPA) interaktif untuk kelas yang menampilkan informasi penting seperti Home, About, Member Galery, Komentar, Galeri, dan Kontributor. Dibangun menggunakan React, TailwindCSS, GSAP, AOS, Framer Motion, dan Supabase untuk menyimpan komentar secara real-time.

## 🚀 Fitur Utama

- ✨ **Welcome Screen** interaktif
- 📄 SPA (Single Page Application) – Navigasi tanpa reload
- 💬 Komentar langsung tampil setelah dikirim
- 🖼️ Galeri dengan upload gambar & preview modal
- 🔐 Login otentikasi (khusus murid untuk upload)
- 🛡️ Fitur hapus gambar hanya untuk admin
- 🎨 Animasi dinamis & desain responsif

## 🛠️ Teknologi yang Digunakan

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [Supabase](https://supabase.com/) – Database & Auth
- [Lucide Icons](https://lucide.dev/)

## 🧑‍💻 Instalasi Lokal

1. Clone repositori ini:
   ```bash
   git clone https://github.com/aidilprmdta/web-ativerse.git
   cd web-ativerse

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` dengan konfigurasi Supabase:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. Jalankan proyek:

   ```bash
   npm run dev
   ```

## 🏗️ Struktur Halaman

* **Home**: Intro + navigasi
* **About**: Informasi singkat kelas
* **Contact**: Kontak ketua kelas/pengurus
* **Komentar**: Form + daftar komentar (real-time)
* **Galeri**: Upload & tampilkan foto kenangan

## 📷 Preview

![Preview](https://github.com/aidilprmdta/web-ativerse/blob/main/image.png?raw=true)

## 📌 Catatan

* Login menggunakan Supabase Auth (email/password)
* Admin ditentukan berdasarkan role di Supabase
* Komentar disimpan dalam table `comments`
* Galeri gambar disimpan di bucket Supabase Storage

## 🤝 Kontribusi

Kontribusi terbuka untuk siapa pun. Silakan fork dan pull request!

## 📄 Lisensi

MIT License © 2025 [Aidil Pramadita Putra](https://github.com/aidilprmdta)
