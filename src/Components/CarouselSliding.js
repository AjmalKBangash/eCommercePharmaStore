import pharmaimg01 from "./CarouselImages/pharmaimg01new.jpg";
import pharmaimg02 from "./CarouselImages/Pharmaimg02new.jpg";
import pharmaimg03 from "./CarouselImages/Pharmaimg03new.jpg";
import pharmaimg04 from "./CarouselImages/pharmaimg04new.jpg";
import nxt from "./CarouselImages/nxt.png";
import pre from "./CarouselImages/pre.png";

import "./CarouselSliding.css";
import { useState, useEffect, useCallback } from "react";
const data = [
  { id: "1", pic: pharmaimg01 },
  { id: "2", pic: pharmaimg02 },
  { id: "3", pic: pharmaimg03 },
  { id: "4", pic: pharmaimg04 },
];

function CarouselSliding() {
  let [currentPicIndex, setPicIndex] = useState(0);
  let [isActive, setActive] = useState(true);

  function dotHandler(id) {
    setPicIndex(id);
  }
  //   *
  //   *
  //   *
  //   *
  let nxtHandler = useCallback(() => {
    setActive(true);
    const isFirstSlide = currentPicIndex === data.length - 1;
    if (isFirstSlide) {
      setPicIndex(0);
    } else {
      setPicIndex(currentPicIndex + 1);
    }
  }, [currentPicIndex]);
  //   *
  //   *
  //   *
  //   *
  let preHandler = useCallback(() => {
    setActive(false);
    const isFirstSlide = currentPicIndex === 0;
    if (isFirstSlide) {
      setPicIndex(data.length - 1);
    } else {
      setPicIndex(currentPicIndex - 1);
    }
  }, [currentPicIndex]);
  // * *
  // * *
  // * *
  // * *
  useEffect(() => {
    let setInt = setInterval(() => {
      // nxtHandler();
      isActive ? nxtHandler() : preHandler();
    }, 3000);
    return () => clearInterval(setInt);
  }, [nxtHandler, isActive, preHandler]);
  // function onLoadHandler(e) {
  //   // console.log(e.currentTarget);
  //   // e.currentTarget.style.transition = "all 0.3s";
  //   // e.currentTarget.style.transform = "translateX(100px)";
  //   // e.currentTarget.style.fade - effect {from{ opacity = 0; } to{ opacity = 1 } };
  //   // e.currentTarget.style.animationName = fadeEffect;
  //   // e.currentTarget.style.KeyframeEffect.from
  //   // e.currentTarget.style.transform = "translateX(0px)";
  //   e.currentTarget.style.opacity = "1";
  //   e.currentTarget.style.transition = "opacity 3s ease 3s";
  //   console.log("happening");
  // }  **the animation was not working because at every re-render react only changes the dom which has been updated so if we want to apply animation on every re-render we have to use(pass) key prop

  return (
    <div className="image-map">
      <img
        src={pre}
        alt="previous icon"
        className="pree"
        onClick={preHandler}
      />
      <img src={nxt} alt="next icon" className="nxtt" onClick={nxtHandler} />

      <img
        key={currentPicIndex}
        src={data[currentPicIndex].pic}
        alt="carousel drugs"
        className={isActive ? "imgg" : "imageSlidingLeft"}
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

export default CarouselSliding;
