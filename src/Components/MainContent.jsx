import React from "react";
import { Link } from "react-scroll";

function MainContent(props) {
  return (
    <div id="main-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-heading">
              <h2>{props.head}</h2>
              <h1>{props.header}</h1>
              <p className="details">{props.content}</p>
              <Link to="#">
                <div className="btn">{props.btnText}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
