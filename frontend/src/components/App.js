import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import Shop from "./shop";

const App = () => {
  return (
    <div className="font-body text-text">
      <LandingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
