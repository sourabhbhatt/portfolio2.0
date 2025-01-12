import React from "react";

function Header() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="flex gap-4">
        <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
