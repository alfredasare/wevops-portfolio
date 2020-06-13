import React from "react";
import {
    FadedH5,
    LandingContainer,
    LandingFooter,
    LandingFooterLink,
    MainContent,
    SubContent,
    SubContentText
} from "./landing.styles";

const LandingComponent = () => {

    return (
        <LandingContainer>
            <MainContent>
                <FadedH5>Welcome to wevops</FadedH5>
                <SubContent>
                    <SubContentText>
                        We offer high-quality UI/UX designs and websites tailor-made to your requirements
                    </SubContentText>
                </SubContent>
            </MainContent>
            <LandingFooter>
                <LandingFooterLink>scroll down</LandingFooterLink>
            </LandingFooter>
        </LandingContainer>
    );
};

export default LandingComponent;