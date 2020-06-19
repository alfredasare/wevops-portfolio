import React, {useEffect, useRef} from "react";
import {SectionImage, SectionVideo, SectionWrapper} from "./section.style";
import {viewportChecker} from "../../utils/viewport";


const Section = ({type, source, loop}) => {
    let videoRef = useRef(null);


    useEffect(() => {
        if (type === 'video'){
            if (videoRef !== null){
                viewportChecker(videoRef) ? videoRef.play() : videoRef.pause();
                document.addEventListener('scroll', () => {
                    if(videoRef !== null){
                        viewportChecker(videoRef) ? videoRef.play() : videoRef.pause();
                    }
                })
            }
        }
        return () => {
            // console.log('cleanup');
            document.removeEventListener('scroll', () => {
                viewportChecker(videoRef) ? videoRef.play() : videoRef.pause();
            })
        }
    });
    return (
        <SectionWrapper >
            {
                type === 'video' ?
                    <SectionVideo loop={loop} playsinline ref={el => videoRef = el} muted src={source} type="video/mp4" />
                    : <SectionImage src={source}/>
            }
        </SectionWrapper>
    )
};

export default Section;