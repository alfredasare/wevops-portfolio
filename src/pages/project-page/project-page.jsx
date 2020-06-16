import React, {useContext, useEffect, useRef} from "react";
import {
    CloseButton,
    HeroImage, HeroWrapper,
    Icon,
    ImageOverlay,
    Indicator,
    ProjectPageWrapper,
    ProjectReason2
} from "./project-page.style";
import PortfolioContext from "../../contexts/portfolio/portfolio.context";
import {Close, WevopsLogo} from "../../components/icons/icons.component";
import {gsap, ScrollTrigger, Power3} from "gsap/all";
import {Link} from "react-router-dom";

const ProjectPage = ({match}) => {
    let reason = useRef(null);
    let indicator = useRef(null);

    let heroImage = '';
    let projectName = '';
    let section1 = '';
    let section2 = '';
    let section3 = '';
    let section4 = '';

    const portfolioData = useContext(PortfolioContext);

    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        console.log(reason);
        gsap.from(reason, {opacity: 1, duration: 0.6, scale: 0.3});
        gsap.to(indicator, {duration: 2, y: 50, opacity: 0, ease: Power3.easeOut, repeatDelay: 0.2, repeat: -1});
        gsap.to(reason, {
            scrollTrigger: {
                trigger: reason, start: "bottom center",
                scrub: true,
                toggleActions: "restart pause reverse none"
            }, opacity: 0, y: "40vh", duration: 7
        })
    });

    portfolioData.forEach(project => {
        if (project.projectName === match.params.project) {
            heroImage = project.projectResources[0].image;
            projectName = project.projectName;
        }
    });
    return (
        <ProjectPageWrapper>
            <HeroWrapper>
                <HeroImage src={heroImage} alt={`${projectName} project`}/>
                <ImageOverlay/>
                <ProjectReason2 ref={el => reason = el}>
                    Web design for {projectName}
                </ProjectReason2>
                <Indicator ref={el => indicator = el}/>
            </HeroWrapper>
            <Icon href="/">
                <WevopsLogo alt="wevops logo"/>
            </Icon>
            <Link to='/works'><CloseButton>
                <Close/>
            </CloseButton>
            </Link>
            <HeroImage image={heroImage}>
            </HeroImage>
        </ProjectPageWrapper>
    )
};

export default ProjectPage;