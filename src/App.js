import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {GlobalStyle} from "./utils";
import LoadingScreen from "./components/loading-screen/loading-screen.component";
import ScrollToTop from "./utils/scroll-to-top";
import "./utils/scroll-disappear";
import "../src/utils/animations.css";
import "../src/utils/animations";
import NavBar from "./components/navbar/navbar.component";

const Home = lazy(() => import("./pages/home/home"));
const Works = lazy(() => import("./pages/works/works"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Suspense fallback={<LoadingScreen />}>
        <ScrollToTop />
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/works' exact={true} component={Works} />
            <Route path='/works:project' component={Works}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
