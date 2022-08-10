import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./shop/Shop";
import GroupBuys from "./groupbuys/GroupBuys";
import RentGear from "./rentgear/RentGear";
import RequestATrip from "./requestatrip/RequestATrip";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/groupbuys" element={<GroupBuys />} />
        <Route path="/rentgear" element={<RentGear />} />
        <Route path="/requestatrip" element={<RequestATrip />} />
      </Routes>
    </Router>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));
