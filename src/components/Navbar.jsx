import { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const menuLinksRef = useRef([]);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "member", label: "Member" },
    { id: "galeri", label: "Galeri" },
    { id: "komentar", label: "Komentar" },
  ];

  // efek scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock scroll saat menu buka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      menuButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // esc untuk close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 md:px-10 py-4 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-lg"
          : "bg-transparent"
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
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-500 to-purple-600 bg-clip-text text-transparent">
            Ativerse
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="text-indigo-300"
              className="cursor-pointer text-sm font-medium text-white relative group transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <motion.button
          ref={menuButtonRef}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 rounded-full focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
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
            className="fixed inset-0 h-screen bg-gradient-to-b from-black via-purple-900/95 to-indigo-900/95 backdrop-blur-md z-40 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {/* Header Mobile */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 focus:outline-none"
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label="Close Menu"
              >
                <X size={24} className="text-white" />
              </motion.button>
            </div>

            {/* Links (staggered animation) */}
            <motion.div
              className="flex-1 flex flex-col justify-center items-center space-y-8"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    to={item.id}
                    smooth
                    duration={500}
                    offset={-80}
                    spy
                    onClick={handleLinkClick}
                    tabIndex={0}
                    ref={(el) => {
                      menuLinksRef.current[idx] = el;
                      if (idx === 0) firstLinkRef.current = el;
                    }}
                    className="text-2xl font-semibold text-white hover:text-indigo-300 transition-colors focus:outline-none relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
