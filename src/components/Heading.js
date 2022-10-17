import React from "react";
import styled from "styled-components";

const HeadingContainer = styled.div`
  text-align: center;
  width: 60%;
  margin: auto;

  h1 {
    color: #2d3954;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 35px;
  }

  p {
    color: #72809d;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <HeadingContainer>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </HeadingContainer>
    </>
  );
};

export default Heading;
