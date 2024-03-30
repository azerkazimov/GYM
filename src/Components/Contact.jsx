import React from "react";
import Heading from "./Heading";

function Contact() {
  return (
    <div id="contact">
      <Heading heading="Contact Us" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <form action="" className="contact-form">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="form-control"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="form-control"
              />
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                cols="30"
                rows="10"
              />
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
