import React from "react";
import {ProjectListWrapper} from "./project-list.style";
import Project from "../project/project.component";
import {projectDetails} from "../../utils/project-details";

const ProjectList = () => {
    return (
        <ProjectListWrapper>
            {
                projectDetails.map((project, index) => {
                    return <Project image={project.image} projectName={project.projectName}
                                    logo={project.logo} key={[project.index]}/>
                })
            }
        </ProjectListWrapper>
    )
};

export default ProjectList;