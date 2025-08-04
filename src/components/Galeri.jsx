import { useEffect, useRef } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { motion } from "framer-motion";

const images = [
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
  "/public/mutpi.png",
];

export default function Galeri() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const interval1 = setInterval(() => {
      if (scrollRef1.current) {
        scrollRef1.current.scrollLeft += 1;
        if (scrollRef1.current.scrollLeft + scrollRef1.current.offsetWidth >=
            scrollRef1.current.scrollWidth) {
          scrollRef1.current.scrollLeft = 0;
        }
      }
    }, 30);

    const interval2 = setInterval(() => {
      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft -= 1;
        if (scrollRef2.current.scrollLeft <= 0) {
          scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth;
        }
      }
    }, 30);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
            Galeri Kenangan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kumpulan momen berharga yang telah kita lewati bersama
          </p>
        </motion.div>

        {/* Top Gallery (left to right) */}
        <div
          ref={scrollRef1}
          className="flex overflow-x-auto scrollbar-hide py-6"
          data-aos="fade-right"
        >
          {[...images, ...images].map((img, index) => (
            <div key={`top-${index}`} className="flex-shrink-0 px-3">
              <motion.div 
                className="relative group h-56 w-72 md:h-64 md:w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={img}
                  alt={`Kenangan ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Kenangan {index % images.length + 1}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Middle Text */}
        <motion.div 
          className="my-12 md:my-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Kisah Kita</h3>
            <p className="text-gray-300 md:text-lg leading-relaxed">
              Setiap gambar di atas adalah kenangan tak tergantikan dari perjalanan kita bersama.
              Semoga cerita-cerita di balik senyuman ini terus hidup dalam ingatan kita.
              Mari kita terus menciptakan momen-momen baru yang akan kita kenang selamanya.
            </p>
          </div>
        </motion.div>

        {/* Bottom Gallery (right to left) */}
        <div
          ref={scrollRef2}
          className="flex overflow-x-auto scrollbar-hide py-6"
          data-aos="fade-left"
        >
          {[...images, ...images].reverse().map((img, index) => (
            <div key={`bottom-${index}`} className="flex-shrink-0 px-3">
              <motion.div 
                className="relative group h-56 w-72 md:h-64 md:w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={img}
                  alt={`Kenangan ${images.length - (index % images.length)}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Kenangan {images.length - (index % images.length)}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}