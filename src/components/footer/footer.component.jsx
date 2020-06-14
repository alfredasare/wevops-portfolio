import React from "react";
import {
    Address,
    ContactRow,
    FooterContainer,
    FooterStatement,
    FooterStatementHeader,
    SocialMediaContainer, SocialMediaLink, SocialMediaLinkItem, SocialMediaUl
} from "./footer.styles";

const Footer = () => {

    return (
        <FooterContainer>
            <FooterStatement>
                <FooterStatementHeader>
                    Contact us so we can create something beautiful together
                </FooterStatementHeader>
            </FooterStatement>
            <ContactRow>
                <Address>
                    Located at Lashibi and Abossey-Okai,
                    Accra
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
            </ContactRow>
        </FooterContainer>
    );
};

export default Footer;