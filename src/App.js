import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

// Create a theme provider for the light theme
import GlobalStyle from "./GlobalStyle";
import { lightTheme } from "./components/Themes";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
