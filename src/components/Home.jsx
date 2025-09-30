import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Animated Cinematic Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1.1, 1.2, 1.1],
          x: ["0%", "2%", "-2%", "0%"],
          y: ["0%", "-2%", "2%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://dl.dropboxusercontent.com/scl/fi/2n59vsa18fufx3sgx81rq/IMG-20250224-WA0482.jpg?rlkey=4rdf6bkv81h0k5tre2jk5lzey"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        {/* Animated Glow Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-transparent mix-blend-screen"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Selamat Datang di <span className="text-gray-400">Ativerse</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ruang virtual tempat kita belajar, berbagi cerita, dan tumbuh bersama.
          Temukan kenangan, tinggalkan kesalahan, dan buat kenangan indah. ✨
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#galeri"
            className="bg-pink-500 hover:bg-pink-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition shadow-lg hover:shadow-pink-400/50"
          >
            Lihat Galeri <ArrowRight size={18} />
          </a>
          <a
            href="#komentar"
            className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition shadow-lg hover:shadow-purple-400/50"
          >
            Tinggalkan Komentar <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Floating Glow Effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-[100px] top-[-10%] left-[-10%]" />
        <div className="absolute w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-[100px] bottom-[-10%] right-[-10%]" />
      </motion.div>
    </section>
  );
}
