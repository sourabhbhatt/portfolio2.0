import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBackground = styled(motion.div)`
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.secondary.main}, ${theme.colors.secondary.dark}, ${theme.colors.accent.orange})`};
  background-size: 200% 200%; /* Allows smooth movement across the gradient */
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative; /* Required for child elements with absolute positioning */
`;

const Wrapper = ({ children }) => {
  return (
    <StyledBackground
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
      transition={{
        duration: 10, 
        ease: "linear",
        repeat: Infinity, // Makes the animation continuous
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </StyledBackground>
  );
};

export default Wrapper;
