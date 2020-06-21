import React, {useContext, useEffect} from "react";
import {
    Button,
    HomeProjectsContainer,
    HorizontalLine,
    MainHead, ProjectImage,
    ProjectImages, TextContent,
    Wrapper
} from "./home-projects.styles";
import {iterate} from "../../utils/project-iterator";
import PortfolioContext from "../../contexts/portfolio/portfolio.context";
import {Link} from "react-router-dom";

const HomeProjects = () => {

    const portfolioData = useContext(PortfolioContext);

    useEffect(() => {
        iterate();
    }, []);


    return (
        <HomeProjectsContainer>
            <Wrapper>
                <Link to='/works'>
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
                </Link>
                <TextContent>
                    <MainHead>
                        We handle website design and creation with strict adherence to solid design fundamentals and
                        principles.
                    </MainHead>
                </TextContent>
                <Link to="/works">
                    <Button>
                        View Projects
                    </Button>
                </Link>
            </Wrapper>
            <HorizontalLine/>
        </HomeProjectsContainer>
    );
};

export default HomeProjects

