import React from "react";
import {ImageContainer, ProjectLogo, ProjectReason, ProjectWrapper} from "./project.style";

const Project = ({image, projectName, logo}) => {

    const projectClick = () => {
        const logo = document.querySelector(`#logo${projectName}`);
        const reason = document.querySelector(`#reason${projectName}`);
        logo.style.animation = "text-appear 0.5s ease-in reverse both, zoom 0.5s ease-in both";
        reason.style.animation = "text-appear 0.5s ease-in 0.2s both, zoom 0.5s ease-in both";
    };

    return (
        <ProjectWrapper onClick={projectClick}>
            <ImageContainer image={image}>
            </ImageContainer>
            <ProjectLogo src={logo} alt="project logo" id={`logo${projectName}`}/>
            <ProjectReason id={`reason${projectName}`}>
                Web design for {projectName}
            </ProjectReason>
        </ProjectWrapper>

    )
};

export default Project;