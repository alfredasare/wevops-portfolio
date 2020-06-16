import React, {useEffect, useRef} from "react";
import {
    FadedH5,
    LandingContainer,
    LandingFooter,
    LandingFooterLink,
    MainContent, ScrollIconWrapper,
    SubContent,
    SubContentText
} from "./landing.styles";
import {ScrollDownIcon} from "../icons/icons.component";
import {gsap, Power3} from "gsap/all";


const LandingComponent = () => {
    let welcome = useRef(null);
    let scroll = useRef(null);

    let tl = gsap.timeline();

    useEffect(() => {
        const content = document.querySelectorAll('.content');
        tl.to(welcome, {opacity: 1, duration: 1, delay: 1});
        tl.to(content, {opacity: 1, y: 0, duration: 0.5, stagger: 0.3});
        gsap.to(scroll, {duration: 1, y: 20, opacity: 0, ease: Power3.easeOut, repeatDelay: 0.2, repeat: -1});
    });

    return (
        <LandingContainer>
            <MainContent>
                <FadedH5 ref={el => welcome = el}>Welcome to wevops</FadedH5>
                <SubContent>
                        <SubContentText className="content">
                            <span>
                                We offer high-quality
                            </span>
                        </SubContentText>
                        <SubContentText className="content">
                            <span>
                        UI/UX designs and
                            </span>
                        </SubContentText>
                        <SubContentText className="content">
                            <span>
                        websites tailor-made to
                            </span>
                        </SubContentText>
                        <SubContentText className="content">
                            <span>
                        your requirements
                            </span>
                        </SubContentText>
                </SubContent>
            </MainContent>
            <LandingFooter>
                <ScrollIconWrapper ref={el => scroll = el}>
                    <ScrollDownIcon/>
                </ScrollIconWrapper>
                <LandingFooterLink>scroll down</LandingFooterLink>
            </LandingFooter>
        </LandingContainer>
    );
};

export default LandingComponent;