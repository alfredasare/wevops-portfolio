import React from "react";
import './home.styles';
import LandingComponent from "../../components/landing/landing.component";
import AboutSection from "../../components/about-section/about-section.component";
import TeamDescription from "../../components/team-description/team-description.component";
import Footer from "../../components/footer/footer.component";
import NavBar from "../../components/navbar/navbar.component";
import HomeProjects from "../../components/home-projects/home-projects.component";
import PageTransition from "../../components/page-animation/page-animation.component";

const Home = () => {
    return (
        <>
            <PageTransition/>
            <NavBar />
            <LandingComponent />
            <AboutSection />
            <TeamDescription />
            <HomeProjects />
            <Footer />
        </>
    );
};

export default Home;