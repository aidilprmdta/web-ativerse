import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Instagram, Linkedin, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
// Data anggota
const members = [
  {
    name: "Aidil",
    role: "Ketua Ativerse",
    image: "https://dl.dropboxusercontent.com/scl/fi/w0pldr3msv4vu3pb4qbzb/Aidil.JPG?rlkey=puyfp0s9ue7ize1v2bxi4nitx",
    instagram: "https://instagram.com/aidilprmdta",
    linkedin: "https://linkedin.com/in/aidilprmdta",
    github: "https://github.com/aidilprmdta"
  },
  {
    name: "Lupi",
    role: "Play Boy",
    image: "https://www.dropbox.com/scl/fi/phdm7to3x78p5h6uwoifk/lupi.jpg?rlkey=w47lvpouwq2q1ihkcrqm5ksfq&st=rc1xernk&raw=1",
    instagram: "https://instagram.com/andikaprtmlupii_",
    linkedin: "https://linkedin.com/in/andikaprtmlupii_",
    github: "https://github.com/andikaprtmlupii_"
  },
  {
    name: "Kijul",
    role: "Panglima Tempur",
    image: "https://www.dropbox.com/scl/fi/de269aocxpf1z8yqe1esc/kijul.jpg?rlkey=8m6ngdosbhugfddc04rqt9fdy&st=14s08zua&raw=1",
    instagram: "https://instagram.com/jujulianrifqi",
  },
  {
    name: "Apez",
    role: "Playboy",
    image: "https://www.dropbox.com/scl/fi/keoddz2zxhohc9cy08lnt/apez.jpg?rlkey=glm8o2yrit9smyovbjtbhjif3&st=b9h6m965&raw=1",
    instagram: "https://instagram.com/hafizrai_"
  },
  {
    name: "Irwan",
    role: "Kosma",
    image: "https://www.dropbox.com/scl/fi/2tktk9nemzxiqk1dl0sdf/irwan.jpg?rlkey=3vamggq9omj3ztv4i1qjyvwrz&st=jpahdq6l&raw=1",
    instagram: "https://instagram.com/irwansyahputra838"
  },
  {
    name: "Cudid",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/wls976u24xh6ll1oe61v7/cudid.jpg?rlkey=vv04i19pv1njz8rmy5fpvtuy4&st=678vk3z7&raw=1",
    instagram: "https://instagram.com/am.diiid_",
  },
  {
    name: "Arifal",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/yrmcza1nl62wtyl30vrdo/arrifal.jpg?rlkey=8oblvlj7smmy4tp3rwrt4hdbx&st=wqiqyle1&raw=1",
    instagram: "https://instagram.com/rifaru_30",
  },
  {
    name: "Davie",
    role: "Pak Bos",
    image: "https://www.dropbox.com/scl/fi/kcyv8e49gi8n2g2g22oti/Gambar-WhatsApp-2025-10-01-pukul-12.18.48_705d8b9b.jpg?rlkey=6fq2jf61ipz87jg86n6ll3od2&st=eipvktif&raw=1",
    instagram: "https://instagram.com/fauzandafie11",
  },
  {
    name: "Hafy",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/e16bnkrfldaj6x0kvsjn1/hafy.jpg?rlkey=7a332rk5oc0y6gwrpzdacovcm&st=jorecgj3&raw=1",
    instagram: "https://instagram.com/fajrhfy.wirani_",
  },
  {
    name: "Bayu",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/8qb2beawsj2ztqxrjcytg/bayu.jpg?rlkey=hoa6bq6ybqmdqq4amzi8sr87v&st=k5zt2apz&raw=1",
    instagram: "https://instagram.com/bay_hen_563",
  },
  {
    name: "Syafwan",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/8yy4yloxqb4ir986eyty6/syfwan.jpg?rlkey=964fi5k0tweqm1h7jms29olt5&st=g080oyo0&raw=1",
    instagram: "https://instagram.com/waannskyy",
  },
  {
    name: "Ishna",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/7o568795zf1dqbwhr7393/ishan.jpg?rlkey=xw80d7472wtjzahbjcfz9qv45&st=r391c5kt&raw=1",
    instagram: "https://instagram.com/_nrfwzyh",
  },
  {
    name: "Joo",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/cwrxtg1l4bd838bljs16w/joo.jpg?rlkey=19la1n5cjr7m0uuidbqbb80un&st=lnlmsi8e&raw=1",
    instagram: "https://instagram.com/julioo_aja",
  },
  {
    name: "Lathifa",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/s3see5o1dou3yfelvz89w/lathifa.jpg?rlkey=poc06aqizexw3vhoslh8w1skx&st=1di7961u&raw=1",
    instagram: "https://instagram.com/lupi",
  },
  {
    name: "Ramadhan",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/2oko3g0rxu9mmmgla0l3f/rama.jpg?rlkey=ewqyb2tk8yfvbzujg11m2ex6r&st=66jryery&raw=1",
    instagram: "https://instagram.com/chif_l1",
  },
  {
    name: "Radika",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/rit6rhj3uxwtpiz5yw20h/radika.jpg?rlkey=xq0kefl9gc2rlim7pahdtvnaq&st=tlb0ar57&raw=1",
    instagram: "https://instagram.com/xxdikaa12",
  },
  {
    name: "Mutia",
    role: "Bendahara",
    image: "https://www.dropbox.com/scl/fi/vbuwh33fgjy3ds3gk2i0k/tia.jpg?rlkey=wg5ah9hhnmutgf2e9lrgu0nbo&st=44cpd3uo&raw=1",
    instagram: "https://instagram.com/maviraee",
  },
  {
    name: "Wawa",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/nk92gn35z53nmk7678pg5/wawa.jpg?rlkey=jmdxjcm5v938iedx9di09nel4&st=s1i2i8h0&raw=1",
    instagram: "https://instagram.com/najwahulgusri",
  },
  {
    name: "Ipit",
    role: "Babu",
    image: "https://dl.dropboxusercontent.com/scl/fi/o2laf16qw7dlalxnwipqq/mutpi.png?rlkey=693573vejla6t3qoiii4pd63l",
    instagram: "https://instagram.com/_fthrmzzbah",
  },
  {
    name: "Salma",
    role: "Babu",
    image: "https://www.dropbox.com/scl/fi/6c0k2m28zegi9iqs84np1/salma.jpg?rlkey=4udkhpfkk5x5xgqbh5380n4c9&st=ryai7esk&raw=1",
    instagram: "https://instagram.com/salma.ditaa",
  },
  {
    name: "Kia",
    role: "Bendahara",
    image: "https://www.dropbox.com/scl/fi/9d3z6n8pcqyu3g7djxc1w/kia.jpg?rlkey=95xoawxh5jtwq4ib4h0pdof4r&st=v194ntyz&raw=1l",
    instagram: "https://instagram.com/sazkiarhmdinaa_",
  }
];

// Modal wrapper
function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      {children}
    </div>
  );
}

export default function AnggotaAtiverse() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="member" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-white mb-4">
            Anggota Ativerse
          </h2>
          <div className="w-60 h-1 bg-white  mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            “Para pejuang deadline dan tukang ngopi sejati”
          </p>
        </motion.div>

        {/* Scroll horizontal */}
        <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-48 bg-white/5 rounded-xl p-4 cursor-pointer hover:shadow-xl hover:shadow-gray-500/20 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-400/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-center">{member.name}</h3>
              <p className="text-center text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal detail anggota */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Modal onClose={() => setSelectedIndex(null)}>
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-[350px] mx-auto text-center border border-white/20"
            >
              {/* Tombol close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70"
              >
                <X size={18} className="text-white" />
              </button>

              {/* Data anggota */}
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-gray-500/40">
                <img
                  src={members[selectedIndex].image}
                  alt={members[selectedIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-sm text-gray-300 tracking-wide">
                  {members[selectedIndex].role}
                </h3>
                <h1 className="text-2xl font-bold text-white mt-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {members[selectedIndex].name}
                </h1>
              </div>

              {/* Tombol sosmed */}
              <div className="mt-8 flex flex-col gap-3">
                {members[selectedIndex].instagram && (
                  <a
                    href={members[selectedIndex].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform"
                  >
                    <Instagram size={18} /> Instagram
                  </a>
                )}
                {members[selectedIndex].linkedin && (
                  <a
                    href={members[selectedIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-transform"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                )}
                {members[selectedIndex].github && (
                  <a
                    href={members[selectedIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-lg hover:shadow-gray-700/40 hover:scale-105 transition-transform"
                  >
                    <Github size={18} /> Github
                  </a>
                )}
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
