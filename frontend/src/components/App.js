import React, { Component } from "react";
import Navbar from "./shared components/navbar";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
