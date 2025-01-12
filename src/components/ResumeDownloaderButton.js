import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

function ResumeDownloaderButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate the download process
    setTimeout(() => {
      setIsDownloading(false);
      alert("Resume downloaded successfully!"); // Replace with actual download logic
    }, 2000);
  };

  const iconVariants = {
    initial: { y: 0 },
    downloading: {
      y: [0, 10, 0], // Bounce effect
      transition: {
        duration: 0.6,
        repeat: isDownloading ? Infinity : 1, // Loop while downloading
        ease: "easeInOut",
      },
    },
  };
  return (
    <button
      onClick={handleDownload}
      className="flex items-center px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
    >
      <motion.div
        onClick={handleDownload}
        className="cursor-pointer text-white text-4xl flex justify-center items-center"
        variants={iconVariants}
        initial="initial"
        animate={isDownloading ? "downloading" : "initial"}
      >
        <FiDownload color="#95afc0"  className="px-2" />
      </motion.div>
      {isDownloading ? "Downloading..." : "Download Resume"}
    </button>
  );
}

export default ResumeDownloaderButton;
