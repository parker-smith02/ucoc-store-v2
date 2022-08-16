import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./shop/Shop";
import GroupBuys from "./groupbuys/GroupBuys";
import RentGear from "./rentgear/RentGear";
import RequestATrip from "./requestatrip/RequestATrip";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProductDetailedView from "./shop/ProductDetailedView";

const App = () => {
  return (
    <div className="app text-text bg-backGround">
      <Router>
        <Parallax pages={1.5} className="parallax-background bg-backGround">
          <ParallaxLayer sticky={{ start: 0, end: 1.5 }}>
            <Navbar />
          </ParallaxLayer>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/groupbuys" element={<GroupBuys />} />
            <Route path="/rentgear" element={<RentGear />} />
            <Route path="/requestatrip" element={<RequestATrip />} />
            <Route path="/product" element={<ProductDetailedView />} />
          </Routes>
        </Parallax>
      </Router>
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));
