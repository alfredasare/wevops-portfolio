import React from "react";
import {
    TeamDescriptionContainer,
    TeamDescriptionImage,
    TeamDescriptionImageContainer, TeamDescriptionMainHead, TeamDescriptionText,
    TeamDescriptionTextContainer
} from "./team-description.styles";

const TeamDescription = () => {

    return (
        <TeamDescriptionContainer>
            <TeamDescriptionImageContainer>
                <TeamDescriptionImage src={require('../../assets/images/spiral.jpg')} alt="vase"/>
            </TeamDescriptionImageContainer>
            <TeamDescriptionTextContainer>
                <TeamDescriptionMainHead>A small team with big ideas</TeamDescriptionMainHead>
                <TeamDescriptionText>
                    We are a driven team, passionate about web design and development. We support
                    businesses who are just starting out, or ones looking to grow, with creative and
                     user-friendly work.
                </TeamDescriptionText>
            </TeamDescriptionTextContainer>
        </TeamDescriptionContainer>
    );
};

export default TeamDescription;