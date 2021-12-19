import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Carousel from "./components/Carousel";
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default class App extends Component {
  country = 'us';
  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Carousel />
          {/* <News setProgress={this.setProgress} apikey={this.apikey}  country={this.country} category="sports" /> */}
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey} key="general" country={this.country} category="general" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey} key="business" country={this.country} category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" country={this.country} category="entertainment" /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apikey} key="general" country={this.country} category="general" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey} key="health" country={this.country} category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey} key="science" country={this.country} category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apikey} key="sports" country={this.country} category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apikey} key="technology" country={this.country} category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
