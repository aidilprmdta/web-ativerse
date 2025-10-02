import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// Data kontributor
const contributors = [
  {
    name: "Aidil Pramadita Putra",
    role: "Fullstack Developer",
    image: "https://dl.dropboxusercontent.com/scl/fi/w0pldr3msv4vu3pb4qbzb/Aidil.JPG?rlkey=puyfp0s9ue7ize1v2bxi4nitx",
    github: "https://github.com/aidilprmdta",
    linkedin: "https://www.linkedin.com/in/aidilprmdta",
    instagram: "https://instagram.com/aidilprmdta",
  },
  // tambahkan contributor lain di sini
];

export default function ContributorsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-gray-400">Contributors</span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {contributors.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-indigo-500/30 transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold">{person.name}</h2>
                <p className="text-slate-300 mb-4">{person.role}</p>

                <div className="flex justify-center gap-4">
                  {person.github && (
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-400"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-400"
                    >
                      <Linkedin size={22} />
                    </a>
                  )}
                  {person.instagram && (
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-400"
                    >
                      <Instagram size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}