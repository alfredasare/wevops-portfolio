import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {GlobalStyle} from "./utils/Global";
import LoadingScreen from "./components/loading-screen/loading-screen.component";
import ScrollToTop from "./utils/scroll-to-top";

const Home = lazy(() => import("./pages/home/home"));
const Works = lazy(() => import("./pages/works/works"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Suspense fallback={<LoadingScreen />}>
        <ScrollToTop />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/works' component={Works} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
