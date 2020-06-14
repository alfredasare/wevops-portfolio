import React from "react";
import './home.styles';
import LandingComponent from "../../components/landing/landing.component";
import AboutSection from "../../components/about-section/about-section.component";
import TeamDescription from "../../components/team-description/team-description.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <>
            <LandingComponent />
            <AboutSection />
            <TeamDescription />
            <Footer />
        </>
    );
};

export default Home;