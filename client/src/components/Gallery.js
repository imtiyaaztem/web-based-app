import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
        style={{ paddingTop: "5rem" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://s1.cdn.autoevolution.com/images/news-pictures-600x/monster-1000-hp-golf-mk1-hits-280-km-h-in-88-seconds-video-82552-7.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://s1.cdn.autoevolution.com/images/news-pictures-600x/monster-1000-hp-golf-mk1-hits-280-km-h-in-88-seconds-video-82552-7.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://s1.cdn.autoevolution.com/images/news-pictures-600x/monster-1000-hp-golf-mk1-hits-280-km-h-in-88-seconds-video-82552-7.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://s1.cdn.autoevolution.com/images/news-pictures-600x/monster-1000-hp-golf-mk1-hits-280-km-h-in-88-seconds-video-82552-7.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Gallery;
