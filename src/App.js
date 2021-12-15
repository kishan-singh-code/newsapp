import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Carousel from "./components/Carousel";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
        <News />
      </div>
    );
  }
}
