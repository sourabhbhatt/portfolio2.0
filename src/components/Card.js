import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaMobileAlt, FaGlobe } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styled components for the Card
const StyledCard = styled(motion.article)`
  background: white;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  /* Consistent dimensions */
  width: 280px; /* Adjusted width */
  height: 380px; /* Adjusted height */
  margin: 0 auto; /* Center align */
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100 || "#f3f3f3"};
  width: 100%; /* Match card width */
  height: 70%; /* Adjusted height for the image container */
  border-bottom: 1px solid #e5e5e5; /* Add separator */

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensure the image is fully contained */
  }
`;

const Badge = styled(motion.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: ${"#000"};
  color: "#000000";
  font-size: 0.85rem;
  font-weight: bold;
  padding: 16px 16px;
  border-radius: 12px;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 80%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

const Info = styled.div`
  background-color: ${({ theme }) => theme.colors.gray800 || "#ebe8e1"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 0; /* Reduced padding */
  flex-grow: 1;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon {
    margin-top: 0.5rem;
    font-size: 2rem; /* Increased size */
    color: ${({ theme }) => theme.colors.yellow300 || "#EFB036"};
  }
`;

const HoverOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%; // show only bottom portion
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none; // prevent hover area expanding

  ${StyledCard}:hover & {
    opacity: 1;
    pointer-events: auto;
  }

  a {
    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    background: transparent;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
      background: white;
      color: black;
    }
  }
`;


export default function Card({ room, index, type = "mobile" }) {
  const { name, slug, images = [], propTypes } = room;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <StyledCard
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Container */}

      <ImageContainer>
        <img src={images[currentIndex]} alt={`${name} project`} />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 30,
                height: 30,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaChevronLeft size={14} color="#000" />
            </button>
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 30,
                height: 30,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaChevronRight size={14} color="#000" />
            </button>
          </>
        )}

        <Badge
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          #{index + 1}
        </Badge>
      </ImageContainer>

      {/* Room Info */}
      <Info>
        <h4 className="text-yellow-400">{name}</h4>
        {type === "mobile" ? (
          <FaMobileAlt className="icon" />
        ) : (
          <FaGlobe className="icon" />
        )}
      </Info>

      {/* Hover Overlay */}
      <HoverOverlay>
        <Link
          to={{
            pathname: `/project/${slug}`,
            state: { roomName: name },
          }}
        >
          View Features
        </Link>
      </HoverOverlay>
    </StyledCard>
  );
}

Card.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
