import styled from "styled-components";
import {typeScale} from "../../utils";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
   & >:nth-child(even) > *{
  animation:  ${({ open }) => open ? 'slide-left 0.8s ease-in-out 0.3s both,' +
    'color-change 0.5s ease-out 1.3s both' : 'none'};
  }
  & >:nth-child(odd) > *{
  animation:  ${({ open }) => open ? 'slide-right 0.8s ease-in-out 0.3s both,' +
    'color-change 0.5s ease-out 1.3s both' : 'none'};
  }
`;
export const MenuContent = styled.h4`
  color: white;
  font-size: ${typeScale.header4};
  margin-bottom: 10vh;
  cursor: pointer;
  &:hover{
  color: white !important;
  }
`;