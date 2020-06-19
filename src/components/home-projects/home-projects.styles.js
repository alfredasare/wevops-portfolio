import styled from "styled-components";
import {typeScale} from "../../utils";

export const HomeProjectsContainer = styled.section`
  height: auto;
  background-color: black;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 8rem;
`;

export const TextContent = styled.div`
  height: 100vh;
  
  @media screen and (min-width: 361px) and (max-width: 520px) {
    height: 90vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 50vh;
  }
  
  @media screen and (width: 1024px) and (max-width: 1366px) {
    height: 65vh;
  }
`;

export const MainHead = styled.h2`
  padding-top: 5rem;
  width: 90%;
  margin: 0 auto;
  font-weight: bold;
  font-size: 4rem;
  color: white;
  
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
  
  @media screen and (min-width: 321px) and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MainContent = styled.div`
  color: white;
  width: 90%;
  margin: 3rem auto;
  font-size: ${typeScale.header4};
  
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const HorizontalLine = styled.hr`
  position: absolute;
  bottom: 0;
  left: 10%;
  z-index: 5;
  width: 80%;
  margin: 0 auto;
  opacity: 0.2;
`;

export const ProjectImages = styled.div`
   height: 90vh;
   width: 90%;
   margin: 0 auto;
   background-color: white;
   border-radius: 7px;
   
   @media screen and (max-width: 520px) {
    width: 100%;
    margin: 0 0;
    height: 30vh;
   }
   
   @media screen and (min-width: 521px) and (max-width: 768px) {
    width: 100%;
    margin: 0 0;
    height: 40vh;
   }
   
   @media screen and (width: 1024px) and (max-width: 1366px) {
    height: 40vh;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
  border-radius: 7px;
`;