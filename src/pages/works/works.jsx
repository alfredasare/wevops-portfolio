import React from "react";
import './works.styles';
import {FakeMenu} from "./works.styles";
import Header from "../../components/header/header.component";
import ProjectList from "../../components/project-list/project-list.component";

const Works = () => {
    return (
        <>
            <FakeMenu/>
            <Header/>
            <ProjectList/>
        </>
    );
};
export default Works;