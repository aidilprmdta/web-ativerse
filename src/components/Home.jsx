import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Animated Zoom Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <img
          src="/Public/IMG_3521.JPG" // Replace with your image path
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Judul */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Selamat Datang di <span className="text-pink-300">Ativerse</span>
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ruang virtual tempat kita belajar, berbagi cerita, dan tumbuh bersama. Temukan kenangan, tinggalkan kesan ✨
        </motion.p>

        {/* Tombol Navigasi */}
        <motion.div
          className="mt-8 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#galeri"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition shadow-md hover:shadow-lg"
          >
            Lihat Galeri <ArrowRight size={18} />
          </a>
          <a
            href="#komentar"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition shadow-md hover:shadow-lg"
          >
            Tinggalkan Komentar <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-[100px] top-[-10%] left-[-10%]" />
        <div className="absolute w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-[100px] bottom-[-10%] right-[-10%]" />
      </div>
    </section>
  );
}