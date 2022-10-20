import React from "react";
import styled from "styled-components";

const Box = styled.div``;

function Back({ name, tittle, cover }) {
  return (
    <>
      <Box className="back">
        <Box className="container">
          <span>{name}</span>
          <h1>{tittle}</h1>
        </Box>
        <img src={cover} art="" />
      </Box>
    </>
  );
}

export default Back;
