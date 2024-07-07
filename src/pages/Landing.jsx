import React from "react";
import Nav from "../components/Nav";
import ContentHolder from "../components/ContentHolder";

function Landing() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <div className="carousel h-96 w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://m.media-amazon.com/images/I/81+64INYhnL._SX3000_.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="bg-transparent btn-circle">
                ❮
              </a>
              <a href="#slide2" className="bg-transparent btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://m.media-amazon.com/images/I/71pF6u+OaZL._SX3000_.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="bg-transparent btn-circle">
                ❮
              </a>
              <a href="#slide3" className="bg-transparent btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="bg-transparent btn-circle">
                ❮
              </a>
              <a href="#slide4" className="bg-transparent btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="bg-transparent btn-circle">
                ❮
              </a>
              <a href="#slide1" className="bg-transparent btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-40">
          <ContentHolder />
        </div>
      </div>
    </div>
  );
}

export default Landing;
