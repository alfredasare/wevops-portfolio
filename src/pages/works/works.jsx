import React from "react";
import './works.styles';
import {FakeMenu} from "./works.styles";
import Header from "../../components/header/header.component";
import ProjectList from "../../components/project-list/project-list.component";
import NavBar from "../../components/navbar/navbar.component";
import PageTransition from "../../components/page-animation/page-animation.component";

const Works = () => {
    return (
        <>
            <PageTransition />
            <NavBar />
            <FakeMenu/>
            <Header/>
            <ProjectList/>
        </>
    );
};
export default Works;