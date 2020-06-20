import styled from "styled-components";
import {fadedBlack, typeScale} from "../../utils";

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
  //height: 60vh;
  
  //@media screen and (max-width: 359px) {
  //  height: 80vh;
  //}
  //
  //@media screen and (min-width: 361px) and (max-width: 520px) {
  //  height: 70vh;
  //}

  //@media screen and (min-width: 768px) and (max-width: 1023px) {
  //  height: 40vh;
  //}
  
  //@media screen and (width: 1024px) and (max-width: 1366px) {
  //  height: 45vh;
  //}
`;

export const MainHead = styled.h3`
  padding-top: 5rem;
  width: 90%;
  margin: 0 auto;
  //font-weight: bold;
  font-size: ${typeScale.header3};
  color: white;
  
  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
  
  @media screen and (min-width: 321px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MainContent = styled.div`
  color: ${fadedBlack};
  width: 90%;
  margin: 3rem auto;
  font-size: ${typeScale.header5};
  
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
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
   cursor: pointer;
   
   @media screen and (max-width: 520px) {
    width: 100%;
    margin: 0 0;
    height: 30vh;
   }
   
   @media screen and (min-width: 521px) and (max-width: 768px) {
    width: 100%;
    margin: 0 0;
    height: calc(40vh - 2vh);
   }
   
   @media screen and (width: 1024px) and (max-width: 1366px) {
    height: calc(40vh - 2vh);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
  border-radius: 7px;
`;
export const Button = styled.button`
  padding: 15px 15px;
  border: 1px solid white;
  background: none;
  color: white;
  cursor: pointer;
  margin: 1rem 5% 5rem;
  outline: none;
`;