import styled from "styled-components";
import {typeScale} from "../../utils";

export const FooterContainer = styled.footer`
  height: 100vh;
  background-color: black;
  color: white;
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
  justify-content: space-around;
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

export const EmailTelContainer = styled.div``;