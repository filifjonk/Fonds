import "./index.scss";
import "./slider.scss";
import { BtnSlider } from "./BtnSlider";
import { useState } from "react";
import data from "./data.js";
function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="wrapper">
      <div className="mt-60 wrapper--slider">
        {data.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={`/img/school${index + 1}.png`} />
            </div>
          );
        })}
        <div className="buttons">
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
        </div>
        <div className="container-dots">
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
export { Slider };
