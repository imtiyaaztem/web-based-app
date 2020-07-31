import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "3rem" }}>
        <h1>Contact</h1>
        <hr />
        <li
          className="fa fa-phone"
          aria-hidden="true"
          style={{ fontSize: "50px", paddingRight: "5rem" }}
        >
          :(021) 123-4567
        </li>

        <li
          className="fa fa-envelope"
          aria-hidden="true"
          style={{ fontSize: "50px", paddingRight: "5rem" }}
        >
          :Topfuelracing@gmail.com
        </li>

        <li
          className="fa fa-instagram"
          aria-hidden="true"
          style={{ fontSize: "50px", paddingRight: "5rem" }}
        >
          :instagram.com/Topfuelracing/
        </li>
      </div>
    );
  }
}
export default ContactUs;
