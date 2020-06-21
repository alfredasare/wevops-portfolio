import React, {useEffect, useRef} from 'react';
import {Tile, TransitionContainer} from "./page-animation.style";
import {gsap} from "gsap";

const PageTransition = () => {
    let container = useRef(null);
    const html = document.querySelector('html');

    useEffect(() => {
        html.style.overflowY = 'hidden';
    }, [html]);

    useEffect(() => {
        const tiles = document.querySelectorAll('.tile');
        const fadeIn = () => {
            gsap.to(tiles, {scaleY: 1, transformOrigin: 'left top', duration: 0.7, delay: 0.5,})
            console.log('imma head out')
        }
        const fadeOut = () => {
            gsap.to(tiles, {scaleX: 0, transformOrigin: 'right top', duration: 0.7, delay: 0.5, stagger: .2})
            gsap.to(container, {scaleX: 0, transformOrigin: 'right top', delay: 1.7})
            setTimeout(() => {
                html.style.overflowY = 'scroll';
            }, 2000)
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
