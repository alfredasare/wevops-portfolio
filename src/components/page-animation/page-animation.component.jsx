import React, {useEffect, useRef} from 'react';
import {Tile, TransitionContainer} from "./page-animation.style";
import {gsap} from "gsap";

const PageTransition = () => {
    let container = useRef(null);
    useEffect(() => {
        const tiles = document.querySelectorAll('.tile');
        const fadeIn = () => {
            gsap.to(tiles, {scaleY: 1, transformOrigin: 'left top', duration: 0.7, delay: 1,})
            console.log('imma head out')
        }
        const fadeOut = () => {
            gsap.to(tiles, {scaleX: 0, transformOrigin: 'right top', duration: 0.7, delay: 1, stagger: .2})
            gsap.to(container, {scaleX: 0, transformOrigin: 'right top', delay: 1.7})

        }
        fadeOut();
        return () => {
            fadeIn();
        }
    })
    return (
        <TransitionContainer ref={el => container = el}>
            <Tile className='tile'/>
            <Tile className='tile'/>
            <Tile className='tile'/>
            <Tile className='tile'/>
            <Tile className='tile'/>
        </TransitionContainer>
    );
};

export default PageTransition;
