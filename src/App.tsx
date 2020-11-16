import React from "react";
import Launch from "./components/Launch";
import LaunchInfo from "./components/LaunchInfo";
import Header from "./components/Display/Header";
import "./App.css";
// import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      {/* <Slider /> */}
      <Header />
      <br />
      <div className="main">
        <div className="launch">
          <Launch />
        </div>
        <div className="launchInfo">
          <LaunchInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
