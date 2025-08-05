import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Modal from "./Modal";

const members = [
  {
    name: "Aidil",
    role: "Ketua Ativerse",
    image: "/src/assets/IMG_3521.JPG",
    instagram: "https://instagram.com/aidilprmdta",
    linkedin: "https://linkedin.com/in/aidilprmdta",
    github: "https://github.com/aidilprmdta",
  },
  {
    name: "Mutpi",
    role: "Ketua Ativerse",
    image: "/public/mutpi.png",
    instagram: "https://instagram.com/aidilprmdta",
    linkedin: "https://linkedin.com/in/aidilprmdta",
    github: "https://github.com/aidilprmdta",
  },

  // Tambahkan anggota lain...
];

const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

export default function MemberGallery() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);
  const membersPerPage = 4;

  const slides = chunkArray(members, membersPerPage);
  const currentSlide = slides[page];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-800">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="py-10 px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-6"
          >
            {currentSlide.map((member, index) => (
              <motion.div
                key={index}
                onClick={() => setSelected(member)}
                className="relative w-[240px] h-[360px] rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent" />
                <h2 className="absolute inset-0 flex flex-col items-center justify-center font-bold text-white text-2xl tracking-widest">
                  {member.name.split("").map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </h2>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bullet Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full ${
                i === page ? "bg-white" : "bg-gray-500"
              } transition duration-300`}
            />
          ))}
        </div>
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <div className="p-6">
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-xl mb-2 w-400 h-100 object-cover"
            />
            <h3 className="text-sm text-gray-300">{selected.role}</h3>
            <h1 className="text-2xl font-bold text-white">{selected.name}</h1>
            <a
              href={selected.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition w-full"
            >
              <Instagram size={18} /> Follow on Instagram
            </a>
            <a
              href={selected.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition w-full"
            >
              <Linkedin size={18} /> Koneksi On LinkedIn
            </a>
            <a
              href={selected.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition w-full"
            >
              <Github size={18} /> Follow On Github
            </a>
          </div>
        </Modal>
      )}
      </ section>
  );
}
