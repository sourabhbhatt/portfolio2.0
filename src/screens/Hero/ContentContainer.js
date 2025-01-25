import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-align content for mobile */
  margin-left: 0; /* Remove left margin for mobile */
  margin-top: 20px;

  @media (min-width: 768px) {
    align-items: flex-start; /* Align content to the left for larger screens */
    margin-left: 3rem; /* Add left margin for larger screens */
  }
`;

export default ContentContainer;
