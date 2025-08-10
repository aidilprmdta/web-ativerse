import { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const menuLinksRef = useRef([]); // optional if mau fokus ke tiap link
  const menuItems = ["home", "about", "galeri", "komentar"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper untuk mencegah touch scroll di mobile ketika menu terbuka
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    if (isOpen) {
      // kompensasi padding-right supaya layout tidak bergeser ketika scrollbar hilang
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      // lock scroll
      document.body.style.overflow = "hidden";

      // mencegah touchmove (iOS/Android)
      document.addEventListener("touchmove", preventDefault, { passive: false });

      // fokus ke link pertama
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 50);
    } else {
      // restore
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.removeEventListener("touchmove", preventDefault, { passive: false });
      // kembalikan fokus ke tombol menu
      menuButtonRef.current?.focus();
    }

    // cleanup jika komponen unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.removeEventListener("touchmove", preventDefault, { passive: false });
    };
  }, [isOpen]);

  // tutup saat tekan ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // helper: klik link lalu scroll + tutup menu
  const handleLinkClick = (to) => {
    setIsOpen(false);
    // animateScroll atau react-scroll handle the scroll via Link itself,
    // so no need to call scroll.scrollTo here — Link will do smooth scroll.
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 md:px-10 py-4 z-50 transition-all duration-500 ${
        scrolled ? "bg-gradient-to-r from-purple-540/90 backdrop-blur-md shadow-lg" : "bg-transparent"
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
          ref={menuButtonRef}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 rounded-full focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </motion.button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // full screen overlay, non-scrollable
            className="fixed inset-0 h-screen bg-gradient-to-br from-purple-900/95 to-indigo-900/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-10 z-60 overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            aria-modal="true"
            role="dialog"
          >
            {menuItems.map((item, idx) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                offset={-80}
                onClick={() => handleLinkClick(item)}
                // buat fokus bisa diarahkan
                tabIndex={0}
                ref={(el) => {
                  menuLinksRef.current[idx] = el;
                  if (idx === 0) firstLinkRef.current = el;
                }}
                className="text-2xl font-semibold text-white hover:text-pink-300 transition-colors focus:outline-none"
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
