import React, {useContext, useEffect, useRef} from "react";
import {
    CloseButton,
    HeroImage, HeroWrapper,
    Icon,
    ImageOverlay,
    Indicator, LinkIcon, LinkSection, LinkText, Next, NextText, NextTitle,
    ProjectPageWrapper,
    ProjectReason2,
} from "./project-page.style";
import PortfolioContext from "../../contexts/portfolio/portfolio.context";
import {Close, LinkSvg, WevopsLogo} from "../../components/icons/icons.component";
import {gsap, ScrollTrigger, Power3} from "gsap/all";
import {Link} from "react-router-dom";
import "../../utils/scroll-disappear";
import SectionList from "../../components/section-list/section-list.component";

const ProjectPage = ({match}) => {
    let reason = useRef(null);
    let indicator = useRef(null);

    let heroImage = false;
    let projectName = false;
    let projectReason = '';
    let webLink = '';
    let projectResources = [];
    let nextProjectName = '';
    let nextProjectImage = '';


    const portfolioData = useContext(PortfolioContext);

    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        window.onscroll = () => {
            let currentScrollPosition = window.pageYOffset;
            const logo = document.querySelector('#project-logo');

            if (logo !== undefined && logo){
                if (window.screen.width < 600){
                    if (currentScrollPosition > "100"){
                        logo.style.display = 'none';
                    }
                    else{
                        logo.style.display = 'inline-block';
                    }
                }
            }
        }

        gsap.to(indicator, {duration: 2, y: 50, opacity: 0, ease: Power3.easeOut, repeatDelay: 0.2, repeat: -1});
        if (window.screen.width <= 1200){
            gsap.from(reason, {opacity: 0, scale: 0.2, duration: 0.6,});
        }
        if (window.screen.width > 1200){
            console.log('ah');
            gsap.to(reason, {
                scrollTrigger: {
                    trigger: reason,
                    start: "bottom center",
                    scrub: true,
                    toggleActions: "restart pause reverse pause"
                },  y: "40vh", opacity: 0, duration: 3,
            })
            }
    });

    portfolioData.forEach(project => {
        if (project.projectName === match.params.project) {
            heroImage = project.hero;
            projectName = project.projectName;
            projectReason =project.projectReason;
            projectResources = project.projectResources;
            webLink = project.websiteLink;
            const nextProjectId = project.index + 1;
            if(portfolioData[nextProjectId] === portfolioData[-1]){
                console.log()
            }else{
                nextProjectName = portfolioData[nextProjectId].projectName;
                nextProjectImage = portfolioData[nextProjectId].hero;
            }
        }
    });
    return (
        <ProjectPageWrapper>
            <HeroWrapper>
                <HeroImage src={heroImage} alt={`${projectName} project`}/>
                <ImageOverlay/>
                <ProjectReason2 ref={el => reason = el}>
                    {projectReason} for {projectName}
                </ProjectReason2>
                <Indicator ref={el => indicator = el}/>
            </HeroWrapper>
            <Icon href="/" id='project-logo'>
                <WevopsLogo alt="wevops logo"/>
            </Icon>
            <Link to='/works'><CloseButton>
                <Close/>
            </CloseButton>
            </Link>
            <HeroImage image={heroImage}>
            </HeroImage>
            <SectionList resources={projectResources}/>
            <LinkSection>
                <LinkText><a href={webLink} aria-label={`link to ${projectName}`} target="_blank"
                             rel="noopener noreferrer">
                    Visit {projectName}
                </a>
                </LinkText>
                <LinkIcon>
                    <LinkSvg/>
                </LinkIcon>
            </LinkSection>
            {
                nextProjectName !== '' ? <Link to={`/works/${nextProjectName}`}>
                    <Next>
                        <HeroImage src={nextProjectImage} alt={`${nextProjectName} project`}/>
                        <NextTitle>{nextProjectName}</NextTitle>
                        <NextText>Next project</NextText>
                    </Next>
                </Link>: null
            }

        </ProjectPageWrapper>
    )
};

export default ProjectPage;