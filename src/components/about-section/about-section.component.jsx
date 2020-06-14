import React from "react";
import {
    AboutSectionContainer,
    AboutSectionContent,
    AboutSectionFadedHead, AboutSectionImage, AboutSectionImageContainer, AboutSectionMainHead, AboutSectionText,
    AboutSectionTextContainer
} from "./about.styles";


const AboutSection = () => {
    return (
        <AboutSectionContainer>
            <AboutSectionContent>
                <AboutSectionTextContainer>
                    <AboutSectionFadedHead>What we do</AboutSectionFadedHead>
                    <AboutSectionMainHead>We develop and build websites</AboutSectionMainHead>
                    <AboutSectionText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex excepturi, id iure
                        molestiae molestias mollitia nam necessitatibus neque nulla obcaecati perferendis porro
                        praesentium quaerat tempora vitae voluptas voluptate voluptatem!
                    </AboutSectionText>
                </AboutSectionTextContainer>
                <AboutSectionImageContainer>
                    <AboutSectionImage src={require('../../assets/images/about-section.jpg')} alt="mac book pro and diary"/>
                </AboutSectionImageContainer>
            </AboutSectionContent>
        </AboutSectionContainer>
    );
};

export default AboutSection;