import React from "react";
import styled from "styled-components";
import { statsData } from "./constants";

const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  min-height: 110px;
  background-color: rgba(243, 243, 243, 0.1);

  .stat {
    text-align: center;
    padding: 1rem;
    flex: 1;
    max-width: 200px;

    h3 {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.accent.orange};
    }

    p {
      font-size: 1.025rem;
      color: ${({ theme }) => theme.colors.neutral.light};
    }
  }

  .separator {
    width: 1px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.neutral.dark};
  }
`;

const StatsContainer = () => {
  return (
    <StatsWrapper>
      {statsData.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="stat">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
          {index < statsData.length - 1 && <div className="separator" />}
        </React.Fragment>
      ))}
    </StatsWrapper>
  );
};

export default StatsContainer;
