import React from "react";
import { motion } from "framer-motion";
import ResumeDownloaderButton from "./ResumeDownloaderButton";

function Hero() {
  return (
    <motion.section
      id="hero"
      className="text-center py-16 px-4 md:px-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-yellow-400">Sourabh</span>
        </h1>
        <p className="text-2xl mt-4">
          A React Native Developer crafting exceptional mobile experiences.
        </p>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <ResumeDownloaderButton />
      </motion.div>

      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold">5+</h3>
          <p className="text-lg">Years of Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-lg">Apps Developed</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">100K+</h3>
          <p className="text-lg">Downloads</p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
