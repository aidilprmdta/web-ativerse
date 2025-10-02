import { motion } from "framer-motion";
import { FaHeart, FaUsers, FaLightbulb, FaHandsHelping } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-7xl font-bold text-transparent bg-clip-text bg-white mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            24
          </motion.h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full" />
          <h3 className="text-4xl font-bold text-white mb-3">Tentang Ativerse</h3>
          <p className="text-xl text-gray-300 font-medium tracking-wider">
            Little Family With Big Memories
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Text Content */}
            <div className="p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-3xl font-bold text-white mb-8">
                  Welcome To <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-gray-300">Ativerse</span>
                </h4>
                
                <div className="space-y-6 text-gray-200 mb-10">
                  <p className="text-lg leading-relaxed">
                    Seperti puzzle, setiap anggota adalah bagian penting yang membuat gambar kebersamaan kita sempurna. Ketika kita bersatu, bukan hanya kekuatan yang tercipta, tetapi juga kisah luar biasa yang akan kita tulis bersama.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Kerja dengan dedikasi, tumbuh bersama dalam suatu organisasi dan tercipta kekeluargaan. Inilah cerita kita!
                  </p>
                  <p className="text-lg font-medium text-transparent bg-clip-text bg-white">
                    Ativerse - Where creativity meets technology
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <motion.div 
                    className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-sm border border-white/20"
                    whileHover={{ y: -5 }}
                  >
                    <FaHeart className="text-gray-300 text-3xl mx-auto mb-2" />
                    <p className="font-bold text-white">21+ Members</p>
                    <p className="text-sm text-gray-300">Dedicated Team</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-sm border border-white/20"
                    whileHover={{ y: -5 }}
                  >
                    <FaLightbulb className="text-white text-3xl mx-auto mb-2" />
                    <p className="font-bold text-white">50+ Projects</p>
                    <p className="text-sm text-gray-300">Creative Works</p>
                  </motion.div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    className="px-6 py-3 bg-white/20 border-2 border-gray-300 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>ATIVERSE 24'</span>
                    <FaUsers className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Image Gallery */}
            <motion.div 
              className="relative min-h-96 lg:min-h-full bg-white/10 backdrop-blur-sm border border-white/20 grid grid-cols-2 grid-rows-2 gap-1 p-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Replace these with your actual images */}
              {[
                "https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20250224-WA0404.jpg",
                "https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20250224-WA0422.jpg",
                "https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20250224-WA0480.jpg",
                "https://rgtmxmwnsznezcdxdejx.supabase.co/storage/v1/object/public/ativerse_galeri/IMG-20241204-WA0174.jpg",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}  
                >
                  <img
                    src={src}
                    alt={`Team moment ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-500"
                  />
                  {index === 3 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div>
                        <p className="text-white font-medium">ATIVERSE 24'</p>
                        <p className="text-gray-300 text-sm">Momen kebersamaan kita</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandsHelping className="text-4xl mb-4 text-white mx-auto" />,
                title: "Kebersamaan",
                desc: "Kami percaya kekuatan tim lebih besar dari individu"
              },
              {
                icon: <FaLightbulb className="text-4xl mb-4 text-white mx-auto" />,
                title: "Kreativitas",
                desc: "Inovasi dan ide baru adalah napas kami"
              },
              {
                icon: <FaHeart className="text-4xl mb-4 text-white mx-auto" />,
                title: "Kekeluargaan",
                desc: "Lebih dari sekedar tim, kami adalah keluarga"
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
                whileHover={{ y: -10 }}
              >
                {item.icon}
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}