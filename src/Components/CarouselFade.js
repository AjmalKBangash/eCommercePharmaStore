import pharmaimg01 from "./CarouselImages/pharmaimg01new.jpg";
import pharmaimg02 from "./CarouselImages/Pharmaimg02new.jpg";
import pharmaimg03 from "./CarouselImages/Pharmaimg03new.jpg";
import pharmaimg04 from "./CarouselImages/pharmaimg04new.jpg";

import "./CarouselFade.css";
import { useState, useEffect } from "react";
const data = [
  { id: "1", pic: pharmaimg01 },
  { id: "2", pic: pharmaimg02 },
  { id: "3", pic: pharmaimg03 },
  { id: "4", pic: pharmaimg04 },
];

function CarouselFade() {
  let [currentPicIndex, setPicIndex] = useState(0);
  function dotHandler(id) {
    setPicIndex(id);
  }
  // * *
  // * *
  // * *
  // * *
  useEffect(() => {
    let setInt = setInterval(() => {
      const isFirstSlide = currentPicIndex === data.length - 1;
      if (isFirstSlide) {
        setPicIndex(0);
      } else {
        setPicIndex(currentPicIndex + 1);
      }
    }, 6000);
    return () => clearInterval(setInt);
  }, [currentPicIndex]);

  return (
    <div className="image-map">
      <img
        key={currentPicIndex}
        src={data[currentPicIndex].pic}
        alt="carousel drugs"
        className="imgg"
      />

      {data.map((data, id) => (
        <p
          key={id}
          className={`dotStyle ${currentPicIndex === id ? "onActive" : ""} `}
          onClick={() => dotHandler(id)}
          // onLoad={onLoadHandler}
        >
          &bull;
        </p>
      ))}
    </div>
  );
}

export default CarouselFade;
