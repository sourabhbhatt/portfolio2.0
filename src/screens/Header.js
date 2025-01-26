import React, { useState } from "react";
import { motion } from "framer-motion";
import ResumeDownloaderButton from "../components/ResumeDownloaderButton";

function Header({ style = {}, onNavigate = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { key: "articles", value: "Articles" },
    { key: "home", value: "Home" },
    { key: "experiences", value: "Experiences" },
    { key: "projects", value: "My Projects" },
    { key: "contact", value: "Let's Talk" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigate = (key) => {
    onNavigate(key);
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <header
      className={`sticky top-0 bg-black bg-opacity-70 text-white px-6 py-4 shadow-sm z-50 ${style} `}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold cursor-pointer"
          onClick={() => handleNavigate("home")}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {`Portfolio`}
        </motion.h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.span
              key={item.key}
              className="hover:text-gray-300 transition duration-200 cursor-pointer"
              onClick={() => handleNavigate(item.key)}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {item.value}
            </motion.span>
          ))}

          {/* Resume Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <ResumeDownloaderButton />
          </motion.div>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-black bg-opacity-90 text-white p-6 absolute top-16 left-0 right-0 z-40 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <span
              key={item.key}
              className="hover:text-gray-300 transition duration-200 cursor-pointer text-lg"
              onClick={() => handleNavigate(item.key)}
            >
              {item.value}
            </span>
          ))}
          <ResumeDownloaderButton />
        </motion.div>
      )}
    </header>
  );
}

export default Header;
