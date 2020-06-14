import styled from "styled-components";
import {fadedBlack, typeScale} from "../../utils";

export const FooterContainer = styled.footer`
  height: 100vh;
  background-color: black;
  color: white;
  position: relative;
`;

export const FooterStatement = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

export const FooterStatementHeader = styled.h3`
  font-size: ${typeScale.header3};
  width: 50%;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
`;

export const AddressContainer = styled.div`
  
`;

export const Address = styled.address`
  font-size: ${typeScale.paragraph};
  
`;

export const SocialMediaContainer = styled.div`

`;

export const SocialMediaUl = styled.ul`
  list-style-type: none;
`;

export const SocialMediaLinkItem = styled.li`
  padding-bottom: 5px;
`;

export const SocialMediaLink = styled.a`
  color: white;
  padding-bottom: 1px;
  
  &:hover {
    border-bottom: white 1px dotted;
  }
`;

export const EmailTelContainer = styled.h5`
font-size: ${typeScale.header5};
line-height: 1rem;
`;

export const EmailTelItem = styled.p``;

export const CopyRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  position: absolute;
  bottom: 5rem;
  left: 10%;
  padding-bottom: 50px;
`;

export const CopyRight = styled.div`
  width: 30%;
  color: ${fadedBlack};
`;

export const CopyRightText = styled.p`
  font-size: ${typeScale.paragraph};
`;

export const FooterNavLinks = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterNavLinkItem = styled.a`
  color: white;
  height: 20px;
  
  &:hover {
    border-bottom: white 1px dotted;
  }
`;