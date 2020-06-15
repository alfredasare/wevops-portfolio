import styled from "styled-components";
import {typeScale} from "../../utils";

export const AboutSectionContainer = styled.section`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const AboutSectionContent = styled.div`
  padding-top: 100px;
  width: 80%;
  margin: 0 auto;
  
  @media screen and (min-width: 521px) and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const AboutSectionTextContainer = styled.div`
  width: 50%;
  
  @media screen and (max-width: 360px) {
    width: 100%;
    margin-top: 10rem;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    width: 100%;
    margin-top: 6rem;
  }
`;

export const AboutSectionFadedHead = styled.h5`
  font-size: ${typeScale.header5};
  
  @media screen and (max-width: 520px) {
    font-size: ${typeScale.paragraph};
  }
`;

export const AboutSectionMainHead = styled.h4`
  font-size: ${typeScale.header4};
  
  @media screen and (max-width: 520px) {
    font-size: ${typeScale.header5};
  }
`;

export const AboutSectionText = styled.p`
  font-size: ${typeScale.paragraph};
  width: 80%;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutSectionImageContainer = styled.div`
  width: 42%;
  height: calc(100vh - 100px);
  position: absolute;
  right: 0;
  bottom: 0;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    top: 0;
    left: 0;
    height: 40vh;
  }
`;

export const AboutSectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const NextDarkButton = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: black;
  color: white;
  border: none;
  z-index: 2;
  position: absolute;
  left: 0;
  bottom: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
 
    &:hover {
        i {
          transform: translate(-120%, 0);
        }
        
        span {
          transform: translate(-40%, 0);
        }
    }
  
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonRightIcon = styled.i`
    transition: transform ease-in 0.2s;
    transform: translate(55%, 0);
    width: 100%;
    text-align: center;
`;

export const ButtonRightSpan = styled.span`
    transition: transform ease-in 0.2s;
    transform: translate(120%, 0%);
`;

export const PreviousDarkButton = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: black;
  color: white;
  border: none;
  z-index: 2;
  position: absolute;
  left: -5.02rem;
  bottom: 0;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  
    &:hover {
        i {
          transform: translate(120%, 0);
        }
        
        span {
          transform: translate(10%, 0);
        }
    }
  
  &:focus {
    outline: none;
  }
`;

export const ButtonLeftIcon = styled.i`
    transition: transform ease-in 0.2s;
    transform: translate(-230%, 0);
    width: 100%;
    text-align: center;
`;

export const ButtonLeftSpan = styled.span`
    transition: transform ease-in 0.2s;
    transform: translate(-120%, 0%);
`;