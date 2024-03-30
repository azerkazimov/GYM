import React from "react";
import Featurebox from "./Featurebox";
import Heading from "./Heading";
import phone from "../images/icon/icon1.png";
import gym from "../images/icon/icon2.png";
import message from "../images/icon/icon3.png";
import location from "../images/icon/icon4.png";

function Feature() {
  return (
    <div id="features">
      <Heading heading={"Features"} />
      <div className="container">
        <div className="row">
          <Featurebox image={phone} title="Call Us" />
          <Featurebox image={gym} title="GYM" />
          <Featurebox image={message} title="Message" />
          <Featurebox image={location} title="Our Location" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
