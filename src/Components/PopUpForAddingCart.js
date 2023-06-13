import { useState, useEffect } from "react";
import "./PopUpForAddingCart.css";
import { useSelector, useDispatch } from "react-redux";
import { popupActiveAction } from "./Store/Index";
// import ExtraInfo from "./ExtraInfo";
// import { useSelector } from "react-redux";
// import { useForm } from "react-hook-form";

function PopUpForAddingCart() {
  const popUpActive = useSelector((state) => state.popUpActive);
  const dispatch = useDispatch();
  // const varForForm = useSelector((state) => state.varForForm);

  // const toggleOverlay = () => {
  //   setIsOpen(!isOpen);
  // };

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setIsOpen(true);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [value]);

  return (
    <>
      {popUpActive && (
        <div className="popUp">
          <div className="popUp_container">
            <button onClick={() => dispatch(popupActiveAction(false))}>
              {" "}
              {"\u00D7"}
            </button>
            <p> Hey, Your item has been added</p>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpForAddingCart;
