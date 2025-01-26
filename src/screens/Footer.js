import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sourabh-b-399476b0/",
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sourabhbhatt",
    icon: <FaGithub size={24} />,
    label: "GitHub",
  },
  {
    href: "mailto:sourabhbhatt.77@gmail.com",
    icon: <FaEnvelope size={24} />,
    label: "Email",
  },
];

function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="text-center md:text-left mb-6 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold">Sourabh's Portfolio</h3>
          <p className="text-gray-400 text-sm">
            Crafting exceptional mobile experiences with React Native.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-6 text-sm text-gray-500"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        © {new Date().getFullYear()} Sourabh. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
