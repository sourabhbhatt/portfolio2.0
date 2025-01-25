import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import TechContainer from "./TechContainer";
import ProfileAndStats from "./ProfileAndStats";
import ContentContainer from "./ContentContainer";

const Hero = () => {
  return (
    <HeroSection>
      <ProfileAndStats />
      <ContentContainer>
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I Am <span className="text-yellow-400">Sourabh Bhatt</span>
        </motion.h1>

        <motion.p
          className="text-lg mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A Full-Stack Developer skilled in crafting exceptional web and mobile
          experiences. Passionate and dedicated Full-Stack Developer with over 5
          years of experience in creating exceptional web and mobile
          applications. I love transforming ideas into real-world solutions that
          help users achieve their goals.
        </motion.p>
        <TechContainer />
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
