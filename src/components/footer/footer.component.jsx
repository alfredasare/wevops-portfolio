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
                    <p>Located at Lashibi, Tema Community 19, Accra</p>
                </Address>
                <SocialMediaContainer>
                    <SocialMediaUl>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="https://twitter.com/_wevops" target="_blank">Twitter</SocialMediaLink>
                        </SocialMediaLinkItem>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="https://web.facebook.com/Wevops-104263934675793" target="_blank">
                                Facebook</SocialMediaLink>
                        </SocialMediaLinkItem>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="https://www.instagram.com/wevops/" target="_blank">Instagram</SocialMediaLink>
                        </SocialMediaLinkItem>
                        <SocialMediaLinkItem>
                            <SocialMediaLink href="https://www.behance.net/wevops/" target="_blank">Behance</SocialMediaLink>
                        </SocialMediaLinkItem>
                    </SocialMediaUl>
                </SocialMediaContainer>
                <EmailTelContainer>
                    <EmailTelItem
                        href="mailto:w3vops@gmail.com?subject=Let%20us%20collaborate%20to%20build%20a%20website"
                        target="_blank">w3vops@gmail.com</EmailTelItem>
                    <EmailTelItem>+233245027821</EmailTelItem>
                    <EmailTelItem>+233506628889</EmailTelItem>
                </EmailTelContainer>
            </ContactRow>
            <CopyRightRow>
                <CopyRight>
                    <CopyRightText>Developed by wevops &copy; 2020</CopyRightText>
                </CopyRight>
                <FooterNavLinks>
                    <FooterNavLinkItem href="/#">Home</FooterNavLinkItem>
                    <FooterNavLinkItem href="/works">Projects</FooterNavLinkItem>
                    <FooterNavLinkItem href="/#about">About</FooterNavLinkItem>
                    {/*<FooterNavLinkItem href="/#contact">Contact</FooterNavLinkItem>*/}
                </FooterNavLinks>
            </CopyRightRow>
        </FooterContainer>
    );
};

export default Footer;