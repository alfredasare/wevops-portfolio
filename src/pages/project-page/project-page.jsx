import React, {useContext, useState} from "react";
import {HeroImage, ProjectPageWrapper} from "./project-page.style";
import PortfolioContext from "../../contexts/portfolio/portfolio.context";

const ProjectPage = ({match}) => {
    const [details, setDetails] = useState({
        heroImage: '',
        section1: '',
        section2: '',
        section3: '',
        section4: '',
        section5: '',
    });

    const portfolioData = useContext(PortfolioContext);

    console.log(match.params.project);
    portfolioData.forEach(project => {
        if( project.projectName === match.params.project){
            console.log(project.projectName);
            // setDetails({...details, heroImage: project.projectResources[0].image});
        }
            });
    return (
        <ProjectPageWrapper>
            <HeroImage image={details.heroImage}/>
        </ProjectPageWrapper>
    )
};

export default ProjectPage;