import React, {useContext} from "react";
import {ProjectListWrapper} from "./project-list.style";
import Project from "../project/project.component";
import PortfolioContext from "../../contexts/portfolio/portfolio.context";

const ProjectList = () => {
    const portfolioData = useContext(PortfolioContext);

    return (
        <ProjectListWrapper>
            {
                portfolioData.map((project, index) => {
                    return <Project image={project.hero} projectName={project.projectName}
                                    logo={project.logo} key={[project.id]}/>
                })
            }
        </ProjectListWrapper>
    )
};

export default ProjectList;