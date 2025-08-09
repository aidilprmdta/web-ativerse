import { 
  FaHome, 
  FaUserFriends, 
  FaImages, 
  FaCommentAlt,
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaGithub,
  FaEnvelope,
  FaHeart,
  FaTiktok
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@_sky.mv", label: "Tiktok" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/aidil.prmdta/", label: "Instagram" },
    { icon: <FaGithub />, url: "https://github.com/aidilprmdta", label: "Github" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/aidilprmdta/", label: "LinkedIn" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@AidilTipi", label: "YouTube" },
    { icon: <FaEnvelope />, url: "mailto:pramadytaa@gmail.com", label: "Email" }
  ];
  
  const quickLinks = [
    { icon: <FaHome />, label: "Home", url: "#home" },
    { icon: <FaUserFriends />, label: "About", url: "#about" },
    { icon: <FaImages />, label: "Galeri", url: "#gallery" },
    { icon: <FaCommentAlt />, label: "Komentar", url: "#comments" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Ativerse
              </span>
            </h3>
            <p className="text-gray-400">
              Website kelas kreatif yang menyatukan desain, teknologi, dan cerita anak-anak hebat dalam satu halaman.
            </p>
            <p className="text-gray-400 flex items-center">
              <FaHeart className="text-pink-500 mr-2" />
              Dibuat penuh semangat dan cinta
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Navigasi Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="flex items-center text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Kontak Kami</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-purple-400" />
                pramadytaa@gmail.com
              </p>
              <p>UIN Sultan Syarif Kasim Riau</p>
              <p>Pekanbaru, Riau</p>
            </address>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Media Sosial</h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br from-pink-600 to-purple-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            © {year} <span className="text-pink-400">Ativerse</span>. All rights reserved.
          </p>
          <p className="mt-1">
            Dibuat dengan ❤️ oleh 21 anggota Ativerse UIN Syarif Kasim Riau
          </p>
        </motion.div>
      </div>
    </footer>
  );
}