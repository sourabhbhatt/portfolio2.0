import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";

import Hero from "./screens/Hero";
import Header from "./screens/Header";
import Contact from "./screens/Contact";
import GlobalStyle from "./GlobalStyle";
import Projects from "./screens/Projects";
import Wrapper from "./components/Wrapper";
import { theme } from "./components/Themes";
import Footer from "./screens/Footer";
import Articles from "./screens/Articles";
import Experiences from "./screens/Experiences";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experiencesRef = useRef(null);
  const articlesRef = useRef(null);

  const handleNavigate = (id) => {
    const sectionMap = {
      home: homeRef,
      projects: projectsRef,
      contact: contactRef,
      experiences: experiencesRef,
      articles: articlesRef,
    };

    const targetSection = sectionMap[id];
    if (targetSection?.current) {
      targetSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header onNavigate={handleNavigate} />

        <section id="home" ref={homeRef}>
          <Hero />
        </section>

        <section id="experiences" ref={experiencesRef}>
          <Experiences />
        </section>

        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>

        <section id="articles" ref={articlesRef}>
          <Articles />
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
