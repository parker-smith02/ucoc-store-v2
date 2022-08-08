import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Shop from "./shop";

const App = () => {
  return (
    <div className="font-body text-text">
      <LandingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
