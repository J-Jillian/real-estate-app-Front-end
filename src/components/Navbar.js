import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import { css } from "styled-components/macro";
import { Button } from "./Button.js";
import logoInmex from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: black;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  heigth: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled.img`
  ${NavLink};
  height: 100px;
  margin-top: -40px;
  margin-left: -40px;
`;

const MenuBars = styled(HiMenuAlt3)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink};
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/" src={logoInmex} />
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contacto" primary="true">
          CONTACT US
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
