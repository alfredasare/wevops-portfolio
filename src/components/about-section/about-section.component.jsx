import React, {useContext, useEffect, useRef, useState} from "react";
import OwlCarousel from 'react-owl-carousel-safe';
import {
    AboutSectionContainer,
    AboutSectionContent,
    AboutSectionFadedHead,
    AboutSectionImage,
    AboutSectionImageContainer,
    AboutSectionMainHead,
    AboutSectionText,
    AboutSectionTextContainer,
    ButtonRightSpan,
    ButtonRightIcon,
    NextDarkButton,
    PreviousDarkButton,
    ButtonLeftIcon,
    ButtonLeftSpan
} from "./about.styles";
import AboutContext from "../../contexts/about-section/about-section.context";


const AboutSection = () => {

    const car = useRef(null);
    const [controller, setController] = useState(null);
    const [previousHidden, setPreviousHidden] = useState(true);
    const aboutData = useContext(AboutContext);
    let count = 0;

    useEffect(() => {
        setController(car);
    }, [controller, previousHidden])


    const next = () => {
        controller.current.next(500);
        setPreviousHidden(false);

        console.log(previousHidden);
    };

    const previous = () => {
        controller.current.prev(500);
        if (count === 0) {
            setPreviousHidden(false);
        }
        console.log(count);
    };

    const options = {
        loop: false,
        margin: 10,
        items: 3,
        dots: true,
        responsive:{
            0: {
                items: 1,
                center: true,
                margin: 10
            },
            768: {
                items: 1,
            },
            1000: {
                items: 1,
                dots: false,
            },
        },
    };

    return (
        <AboutSectionContainer id="about">
            <AboutSectionContent>
                <OwlCarousel ref={car} className="owl-theme" {...options}>
                    {
                        aboutData.map(item => (
                            <AboutSectionTextContainer key={item.id}>
                                <AboutSectionFadedHead>{item.fadedTitle}</AboutSectionFadedHead>
                                <AboutSectionMainHead>{item.title}</AboutSectionMainHead>
                                <AboutSectionText>
                                    {item.content}
                                </AboutSectionText>
                            </AboutSectionTextContainer>
                        ))
                    }
                </OwlCarousel>


                <AboutSectionImageContainer>
                    <AboutSectionImage src={require('../../assets/images/about-section.jpg')} alt="mac book pro and diary"/>
                    <NextDarkButton onClick={next}>
                        <ButtonRightIcon className="fa far fa-arrow-right"/>
                        <ButtonRightSpan>Next</ButtonRightSpan>
                    </NextDarkButton>
                    <PreviousDarkButton previousHidden={previousHidden} count={count} onClick={previous}>
                        <ButtonLeftSpan>Previous</ButtonLeftSpan>
                        <ButtonLeftIcon className="fa far fa-arrow-left"/>
                    </PreviousDarkButton>
                </AboutSectionImageContainer>
            </AboutSectionContent>
        </AboutSectionContainer>
    );
};

export default AboutSection;