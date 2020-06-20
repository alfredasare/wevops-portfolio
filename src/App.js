import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import {GlobalStyle} from "./utils";
import ScrollToTop from "./utils/scroll-to-top";
import "./utils/scroll-disappear";
import "../src/utils/animations.css";
import ProjectPage from "./pages/project-page/project-page";
import Works from "./pages/works/works";
import Home from "./pages/home/home";


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <ScrollToTop/>
            <div className="page">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/works' exact component={Works}/>
                <Route path='/works/:project' component={ProjectPage}/>
            </Switch>
            </div>
        </div>
    );
}

export default App;
