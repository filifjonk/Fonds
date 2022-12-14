import React from "react";
import "./slider.scss";
import leftArrow from "../public/img/left.png";
import rightArrow from "../public/img/right.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
export { BtnSlider };
