import React from "react";
import styled from "styled-components";

const Box = styled.div`
  .container {
    color: #fff;
    padding: 120px 0;
  }
`;

const BoxBack = styled.div`
  height: 40vh;
  position: relative;

  img {
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40vh;
    background: rgba(17, 40, 72, 0.629);
    z-index: -1;
  }

  h1 {
    font-size: 40px;
    font-weight: 500;
  }
`;

function Back({ name, tittle, cover }) {
  return (
    <>
      <BoxBack className="back">
        <Box className="container">
          <span>{name}</span>
          <h1>{tittle}</h1>
        </Box>
        <img src={cover} art="" />
      </BoxBack>
    </>
  );
}

export default Back;
