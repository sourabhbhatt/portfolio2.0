import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

function ResumeDownloaderButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    try {
      setIsDownloading(true);
      const resumePath = require("../assets/SourabhResume.pdf");
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "SourabhResume.pdf";
      if (typeof link.download !== "undefined") {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(resumePath, "_blank");
      }
      setTimeout(() => {
        setIsDownloading(false);
        alert("Resume downloaded successfully!");
      }, 1000);
    } catch (error) {
      console.error("Error downloading the resume:", error);
      setIsDownloading(false);
      alert(
        "An error occurred while downloading the resume. Please try again."
      );
    }
  };

  // Animation variants
  const iconVariants = {
    initial: { y: 0 },
    downloading: {
      y: [0, 10, 0], // Bounce effect
      transition: {
        duration: 0.6,
        repeat: isDownloading ? Infinity : 0, // Loop while downloading
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="flex items-center gap-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition w-full md:w-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated Icon */}
      <motion.div
        className="flex justify-center items-center"
        variants={iconVariants}
        initial="initial"
        animate={isDownloading ? "downloading" : "initial"}
      >
        <FiDownload size={24} />
      </motion.div>

      {/* Text for Desktop and Mobile */}
      <span className="text-sm md:text-base">
        {isDownloading ? "Downloading..." : "Download Resume"}
      </span>
    </motion.button>
  );
}

export default ResumeDownloaderButton;
