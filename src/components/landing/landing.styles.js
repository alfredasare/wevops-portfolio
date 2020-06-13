import styled from "styled-components";
import {fadedBlack, typeScale} from "../../utils";

export const LandingContainer = styled.header`
  height: 100vh;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const FadedH5 = styled.h5`
  color: ${fadedBlack};
  font-size: ${typeScale.header5};
  margin-bottom: 20px;
`;

export const SubContent = styled.div`
  color: white;
  width: 70%;
`;

export const SubContentText = styled.h3`
  font-size: ${typeScale.header3};
`;

export const LandingFooter = styled.div`
  width: 80%;
  left: 10%;
  margin: 0 auto;
  position: absolute;
  bottom: 5rem;
  text-align: right;
`;

export const LandingFooterLink = styled.a`
  color: white;
  
`;