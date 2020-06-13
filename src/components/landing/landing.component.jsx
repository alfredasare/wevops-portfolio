import React from "react";
import {FadedH2, LandingContainer, MainContent} from "./landing.styles";

const LandingComponent = () => {

    return (
        <LandingContainer>
            <MainContent>
                <FadedH2>Welcome to wevops</FadedH2>
            </MainContent>
        </LandingContainer>
    );
};

export default LandingComponent;