import React from "react";
import {Image, ImageContainer, ProjectLogo, ProjectWrapper} from "./project.style";
import {Link} from "react-router-dom";

const Project = ({image, projectName, logo}) => {

    const projectClick = () => {
        const logo = document.querySelector(`#logo${projectName}`);
        logo.style.animation = "text-appear 0.5s ease-in reverse both, zoom 0.5s ease-in both";

    };

    return (
        <Link to={`/works/${projectName}`}>
            <ProjectWrapper onClick={projectClick}>
                <ImageContainer>
                    <Image src={image} alt={`${projectName} project`}/>
                </ImageContainer>
                <ProjectLogo src={logo} alt="project logo" id={`logo${projectName}`}/>
            </ProjectWrapper>
        </Link>
    )
};

export default Project;