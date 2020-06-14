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
`;

export const AboutSectionTextContainer = styled.div`
  width: 50%;
`;

export const AboutSectionFadedHead = styled.h5`
  font-size: ${typeScale.header5};
`;

export const AboutSectionMainHead = styled.h4`
  font-size: ${typeScale.header4};
`;

export const AboutSectionText = styled.p`
  font-size: ${typeScale.paragraph};
  width: 80%;
`;

export const AboutSectionImageContainer = styled.div`
  width: 42%;
  height: calc(100vh - 100px);
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const AboutSectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;