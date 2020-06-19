import React, {useEffect, useRef} from "react";
import {SectionImage, SectionVideo, SectionWrapper} from "./section.style";
import {viewportChecker} from "../../utils/viewport";


const Section = ({type, source, loop, poster}) => {
    let videoRef = useRef(null);


    useEffect(() => {
        const playVideo = (video) => {
            const playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        video.pause();
                    });
            }
        }
        if (type === 'video'){
            if (videoRef !== null){
                viewportChecker(videoRef) ? playVideo(videoRef) : videoRef.pause();
                document.addEventListener('scroll', () => {
                    if(videoRef !== null){
                        viewportChecker(videoRef) ? playVideo(videoRef) : videoRef.pause();
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
                    <SectionVideo loop={loop} playsInline ref={el => videoRef = el} muted type="video/mp4"
                    poster={poster}>
                        <source src={source} type='video/mp4'/>
                    </SectionVideo>
                    : <SectionImage src={source}/>
            }
        </SectionWrapper>
    )
};

export default Section;