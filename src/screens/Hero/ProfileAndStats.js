import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import StatsContainer from "./StatsContainer";
import profileImage from "../../assets/SOURABH_PP1.png";

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items */
  justify-content: center; /* Center vertically (if required) */
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: column; /* Maintain column layout */
    align-items: center; /* Ensure items remain center aligned */
    text-align: center; /* Keep text centered */
    gap: 2rem; /* Increase spacing on larger screens */
  }
`;


const AnimatedProfileImage = motion(ProfileImage);

const ProfileAndStats = () => {
  return (
    <ProfileSection
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <AnimatedProfileImage src={profileImage} alt="Sourabh Bhatt" />

      {/* Stats Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <StatsContainer />
      </motion.div>
    </ProfileSection>
  );
};

export default ProfileAndStats;
