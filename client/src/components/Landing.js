import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link to="/ContactUs" class="nav-link active">
              Contact
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/Product" class="nav-link active">
              Product
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/Cart" class="nav-link active">
              Cart
            </Link>
          </li>
        </ul>
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Welcome to Top Fuel Racing</h1>
            <p className="text-center">For all your racing and qulity parts</p>
          </div>
        </div>
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">About Top Fuel Racing</h1>
            <p className="text-center">
              Top fuel Racing (TFR) is company started off small in local area
              in Cape Town,where cars was build in a garage, (TFR) build there
              first track in 2000 which was a Vw MK1 2L 8V, which made a time of
              13.5 seconds on it first run of the day
            </p>
            <div className="text-center">
              <img
                src="https://s1.cdn.autoevolution.com/images/news-pictures-600x/monster-1000-hp-golf-mk1-hits-280-km-h-in-88-seconds-video-82552-7.jpg"
                class="rounded"
                alt="car"
              />
            </div>

            <p className="text-center">
              Top Fuel Racing also tune local citizens car doing major upgrades
              like engine swap, big turbos, software tune and many more, Top
              Fuel Racing hasbeen making sure that custumes cars is fitted with
              the right and qulity product and allow make sure that the custume
              has a smile on his face
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
