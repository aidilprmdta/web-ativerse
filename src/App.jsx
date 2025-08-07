import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";

// Component imports
import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Galeri from "./components/Galeri";
import Komentar from "./components/Komentar";
import Footer from "./components/Footer";
import MemberGallery from "./components/MemberGalery";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.body.style.overflowX = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans scroll-smooth overflow-x-hidden bg-white text-gray-900">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : showWelcome ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <WelcomeScreen onFinish={() => setShowWelcome(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ScrollToTop />
            <Navbar />

            <main className="bg-gradient-to-b from-white via-pink-50 to-purple-100">
              <section id="home" className="w-full overflow-x-hidden">
                <Home />
              </section>
              <section id="about" className="w-full overflow-x-hidden">
                <About />
              </section>
              <section id="member-gallery" className="w-full overflow-x-hidden">
                <MemberGallery />
              </section>
              <section id="galeri" className="w-full overflow-x-hidden">
                <Galeri />
              </section>
              <section id="komentar" className="w-full overflow-x-hidden">
                <Komentar />
              </section>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;