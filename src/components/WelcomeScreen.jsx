import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function WelcomeScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // lanjut ke website utama
    }, 5000); // extended to 5 seconds for better viewing
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(255,0,255,0.8) 0%, transparent 20%)',
            'radial-gradient(circle at 80% 70%, rgba(0,255,255,0.8) 0%, transparent 20%)',
            'radial-gradient(circle at 50% 20%, rgba(255,255,0,0.8) 0%, transparent 20%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-6"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,0,255,0.7)',
            background: 'linear-gradient(90deg, #fff, #a78bfa, #c084fc)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          ATIVERSE
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            textShadow: '0 0 5px rgba(255,255,255,0.3)'
          }}
        >
          Explore the universe of possibilities with our innovative solutions
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="https://www.instagram.com/aidilprmdta/" className="text-2xl hover:text-purple-300 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/aidilprmdta" className="text-2xl hover:text-blue-300 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com/c/AidilTipi" className="text-2xl hover:text-red-300 transition-colors">
            <FaYoutube />
          </a>
          <a href="https://github.com/aidilprmdta" className="text-2xl hover:text-blue-400 transition-colors">
            <FaGithub />
          </a>
        </motion.div>
      </div>
      
      {/* Loading indicator */}
      <motion.div 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 h-1 bg-white rounded-full"
        style={{ width: '200px' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4, ease: "linear" }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-30"
          style={{
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%'
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </motion.div>
  );
}