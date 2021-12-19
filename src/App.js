import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Carousel from "./components/Carousel";
import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";



const App = () => {
  const country = 'us';
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);



  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Carousel />
        {/* <News setProgress={setProgress} apikey={apikey}  country={country} category="sports" /> */}
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" country={country} category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" country={country} category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} key="entertainment" country={country} category="entertainment" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} apikey={apikey} key="general" country={country} category="general" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} key="health" country={country} category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apikey={apikey} key="science" country={country} category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} key="sports" country={country} category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} key="technology" country={country} category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;