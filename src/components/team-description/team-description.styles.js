import styled from "styled-components";
import {typeScale} from "../../utils";

export const TeamDescriptionContainer = styled.section`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  
  @media screen and (max-width: 360px) {
    height: 80vh;
    margin-bottom: 20vh;
  }
  
  @media screen and (min-width: 361px) and (max-width: 520px) {
    height: 80vh;
    margin-bottom: 60px;
    margin-top: -120px;
  }
  
  @media screen and (min-width: 521px) and (max-width: 768px) {
    height: 70vh;
    margin-top: -30vh
  }
`;

export const TeamDescriptionImageContainer = styled.div`
  width: 58%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  
  @media screen and (max-width: 768px) {
    height: 40vh;
    width: 100%;
    margin-top: 50px;
  }
`;

export const TeamDescriptionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const TeamDescriptionTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 130px;
  
  @media screen and (max-width: 360px) {
    margin-top: 35rem;
  }

  @media screen and (min-width: 361px) and (max-width: 520px) {
    margin-top: 33rem;
  }
  
  @media screen and (min-width: 521px) and (max-width: 768px) {
    margin-top: 25rem;
    justify-content: center;
    padding-bottom: 0;
  }
  
`;

export const TeamDescriptionMainHead = styled.h4`
  font-size: ${typeScale.header4};
  width: 40%;
  padding: 0 50px 10px 50px;
  
    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: ${typeScale.header5};
    }
`;

export const TeamDescriptionText = styled.p`
  font-size: ${typeScale.paragraph};
  width: 40%;
  padding: 0 50px 0 50px;
  
    @media screen and (max-width: 768px) {
      width: 100%;
    }
`;