import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  // Floating animation variants
  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-20 w-16 h-16 rounded-full bg-purple-600 opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-24 w-24 h-24 rounded-full bg-pink-600 opacity-20"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      />
      
      {/* Main content */}
      <div className="text-center relative z-10 max-w-2xl">
        {/* Animated 404 text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Oops! Halaman Tidak Ditemukan
          </h2>
        </motion.div>

        {/* Floating astronaut illustration */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="mb-10"
          data-aos="zoom-in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-300 mx-auto"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z" />
            <path d="M8 15l4 4 4-4" />
          </svg>
        </motion.div>

        {/* Error message */}
        <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Sepertinya Anda tersesat di luar angkasa. Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            Kembali
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all"
          >
            Ke Beranda
          </motion.button>
        </div>

        {/* Search bar for fun */}
        <div className="mt-12 max-w-md mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari sesuatu..."
              className="w-full px-4 py-3 rounded-full bg-purple-800 bg-opacity-50 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-purple-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stars decoration */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.5 + 0.5
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}
    </div>
  );
};

export default NotFoundPage;