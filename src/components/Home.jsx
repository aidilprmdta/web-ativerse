import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  "https://dl.dropboxusercontent.com/scl/fi/2t0srsxlac87usl1tpvgi/IMG-20241209-WA0087.jpg?rlkey=q59un42wekrqq8kjbjfxr4yb4",
  "https://dl.dropboxusercontent.com/scl/fi/hlthca821kq5z92mek6ko/IMG-20241220-WA0372.jpg?rlkey=im7j1j37iukxykefhr52godqp",
  "https://dl.dropboxusercontent.com/scl/fi/a4dwhqhiuowdrfyd2jc91/IMG-20241224-WA0122.jpg?rlkey=x0kyqkmvphpqlyyur7uyztybv",  
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Belajar Bersama", "Berbagi Cerita", "Menciptakan Kenangan ✨"];

// background slideshow
useEffect(() => {
  const interval = setInterval(() => {
  setIndex((prev) => (prev + 1) % images.length);
  }, 6000);
  return () => clearInterval(interval);
  }, []);

// teks animasi bergantian
useEffect(() => {
  const interval = setInterval(() => {
  setTextIndex((prev) => (prev + 1) % texts.length);
  }, 3000);
  return () => clearInterval(interval);
  }, []);

return ( <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
{/* Background slideshow */}
    <motion.div
    key={index}
    className="absolute inset-0 z-0"
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 1.2 }}
    > <img
          src={images[index]}
          alt="Background"
          className="w-full h-full object-cover"
        /> <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
    </motion.div>

  {/* Konten */}
  <div className="relative z-10">
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Selamat Datang di{" "}
      <span className="bg-gradient-to-r from-gray-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
        Ativerse
      </span>
    </motion.h1>

    {/* animasi teks bergantian */}
    <motion.p
      key={textIndex}
      className="mt-6 text-lg md:text-2xl font-medium text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      {texts[textIndex]}
    </motion.p>

    <motion.p
      className="mt-4 font-inter text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      Ruang virtual tempat kita belajar, berbagi cerita, dan tumbuh bersama.
      Temukan keseruan dan ciptakan memori indah bersama teman-temanmu 🚀
    </motion.p>

    {/* tombol interaktif */}
    <motion.div
      className="mt-8 flex gap-4 flex-wrap justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <a
        href="#galeri"
        className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-pink-400/50 hover:scale-105"
      >
        Lihat Galeri <ArrowRight size={18} />
      </a>
      <a
        href="#komentar"
        className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-purple-400/50 hover:scale-105"
      >
        Tinggalkan Komentar <ArrowRight size={18} />
      </a>
    </motion.div>
  </div>

  {/* efek bubble animasi */}
  <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60"
        initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
        animate={{
          y: [null, -100],
          x: Math.random() * window.innerWidth,
          opacity: [0.6, 0.2, 0],
        }}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
</section>

);
}
