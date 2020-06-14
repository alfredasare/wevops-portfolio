import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: black;
  height: 132vh;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;