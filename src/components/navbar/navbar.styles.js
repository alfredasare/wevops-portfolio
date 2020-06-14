import styled from "styled-components";
import {typeScale} from "../../utils";

export const NavBarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 50px 0;
  color: white;
  z-index: 50;
  background-color: black;
  transition: top 90ms linear, padding 90ms linear;
`;

export const NavBarRow = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarBrand = styled.a`
  font-size: ${typeScale.header5};
  z-index: 10;
  color: white;
`;

export const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
`;

export const NavMenuText = styled.h5`
  font-size: ${typeScale.header5};
  margin-right: 1rem;
`;

export const NavMenuIcon = styled.div``;