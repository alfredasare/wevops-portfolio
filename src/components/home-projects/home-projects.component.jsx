import React from "react";
import {
    HomeProjectsContainer,
    HorizontalLine,
    MainContent,
    MainHead,
    ProjectImages, TextContent,
    Wrapper
} from "./home-projects.styles";

const HomeProjects = () => {
    return (
        <HomeProjectsContainer>
            <Wrapper>
                <ProjectImages>

                </ProjectImages>
                <TextContent>
                    <MainHead>
                        We handle website design and creation with strict adherence to solid design fundamentals and
                        principles.
                    </MainHead>
                    <MainContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis doloremque excepturi ipsa iste
                        laudantium mollitia, numquam optio porro quidem repellat repudiandae similique voluptatem. Ab
                        aliquam nihil provident soluta ut!
                    </MainContent>
                </TextContent>
            </Wrapper>
            <HorizontalLine />
        </HomeProjectsContainer>
    );
};

export default HomeProjects