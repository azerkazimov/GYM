import React from "react";
import about from "../images/about.jpg";
import Heading from "./Heading";
import { Link } from "react-scroll";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 p-5 my-5 flex-container flex-align-center">
            <div className="about-image">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 px-5">
            <div className="about-content">
              <Heading heading="LEARN MORE ABOUT US" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                iure pariatur nobis harum veniam et tempora iste nostrum
                accusantium hic provident ullam consequuntur culpa corrupti,
                iusto ad accusamus repellat at.
              </p>
              <Link to="#">
                <div className="btn">Read more</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
