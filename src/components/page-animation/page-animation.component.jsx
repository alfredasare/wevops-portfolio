import React, {useEffect} from 'react';
import {TransitionContainer} from "./page-animation.style";
import {gsap} from "gsap";

const PageTransition = () => {
    useEffect(() => {
        const tc = document.querySelector('#transition-container');
        const fadeIn = () => {
            gsap.to(tc, {scaleY: 1, transformOrigin: 'left top', duration: 0.7, delay: 1, })
            console.log('imma head out')
        }
        const fadeOut = () => {
            gsap.to(tc, {scaleX: 0, transformOrigin: 'right top', duration: 0.7, delay: 1,})
        }
        fadeOut();
        return () => {
            fadeIn();
        }
    })
    return (
        <TransitionContainer id="transition-container"/>
    );
};

export default PageTransition;
