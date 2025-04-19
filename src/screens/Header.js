import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../assets/logo.svg";
import ResumeDownloaderButton from "../components/ResumeDownloaderButton";

function Header({ style = {}, onNavigate = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: "home", value: "Home" },
    { key: "projects", value: "Projects" },
    { key: "experiences", value: "Dev Journey" },
    { key: "articles", value: "Tech Experiments" },
    { key: "contact", value: "Ping Me" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigate = (key) => {
    if (key === "articles")
      window.open("https://sourabhbhatt.github.io/sourBlitz/", "_blank");
    else onNavigate(key);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 bg-black bg-opacity-70 text-white px-6 py-4 shadow-sm z-50 ${style} `}
    >
      <div className="flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold cursor-pointer flex items-center gap-2"
          onClick={() => handleNavigate("home")}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-full p-1">
            <Logo className="w-10 h-10" />
          </div>
          {`Portfolio`}
        </motion.h1>

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

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <ResumeDownloaderButton />
          </motion.div>
        </nav>

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
