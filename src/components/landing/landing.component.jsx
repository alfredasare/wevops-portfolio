import React from "react";
import {
    FadedH5,
    LandingContainer,
    LandingFooter,
    LandingFooterLink,
    MainContent, ScrollIconWrapper,
    SubContent,
    SubContentText
} from "./landing.styles";
import {ScrollDownIcon} from "../icons/icons.component";

const LandingComponent = () => {

    return (
        <LandingContainer>
            <MainContent>
                <FadedH5 data-soa="fade-in">Welcome to wevops</FadedH5>
                <SubContent>
                    <SubContentText data-soa="text-animate">
                        We offer high-quality UI/UX designs and websites tailor-made to your requirements
                    </SubContentText>
                </SubContent>
            </MainContent>
            <LandingFooter>
                <ScrollIconWrapper data-soa="scroll-down">
                    <ScrollDownIcon/>
                </ScrollIconWrapper>
                <LandingFooterLink>scroll down</LandingFooterLink>
            </LandingFooter>
        </LandingContainer>
    );
};

export default LandingComponent;