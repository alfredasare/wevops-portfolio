import React from "react";
import {Image, ImageContainer, ProjectLogo, ProjectWrapper} from "./project.style";
import {Link} from "react-router-dom";

const Project = ({image, projectName, logo}) => {


    return (
        <Link to={`/works/${projectName}`}>
            <ProjectWrapper>
                <ImageContainer>
                    <Image src={image} alt={`${projectName} project`}/>
                </ImageContainer>
                <ProjectLogo src={logo} alt="project logo" id={`logo${projectName}`}/>
            </ProjectWrapper>
        </Link>
    )
};

export default Project;