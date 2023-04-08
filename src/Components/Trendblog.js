import React from "react";
import "./Trendblog.css";
import DataJson from "../Datas/Data.json";

export default function Trendblog() {
  return (
    <div className="container">
      {DataJson.map((data, i) =>
        i % 2 === 0 ? (
          <div className="row mt-5 mb-4 box" key={i}>
            <div className="col-md-5 col-lg-6 col-12  d-sm-flex justify-content-sm-center">
              <div
                className="image-splash"
                style={{
                  backgroundImage: `url(${data.img})`,
                }}
                data-aos="zoom-in-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >s</div>
            </div>
            <div className="col-md-5 col-lg-6 col-12">
              <h1
                className="trend-head"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {data.title}
              </h1>
              <h6
                className="trend-content"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {data.desc}
              </h6>
            </div>
          </div>
        ) : (
          <div className="row mt-5 mb-4 box" key={i}>
            <div className="col-md-5 col-lg-6  col-12 order-sm-2 order-lg-1 order-2 d-flex align-items-xl-center flex-column">
              <h1
                className="trend-head"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {data.title}
              </h1>
              <h6
                className="trend-content"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {data.desc}
              </h6>
            </div>
            <div className="col-md-5 col-lg-6   col-12  d-sm-flex justify-content-sm-center order-sm-1 order-lg-2 order-1  d-xl-flex justify-content-xl-center">
              <div
                className="image-splash"
                style={{
                  backgroundImage: `url(${data.img})`,
                }}
                data-aos="zoom-in-left"
                data-aos-delay="400"
                data-aos-duration="1000"
              >s</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
