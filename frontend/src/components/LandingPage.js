import React from "react";
import im1 from "../images/landingParallax/1.png";
import im2 from "../images/landingParallax/2.png";
import im3 from "../images/landingParallax/3.png";
import im4 from "../images/landingParallax/4.png";
import im5 from "../images/landingParallax/5.png";
import im6 from "../images/landingParallax/6.png";
import Shop from "./shop";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const LandingPage = () => {
  return (
    <div className="bg-backGround w-full h-screen landing-page">
      <div className="parallax-container">
        <Parallax pages={1.5} className="parallax-background">
          <ParallaxLayer
            speed={0.1}
            style={{ backgroundImage: `url(${im6})`, backgroundSize: "cover" }}
          ></ParallaxLayer>
          <ParallaxLayer
            speed={0.5}
            style={{ backgroundImage: `url(${im5})`, backgroundSize: "cover" }}
          ></ParallaxLayer>
          <ParallaxLayer
            speed={0.7}
            style={{ backgroundImage: `url(${im4})`, backgroundSize: "cover" }}
          ></ParallaxLayer>
          <ParallaxLayer
            speed={1.1}
            style={{ backgroundImage: `url(${im3})`, backgroundSize: "cover" }}
          ></ParallaxLayer>
          <ParallaxLayer
            speed={1.3}
            style={{ backgroundImage: `url(${im2})`, backgroundSize: "cover" }}
          ></ParallaxLayer>
          <ParallaxLayer
            speed={1.5}
            style={{ backgroundImage: `url(${im1})`, backgroundSize: "cover" }}
          ></ParallaxLayer>
          <ParallaxLayer
            className="Shop-layer flex z-50"
            offset={0.91}
            speed={1.5}
          >
            <Shop />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default LandingPage;