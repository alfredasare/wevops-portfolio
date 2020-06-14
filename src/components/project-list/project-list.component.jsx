import React from "react";
import {ProjectListWrapper} from "./project-list.style";
import Project from "../project/project.component";

const ProjectList = () => {
    return (
        <ProjectListWrapper>
            <Project/>
        </ProjectListWrapper>
    )
};

export default ProjectList;