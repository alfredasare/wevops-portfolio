import styled from "styled-components";
import {fadedBlack, typeScale} from "../../utils";

export const FooterContainer = styled.footer`
  height: 100vh;
  background-color: black;
  color: white;
  position: relative;
`;

export const FooterStatement = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 10rem;
  padding-bottom: 10rem;
  
  @media screen and (max-width: 320px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  @media screen and (min-width: 321px) and (max-width: 520px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  
  @media screen and (min-width: 521px) and (max-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
    width: 90%;
  }
`;

export const FooterStatementHeader = styled.h3`
  font-size: ${typeScale.header3};
  width: 70%;
  margin-left: 10%;
  
  @media screen and (max-width: 320px) {
    font-size: 1.3rem;
    width: 90%;
    padding-top: 20px;
  }
  
  @media screen and (min-width: 321px) and (max-width: 520px) {
    width: 90%;
    margin: 0 auto;
    font-size: ${typeScale.header5};
    text-align: center;
  }
  
  @media screen and (min-width: 521px) and (max-width: 768px) {
    margin: 0 0;
    width: 90%;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  @media screen and (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
  }
  
  @media screen and (min-width: 321px) and (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  @media screen and (min-width: 521px) and (max-width: 768px) {
    margin-top: 20vh;
    width: 100%;
  }
  
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    margin-top: 20vh;
  }
`;

export const AddressContainer = styled.div`
  
`;

export const Address = styled.address`
  font-size: ${typeScale.paragraph};
  
  @media screen and (max-width: 520px) {
    text-align: center;
  }
`;

export const SocialMediaContainer = styled.div`

`;

export const SocialMediaUl = styled.ul`
  list-style-type: none;
  @media screen and (max-width: 520px) {
    padding-left: 0;
  }
  
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
    
    @media screen and (max-width: 520px) {
      text-align: center;
    }
`;

export const EmailTelItem = styled.p``;

export const CopyRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  bottom: 5rem;
  padding-bottom: 50px;
  position: absolute;
  
  @media screen and (max-width: 360px) {
    padding-bottom: 10px;
    flex-direction: column-reverse;
    align-items: center;
    bottom: 0;
  }
  
  @media screen and (min-width: 361px) and (max-width: 520px) {
    padding-bottom: 20px;
    flex-direction: column-reverse;
    align-items: center;
    bottom: 0;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 20px;
    flex-direction: column-reverse;
    align-items: center;
    bottom: 5rem;
    width: 90%;
    left: 5%;
  }
`;

export const CopyRight = styled.div`
  width: 30%;
  color: ${fadedBlack};
  text-align: center;
  
  @media screen and (max-width: 520px) {
    width: 100%;
  }
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
  
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const FooterNavLinkItem = styled.a`
  color: white;
  height: 20px;
  
  &:hover {
    border-bottom: white 1px dotted;
  }
`;