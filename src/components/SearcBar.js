import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const SearcBar = () => {
  return (
    <section className="searchbar-section">
      <div className="container">
        <form className="flex">
          <div className="box">
            <span>Ciudad/Calle</span>
            <input type="text" placeholder="Ubicación" />
          </div>
          <div className="box">
            <span>Propiedad</span>
            <input type="text" placeholder="Tipo de propiedad" />
          </div>
          <div className="box">
            <span>Precio</span>
            <input type="text" placeholder="rango de precio " />
          </div>
          <div className="box">
            <h4>Filtros Avanzados</h4>
          </div>
          <button className="btn">
            <BiSearchAlt />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearcBar;
