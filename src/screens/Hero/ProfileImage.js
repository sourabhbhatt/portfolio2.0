import React from "react";
import styled from "styled-components";

const StyledProfileImage = styled.img`
  width: 350px;
  height: 380px;
  border-radius: 2%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  object-fit: contain; /* Ensures the image maintains aspect ratio while filling its container */

  @media (max-width: 768px) {
    width: 80%; /* Adjust width for smaller screens */
    max-width: 350px; /* Limit max width to maintain visual balance */
    height: auto; /* Auto height to maintain aspect ratio */
  }

  @media (max-width: 480px) {
    width: 100%; /* Adjust for very small screens */
  }
`;

const ProfileImage = ({ src, alt = "Profile image", className = "", style = {} }) => {
  return (
    <StyledProfileImage
      src={src || "default-profile.png"} /* Fallback to default image if src is missing */
      alt={alt}
      loading="lazy" /* Optimize loading for performance */
      className={className}
      style={style} /* Allow inline styles for additional customization */
    />
  );
};

export default ProfileImage;
