import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Carousel from "./components/Carousel";
import LoadingBar from 'react-top-loading-bar'
// import { Scrollbars } from 'react-custom-scrollbars';


import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";



const App = () => {

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#122f47";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff5c0";
    }
  };


  const country = 'us';
  const pageSize = 30;
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);


  const [offset, setOffset] = useState(0);
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const [winsiz, setWinsiz] = useState(vw);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
    window.onresize = () => {
      setWinsiz(window.screen.width)
    }
  }, []);


  // console.log(winsiz);
  // console.log(offset);






  return (
    // <Scrollbars style={{ width: "100%", height: "2000px" }}>
    <div>

      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} offset={offset} winsiz={winsiz} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Carousel winsiz={winsiz} />
        {/* <News setProgress={setProgress} apikey={apikey}  country={country} category="sports" /> */}
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" country={country} category="general" pageSize={pageSize} mode={mode} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" country={country} category="business" pageSize={pageSize} mode={mode} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} key="entertainment" country={country} category="entertainment" pageSize={pageSize} mode={mode} /></Route>
          <Route exact path="/general"><News setProgress={setProgress} apikey={apikey} key="general" country={country} category="general" pageSize={pageSize} mode={mode} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} key="health" country={country} category="health" pageSize={pageSize} mode={mode} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apikey={apikey} key="science" country={country} category="science" pageSize={pageSize} mode={mode} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} key="sports" country={country} category="sports" pageSize={pageSize} mode={mode} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} key="technology" country={country} category="technology" pageSize={pageSize} mode={mode} /></Route>
        </Switch>
      </Router>
    </div>
    // </Scrollbars>

  );

}

export default App;