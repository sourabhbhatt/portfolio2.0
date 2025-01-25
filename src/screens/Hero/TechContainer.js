import React from "react";
import styled from "styled-components";
import { techData } from "./constants";

const TechWrapper = styled.div`
  margin: 2rem 0;

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Default: 2 categories per row */
    gap: 5rem; /* Space between rows */
    justify-content: space-between; /* Distribute space evenly */

    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* Stack categories vertically on smaller screens */
      gap: 3rem; /* Reduce spacing on smaller devices */
    }
  }

  .tech-section {
    .section-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.accent.orange};
    }

    .tech-items {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        gap: 1rem; /* Reduce spacing for tech items on smaller screens */
        justify-content: center; /* Center tech items */
      }

      .tech-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.neutral.light};
        transition: transform 0.3s ease;

        @media (max-width: 768px) {
          font-size: 1.5rem; /* Reduce icon size for smaller screens */
        }

        &:hover {
          transform: scale(1.1);
          color: ${({ theme }) => theme.colors.accent.orange};
        }

        span {
          margin-top: 0.5rem;
          font-size: 0.875rem;

          @media (max-width: 768px) {
            font-size: 0.75rem; /* Adjust text size for mobile screens */
          }
        }
      }
    }
  }
`;

const TechContainer = () => {
  return (
    <TechWrapper>
      <div className="categories-grid">
        {Object.entries(techData).map(([category, items]) => (
          <div key={category} className="tech-section">
            <div className="section-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            <div className="tech-items">
              {items.map((tech) => (
                <div key={tech.name} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TechWrapper>
  );
};

export default TechContainer;
