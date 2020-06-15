import React from "react";
import {
    Address,
    ContactRow, CopyRight, CopyRightRow, CopyRightText, EmailTelContainer, EmailTelItem,
    FooterContainer, FooterNavLinkItem, FooterNavLinks,
    FooterStatement,
    FooterStatementHeader,
    SocialMediaContainer, SocialMediaLink, SocialMediaLinkItem, SocialMediaUl
} from "./footer.styles";

const Footer = () => {

    return (
        <FooterContainer id="contact">
            <FooterStatement>
                <FooterStatementHeader>
                    Contact us so we can create something beautiful together
                </FooterStatementHeader>
            </FooterStatement>
            <ContactRow>
                <Address>
                    <p>Located at Lashibi Community 19, Accra</p>
                    <p>or Abossey Okai, Accra</p>
                </Address>
                <SocialMediaContainer>
                    <SocialMediaUl>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="/#">Twitter</SocialMediaLink>
                        </SocialMediaLinkItem>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="/#">Facebook</SocialMediaLink>
                        </SocialMediaLinkItem>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="/#">Instagram</SocialMediaLink>
                        </SocialMediaLinkItem>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="/#">Behance</SocialMediaLink>
                        </SocialMediaLinkItem>
                    </SocialMediaUl>
                </SocialMediaContainer>
                <EmailTelContainer>
                    <EmailTelItem>wevops@gmail.com</EmailTelItem>
                    <EmailTelItem>+233501429666</EmailTelItem>
                </EmailTelContainer>
            </ContactRow>
            <CopyRightRow>
                <CopyRight>
                    <CopyRightText>Developed by wevops &copy; 2020</CopyRightText>
                </CopyRight>
                <FooterNavLinks>
                    <FooterNavLinkItem href="/#">Home</FooterNavLinkItem>
                    <FooterNavLinkItem href="/#">Projects</FooterNavLinkItem>
                    <FooterNavLinkItem href="/#">Privacy</FooterNavLinkItem>
                    <FooterNavLinkItem href="/#">Security</FooterNavLinkItem>
                </FooterNavLinks>
            </CopyRightRow>
        </FooterContainer>
    );
};

export default Footer;