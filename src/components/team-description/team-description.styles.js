import styled from "styled-components";
import {typeScale} from "../../utils/typography";

export const TeamDescriptionContainer = styled.section`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const TeamDescriptionImageContainer = styled.div`
  width: 58%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
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
`;

export const TeamDescriptionMainHead = styled.h4`
  font-size: ${typeScale.header4};
  width: 40%;
  padding: 0 50px 10px 50px;
`;

export const TeamDescriptionText = styled.p`
  font-size: ${typeScale.paragraph};
  width: 40%;
  padding: 0 50px 0 50px;
`;