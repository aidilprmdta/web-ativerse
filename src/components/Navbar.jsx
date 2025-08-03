import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["home", "about", "galeri", "komentar"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 md:px-10 py-4 z-50 transition-all duration-500 ${
        scrolled ? "bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll.scrollToTop()}
          className="flex items-center cursor-pointer"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Ativerse
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-sm font-medium text-white relative group"
              activeClass="text-pink-300"
            >
              <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-pink-400 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-purple-900/95 to-indigo-900/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-10 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-white hover:text-pink-300 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}