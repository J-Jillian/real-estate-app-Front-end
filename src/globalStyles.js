import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

html, body {
    overflow-x:hidden;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    max-width: 80%;
    margin: auto;
  }

  a {
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
  }

  ul {
    list-style-type: none;
  }

  textarea,
input {
  border: none;
  outline: none;
  background: none;
}

label {
    color: #2d3954;
    font-size: 14px;
  }

  h4 {
    font-weight: 500;
    margin-top: 10px;
  }

  input::placeholder {
    font-size: 17px;
    color: black;
  }

  .box{
    border-left: 1px solid rgba(128, 128, 128, 0.2);

    @media screen and (max-width: 800px) {
      border-left: none;
    }
  }
  

  .shadow {
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  }
  @media screen and (max-width: 800px) {
    .container {
        max-width: 90%;
      }
  }

`;
export default GlobalStyle;
