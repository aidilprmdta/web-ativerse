import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
      />
    </div>
  );
};

export default Loading;
