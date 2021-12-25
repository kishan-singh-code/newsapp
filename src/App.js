import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import Carousel from "./components/Carousel";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ScrollToTopRout from "./components/ScrollToTopRout";
import ScrollToTop from "react-scroll-to-top";
import About from "./components/About";
import Footer from "./components/Footer";




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


  const [change, changeAbout] = useState(false);
  function changeFun(i) {
    // let i = 0;
    if (i === 0) { changeAbout(true); }
    else { changeAbout(false); }
  }






  return (
    // <Scrollbars style={{ width: "100%", height: "2000px" }}>
    <div>

      <Router>
        {/* <ScrollToTop_Rout /> */}
        <ScrollToTop smooth style={{
          border: "2px solid #0dcaf0",
          borderRadius: "50%", boxShadow: `${mode === "light" ? "0 2px 20px rgb(0 0 0 / 70%)" : "0 2px 15px rgb(242 243 245 / 30%)"}`,
          backgroundColor: `${mode === "light" ? "#ffffff" : "#212529"}`,

        }}
          viewBox="0 0 28 24"
          svgPath="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z"
          color={mode === "light" ? "#212529" : "#ffffff"}

        />
        <ScrollToTopRout />


        <NavBar mode={mode} toggleMode={toggleMode} offset={offset} winsiz={winsiz} changeFun={changeFun} change={change} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        {/* <Switch><Route exact path="/about"><About mode={mode} /></Route></Switch> */}
        {/* <Route exact path="/about"><About mode={mode} /></Route> */}

        {/* <Carousel winsiz={winsiz} /> */}
        {/* <News setProgress={setProgress} apikey={apikey}  country={country} category="sports" /> */}
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" country={country} category="general" pageSize={pageSize} mode={mode} winsiz={winsiz} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" country={country} category="business" pageSize={pageSize} mode={mode} winsiz={winsiz} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} key="entertainment" country={country} category="entertainment" pageSize={pageSize} mode={mode} winsiz={winsiz} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} key="health" country={country} category="health" pageSize={pageSize} mode={mode} winsiz={winsiz} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apikey={apikey} key="science" country={country} category="science" pageSize={pageSize} mode={mode} winsiz={winsiz} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} key="sports" country={country} category="sports" pageSize={pageSize} mode={mode} winsiz={winsiz} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} key="technology" country={country} category="technology" pageSize={pageSize} mode={mode} winsiz={winsiz} /></Route>
          <Route exact path="/about"><About mode={mode} /></Route>
        </Switch>
        <Footer changeFun={changeFun} mode={mode} />
      </Router>


    </div >
    // </Scrollbars>

  );

}

export default App;