import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div
      className="cards"
      data-tilt
      data-tilt-scale="1.1"
      data-tilt-perspective="500"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1500"
    >
      <div className="back">
        <h2>{props.title}</h2>
        <h3>{props.head}</h3>
        <p>{props.desc}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
}
