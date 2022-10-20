import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  overflow: hidden;
  border: 2px solid white;
  font-size: 1rem;
  color: white;
  background: none;
  cursor: pointer;
  padding: 25px 80px;
  display: inline-block;
  margin: 15px 30px;
  text-transform: uppercase;
  outline: none;
  position: relative;
  transition: all 0.3s;
  border-radius: 4rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    box-sizing: border-box;
  }
  :hover {
    background-color: white;
    color: #457b9d;
  }
`;

function Button2({ content }) {
  return (
    <>
      <ButtonContainer>{content}</ButtonContainer>
    </>
  );
}

export default Button2;
