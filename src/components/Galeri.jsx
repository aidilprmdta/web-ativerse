import { useEffect, useRef, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/44563a2490a32804677e493c4d135e9d_0.jpeg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/5ef66d702e3822f30e31a3046043e350_0.jpeg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250224_123514.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250417_100729.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250417_105826.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250605_121933.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250605_122111.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250605_122624.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250919_195652.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250924_094705.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_20250924_094824.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20250908-WA0026(1).jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20250909-WA0015.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/pakbos%20ganteng.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/ppp.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_2356.JPG",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG_4527.JPG",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20250826-WA0571.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20240824-WA0099.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20240830-WA0068.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20240831-WA0105.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20240907-WA0050.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20240919-WA0036.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241002-WA0010.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241002-WA0043.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241002-WA0049.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241007-WA0011.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241013-WA0196.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241028-WA0071.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241108-WA0065.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241114-WA0125.jpg",
"https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241125-WA0100.jpg",

];

export default function GaleriDanKomentar() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
    <>
      {/* Galeri */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-white mb-4">
              Perjalanan Waktu
            </h2>
            <div className="w-60 h-1 bg-white  mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Merangkai cerita dalam setiap detik, mengabadikan momen-momen berharga yang takkan pernah pudar.
            </p>
          </motion.div>

          {/* Top Gallery */}
          <div ref={scrollRef1} className="flex overflow-x-auto scrollbar-hide py-6" data-aos="fade-right">
            {[...images, ...images].map((img, index) => (
              <div key={`top-${index}`} className="flex-shrink-0 px-3">
                <motion.div 
                  className="relative group h-56 w-72 md:h-64 md:w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Kenangan ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
              <h3 className="text-3xl font-bold text-white mb-3">Kisah Kita</h3>
              <p className="text-gray-300 leading-relaxed">
                Setiap momen yang kita abadikan adalah bagian dari kisah kita. Kami mengabadikan setiap detik, merangkai cerita dalam setiap detik, dan mengabadikan momen-momen berharga yang takkan pernah pudar.
              </p>
            </div>
          </motion.div>

          {/* Bottom Gallery */}
          <div ref={scrollRef2} className="flex overflow-x-auto scrollbar-hide py-6" data-aos="fade-left">
            {[...images, ...images].reverse().map((img, index) => (
              <div key={`bottom-${index}`} className="flex-shrink-0 px-3">
                <motion.div 
                  className="relative group h-56 w-72 md:h-64 md:w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Kenangan ${images.length - (index % images.length)}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
