import styled from "styled-components";
import {fadedBlack, typeScale} from "../../utils";

export const PageTitle = styled.div`
  width: 100%;
  color: white;
  background-color: black;
  padding: 70px 10%;
  & *{
  margin: 0;
  }
`;
export const TitleHeader = styled.h5`
  font-size: ${typeScale.header5};
  color: ${fadedBlack};
  animation: text-appear 1s ease-in-out both;
  margin-bottom: 20px;
   @keyframes text-appear{
  0%{
  opacity: 0;
  }
  100%{
  opacity: 1;
  }
  }
`;
export const TitleText = styled.h4`
  font-size: ${typeScale.header4};
  min-height: 82px;
`;