import { useEffect, useRef, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://dl.dropboxusercontent.com/scl/fi/tssajeyxmg1p3jsmuxk8b/IMG-20241007-WA0011.jpg?rlkey=t1yym57rihkhptyawlmmt620z",
  "https://dl.dropboxusercontent.com/scl/fi/y49lqq93qrtctdmmrnvl6/IMG-20241114-WA0172.jpg?rlkey=y7wgpbirnjth5qm0j46hhvvhk",
  "https://dl.dropboxusercontent.com/scl/fi/1cx3bvynuxubi1p9xgloi/IMG-20250224-WA0424.jpg?rlkey=4sycoy0teoi0xxpvwm70t4u5a",
  "https://dl.dropboxusercontent.com/scl/fi/1wn885b0o6diambm1bdrv/photo_2024-12-17_10-08-31.jpg?rlkey=d5suj68rs6sz9bvod342867v2",
  "https://dl.dropboxusercontent.com/scl/fi/i8ulwuz4gpptdec6r52ex/IMG-20241227-WA0170.jpg?rlkey=xvzai1tm61edw1rtsz198fwh4",
  "https://dl.dropboxusercontent.com/scl/fi/a4dwhqhiuowdrfyd2jc91/IMG-20241224-WA0122.jpg?rlkey=x0kyqkmvphpqlyyur7uyztybv",
  "https://dl.dropboxusercontent.com/scl/fi/hlthca821kq5z92mek6ko/IMG-20241220-WA0372.jpg?rlkey=im7j1j37iukxykefhr52godqp",
  "https://dl.dropboxusercontent.com/scl/fi/luumwea48t8xdug1rud79/IMG-20241204-WA0164.jpg?rlkey=frg0d25pt5nbmm2oedqwbpssy",
  "https://dl.dropboxusercontent.com/scl/fi/2t0srsxlac87usl1tpvgi/IMG-20241209-WA0087.jpg?rlkey=q59un42wekrqq8kjbjfxr4yb4",
  "https://dl.dropboxusercontent.com/scl/fi/hlthca821kq5z92mek6ko/IMG-20241220-WA0372.jpg?rlkey=im7j1j37iukxykefhr52godqp",
  "https://dl.dropboxusercontent.com/scl/fi/a4dwhqhiuowdrfyd2jc91/IMG-20241224-WA0122.jpg?rlkey=x0kyqkmvphpqlyyur7uyztybv",  
  "https://www.dropbox.com/scl/fi/2v0ppbsm904rxicyw3z5o/IMG-20250910-WA0025-1.jpg?rlkey=f34wjdq9q36dbi8d12jd9hizy&st=ghc3p177&raw=1",
  "https://www.dropbox.com/scl/fi/3w6k8kw41mlr6anasafsb/5ef66d702e3822f30e31a3046043e350_0.jpeg?rlkey=eehgozt1rj2zzy7p15b1n7t9x&st=rt0lrb3q&raw=1",
  "https://www.dropbox.com/scl/fi/m7gzaqp17rjeqy9w33rrv/44563a2490a32804677e493c4d135e9d_0.jpeg?rlkey=b2kv3k4celiuegylpndczxrla&st=10e414fb&raw=1",
  "https://www.dropbox.com/scl/fi/jtbgow5s2bwfdfmxhwgw7/09f8fb51ce3ab62b02ac0126a6db1cc8_0.jpeg?rlkey=aops8r2gwqd81is06wkn4u919&st=d66du4gt&raw=1",
  "https://www.dropbox.com/scl/fi/nlgn85yb6cjiasbufrmpr/a2af794061144dddb9da7b6f1519a5b6_0.jpeg?rlkey=1lvav71tnz0fbkdoqs4gt6mhq&st=pznurkcn&raw=1",
  "https://www.dropbox.com/scl/fi/0wngwhw46rcl4ete4udle/IMG_20250224_123514.jpg?rlkey=lsequh9w68lwz8tatyj4j6am8&st=obcs3y1g&raw=1",
  "https://www.dropbox.com/scl/fi/337gnoumq8cnztp2b64ff/IMG_20250605_121933.jpg?rlkey=xjg76jld5i7fj9cvdr0hl1vv0&st=msc9ci4l&raw=1",
  "https://www.dropbox.com/scl/fi/hueic6qgy53exku1wb3nx/IMG_20250417_105826.jpg?rlkey=ctk9j70ez37r84kwifk4ii4kt&st=ozv7p6qa&raw=1",
  "https://www.dropbox.com/scl/fi/6zf167s00okq6n6ncftsl/IMG_20250417_100729.jpg?rlkey=h5d37u7wrg8dsfl32m5miy66h&st=o1mfrz4y&raw=1",
  "https://www.dropbox.com/scl/fi/4wy4a9d8il2rofzq33gvk/IMG_20250605_122624.jpg?rlkey=sz1nonxm607whtvya7766tfew&st=rmd2oapl&raw=1",
  "https://www.dropbox.com/scl/fi/nkv69joygkyln7bqvo92t/IMG_20250605_122111.jpg?rlkey=j0ao04z16gn4hooi8gdc6zwrg&st=khfo5fnj&raw=1",
  "https://www.dropbox.com/scl/fi/p0zs59y2xeemdezlus6sp/IMG_20250919_195652.jpg?rlkey=3nh4bgvobyoz5mn7og4na36aq&st=s65douiu&raw=1",
  "https://www.dropbox.com/scl/fi/rmsqfx5lt6thbu6wb8d13/IMG_20250924_094705.jpg?rlkey=r22qyz4s0uhsxidcwnsprdaza&st=q5yarvbb&raw=1",
  "https://www.dropbox.com/scl/fi/0dgf270hvh0tjxtpwj024/IMG_20250605_123337.jpg?rlkey=grhp7zjc2ipobudh1ncai2fze&st=ub56yvu1&raw=1",
  "https://www.dropbox.com/scl/fi/1t900ib4tj6s899qdynza/IMG_20250924_094824.jpg?rlkey=yqyjxffegz2cy6jwtuw3ev3yp&st=2pdc0f0a&raw=1",

  
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
