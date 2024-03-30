import React from "react";

function Featurebox(props) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="feature-item">
        <div className="feature-image">
          <img src={props.image} alt="" />
        </div>
        <div className="feature-title">
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Featurebox;
