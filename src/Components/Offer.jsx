import React from "react";
import Heading from "./Heading";
import MainContent from "./MainContent";

function Offer() {
  return (
    <div id="offer">
      <Heading heading={"Offer"} />
      <MainContent
        head=""
        header="A BIG OFFER FOR THIS SUMMER"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing eius!"
        btnText="Join now"
      />
    </div>
  );
}

export default Offer;
