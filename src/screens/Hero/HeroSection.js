import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled(motion.section)`
  position: relative; /* Ensure relative positioning for stacking */
  min-height: 100vh; /* Occupy the full viewport height */
  display: flex;
  flex-direction: column; /* Stack content vertically by default for mobile */
  align-items: center; /* Center align items */
  justify-content: center; /* Center items vertically */
  padding: 2rem 1.5rem; /* Adjust padding for smaller screens */
  text-align: center; /* Center-align text for smaller screens */
  width: 100%;
  z-index: 1; /* Prevent overlapping issues with other components */

  /* Allow the section to shrink or grow dynamically based on content */
  @media (min-width: 768px) {
    flex-direction: row; /* Switch to row layout for larger screens */
    align-items: center; /* Keep items vertically centered */
    justify-content: space-between; /* Space out items for larger screens */
    padding: 3rem; /* Add more padding for larger screens */
    text-align: left; /* Left-align text for larger screens */
    min-height: auto; /* Let height adjust based on content */
  }

  /* Ensure spacing between this and the next section */
  & + * {
    margin-top: 2rem;
  }

  /* Adjust layout for extremely large screens */
  @media (min-width: 1200px) {
    padding: 4rem;
    gap: 2rem; /* Add space between child elements */
  }
`;

export default HeroSection;
