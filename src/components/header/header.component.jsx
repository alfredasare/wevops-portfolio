import React, {useEffect, useRef} from "react";
import {PageTitle, TitleHeader, TitleText} from "./header.style";
import {gsap} from "gsap/all";



const Header = () => {
    let projects = useRef(null);
    let tl = gsap.timeline();

    useEffect(() => {
       const text = document.querySelectorAll('.content');
        tl.to(projects, {opacity: 1, duration: 1, delay: 1});
        tl.to(text, {opacity: 1, y: 0, duration: 0.5, stagger: 0.3});
    });
    return (
        <PageTitle>
            <TitleHeader ref={el => projects = el}>Projects</TitleHeader>
                <TitleText className="content">
                            <span>
                                We create beautiful,
                            </span>
                </TitleText>
                <TitleText className="content">
                            <span>
                                responsive, user-friendly websites.
                            </span>
                </TitleText>
                <TitleText className="content">
                            <span>
                                 Wevops helps elevate your business.
                            </span>
                </TitleText>
        </PageTitle>
    )
};

export default Header;