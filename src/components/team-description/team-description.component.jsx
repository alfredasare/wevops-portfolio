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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex expedita incidunt ipsam libero non
                    provident repellat tempore voluptatibus. Adipisci asperiores ea excepturi labore molestiae mollitia
                    nemo quam quod tempore ullam!
                </TeamDescriptionText>
            </TeamDescriptionTextContainer>
        </TeamDescriptionContainer>
    );
};

export default TeamDescription;