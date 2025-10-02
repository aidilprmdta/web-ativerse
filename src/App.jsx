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

  //Fitur Shadcn Ui
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "./components/ui/Accordion";

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

              <main className="bg-gradient-to-b from-white via-white-50 to-gray-100">
                <div id="home" className="w-full overflow-x-hidden">
                  <Home />
                </div>
                <div id="about" className="w-full overflow-x-hidden">
                  <About />
                </div>
                <div id="member-gallery" className="w-full overflow-x-hidden">
                  <MemberGallery />
                </div>
                <div id="galeri" className="w-full overflow-x-hidden">
                  <Galeri />
                </div>
                <div id="komentar" className="w-full overflow-x-hidden">
                  <Komentar />
                </div>
                <div id="question" className="w-full overflow-x-hidden">
                  <Accordion />
                </div>
              </main>

              <div id="question" className="p-10 bg-black text-white">
                <h1 className="text-5xl text-center font-bold mb-4">Our FAQ's.</h1>
                <div className="w-50 h-1 bg-white  mx-auto mb-6 rounded-full" />
                  <Accordion type="single" collapsible className="w-full text-4xl">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Apa itu Ativerse?</AccordionTrigger>
                      <AccordionContent>
                        Ativerse adalah kelas A dari angkatan 24, kelas ini merupakan kelas yang
                        penuh semangat dan kreativitas. Ativerse adalah komunitas yang berkomitmen
                        untuk belajar bersama, berbagi pengetahuan, dan tumbuh sebagai individu
                        yang lebih baik. Dalam Ativerse, setiap anggota dianggap sebagai bagian
                        dari keluarga besar yang saling mendukung dan menginspirasi satu sama
                        lain.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Bagaimana cara komentar?</AccordionTrigger>
                      <AccordionContent>
                        Tinggal isi form komentar di bawah, langsung tampil otomatis.
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Siapa yang membuat website Ativerse?</AccordionTrigger>
                      <AccordionContent>
                        Website ini dibuat dengan ikhlas oleh orang ganteng yang bercita-cita menjadi seorang developer terbaik sekaligus jago hacking yaitu <a href="https://github.com/aidilprmdta">Aidil Pramadita Putra</a>.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Siapa kosma Ativerse?</AccordionTrigger>
                      <AccordionContent>
                        Kosma Ativerse adalah <a href="https://www.instagram.com/irwansyahputra678/">Irwansyah Putra</a>, dia adalah ketua kosma yang sangat baik hati, ganteng, jenius, dan humoris. dan  pelit
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Siapa di Ativerse yang sering confes?</AccordionTrigger>
                      <AccordionContent>
                        Orang yang sering confes di Ativerse adalah Julio Nababan bisa di panggil Joo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>Siapa yang cantik dan ganteng di Ativerse?</AccordionTrigger>
                      <AccordionContent>
                        Orang yang cantik dan ganteng di Ativerse adalah semuanya cantik dan ganteng tanpa terkecuali.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger>Siapa yang suka memendam perasaan?</AccordionTrigger>
                      <AccordionContent>
                        Yang suka memendam perasaan kepada seseorang yaitu Hafizh Raihan Hidayat dan  Ahmad Hadid
                      </AccordionContent>
                  </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger>Siapa yang suka denial?</AccordionTrigger>
                      <AccordionContent>
                        Yang suka denial dengan perasaannya yaitu Andika Pratama Lupi
                      </AccordionContent>
                  </AccordionItem>
                    <AccordionItem value="item-9">
                      <AccordionTrigger>Siapa yang suka bagi-bagi jawaban?</AccordionTrigger>
                      <AccordionContent>
                        Yang suka bagi bagi jawaban yaitu Aidil
                      </AccordionContent>
                  </AccordionItem>
                  </Accordion>
              </div>

              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  export default App;