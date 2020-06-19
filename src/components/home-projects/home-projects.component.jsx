import React, {useContext, useEffect} from "react";
import {
    HomeProjectsContainer,
    HorizontalLine,
    MainContent,
    MainHead, ProjectImage,
    ProjectImages, TextContent,
    Wrapper
} from "./home-projects.styles";
import {iterate} from "../../utils/project-iterator";
import PortfolioContext from "../../contexts/portfolio/portfolio.context";

const HomeProjects = () => {

    const portfolioData = useContext(PortfolioContext);

    useEffect(() => {
        iterate();
    });


    return (
        <HomeProjectsContainer>
            <Wrapper>
                <ProjectImages>
                    {
                        portfolioData.map(project => {
                            return (
                                <ProjectImage
                                    key={project.id}
                                    className="home-project-image"
                                    src={project.hero}
                                    alt={`Project ${project.projectName}`}/>
                            );
                        })
                    }
                </ProjectImages>
                <TextContent>
                    <MainHead>
                        We handle website design and creation with strict adherence to solid design fundamentals and
                        principles.
                    </MainHead>
                    <MainContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis doloremque excepturi ipsa
                        iste
                        laudantium mollitia, numquam optio porro quidem repellat repudiandae similique voluptatem. Ab
                        aliquam nihil provident soluta ut!
                    </MainContent>
                </TextContent>
            </Wrapper>
            <HorizontalLine/>
        </HomeProjectsContainer>
    );
};

export default HomeProjects