import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

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
    ft: 1px solid rgba(128, 128, 128, 0.2);

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

  .grid5 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
  }

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

  .grid4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
  .mb {
    margin-bottom: 80px;
  }

  .padding {
    padding: 80px 0;
  }

  @media screen and (max-width: 800px) {
    .grid4,
    .grid3,
    .grid5 {
      grid-template-columns: repeat(2, 1fr);
    }
  

    .back::after,
    .back img,
    .back {
      height: 30vh;
    }
  }

  .back {
    height: 40vh;
    position: relative;
  }
  .back img {
    height: 40vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }

  .back::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40vh;
    background: rgba(17, 40, 72, 0.629);
    z-index: -1;
  }
  .back .container {
    color: #fff;
    padding: 120px 0;
  }
  .back h1 {
    font-size: 40px;
    font-weight: 500;
  }


`;
export default GlobalStyle;
