import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Instagram, Linkedin, X } from "lucide-react";

// Data anggota
const members = [
  {
    name: "Aidil",
    role: "Ketua Ativerse",
    image: "https://dl.dropboxusercontent.com/scl/fi/w0pldr3msv4vu3pb4qbzb/Aidil.JPG?rlkey=puyfp0s9ue7ize1v2bxi4nitx",
    instagram: "https://instagram.com/aidilprmdta",
    linkedin: "https://linkedin.com/in/aidilprmdta",
    github: "https://github.com/aidilprmdta"
  },
  {
    name: "Lupi",
    role: "Play Boy",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/andikaprtmlupii_",
    linkedin: "https://linkedin.com/in/andikaprtmlupii_",
    github: "https://github.com/andikaprtmlupii_"
  },
  {
    name: "Kijul",
    role: "Panglima Tempur",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Hafiz",
    role: "Playboy",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/hafizraihan_"
  },
  {
    name: "Irwan",
    role: "Kosma",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/irwansyahputra678"
  },
  {
    name: "Cudid",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Arifal",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Davie",
    role: "Pak Bos",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Hafy",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Bayu",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Syafwan",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
  {
    name: "Lupi",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/lupi",
    linkedin: "https://linkedin.com/in/lupi",
  },
];

// Modal wrapper
function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      {children}
    </div>
  );
}

export default function AnggotaAtiverse() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-white mb-4">
            Anggota Ativerse
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Anggota beban keluarga
          </p>
        </motion.div>

        {/* Scroll horizontal */}
        <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-48 bg-white/5 rounded-xl p-4 cursor-pointer hover:shadow-xl hover:shadow-gray-500/20 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-400/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-center">{member.name}</h3>
              <p className="text-center text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal detail anggota */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Modal onClose={() => setSelectedIndex(null)}>
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-[350px] mx-auto text-center border border-white/20"
            >
              {/* Tombol close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70"
              >
                <X size={18} className="text-white" />
              </button>

              {/* Data anggota */}
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-gray-500/40">
                <img
                  src={members[selectedIndex].image}
                  alt={members[selectedIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-sm text-gray-300 tracking-wide">
                  {members[selectedIndex].role}
                </h3>
                <h1 className="text-2xl font-bold text-white mt-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {members[selectedIndex].name}
                </h1>
              </div>

              {/* Tombol sosmed */}
              <div className="mt-8 flex flex-col gap-3">
                {members[selectedIndex].instagram && (
                  <a
                    href={members[selectedIndex].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform"
                  >
                    <Instagram size={18} /> Instagram
                  </a>
                )}
                {members[selectedIndex].linkedin && (
                  <a
                    href={members[selectedIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-transform"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                )}
                {members[selectedIndex].github && (
                  <a
                    href={members[selectedIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-lg hover:shadow-gray-700/40 hover:scale-105 transition-transform"
                  >
                    <Github size={18} /> Github
                  </a>
                )}
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
