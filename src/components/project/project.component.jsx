import React from "react";
import {ImageContainer, ProjectLogo, ProjectWrapper} from "./project.style";

const Project = ({image, projectName, logo}) => {
    return (
        <ProjectWrapper>
            <ImageContainer image={image}>
            </ImageContainer>
            <ProjectLogo src={logo} alt="project logo"/>
        </ProjectWrapper>

    )
};

export default Project;