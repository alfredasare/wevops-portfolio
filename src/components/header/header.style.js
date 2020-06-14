import styled from "styled-components";
import {fadedBlack, typeScale} from "../../utils";

export const PageTitle = styled.div`
  width: 100%;
  color: white;
  background-color: black;
  padding: 70px 10% 35px;
  & *{
  margin: 0;
  }
`;
export const TitleHeader = styled.h5`
  font-size: ${typeScale.header5};
  color: ${fadedBlack};
  margin-bottom: 20px;
`;
export const TitleText = styled.h4`
  font-size: ${typeScale.header4};
`;