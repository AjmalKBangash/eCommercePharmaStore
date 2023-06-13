// Importing Files
import "./ExtraInfo.css";
import Nav from "./Nav";
import { useEffect, useRef, useState } from "react";
import ImageZoom from "react-image-zooom";
import img08 from "./CarouselImages/PillsImages/pill08.jpg";
import img09 from "./CarouselImages/PillsImages/pill09.jpg";
import PopUpForAddingCart from "./PopUpForAddingCart";
// Importing API
import axios from "axios";
//Importing React routing modules for pagination
import { Navigate, useLocation } from "react-router-dom";
//react redux
import { useSelector, useDispatch } from "react-redux";
import { popupActiveAction } from "./Store/Index";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

function ExtraInfo() {
  const [open, setOpen] = useState(false);
  const [popupActive, setpopupActive] = useState(false);
  const [isView, setisView] = useState(img08);
  const refFun = useRef();
  const popUpActive = useSelector((state) => state.popUpActive);
  const dispatch = useDispatch();
  // console.log(props.state.drug);
  const location = useLocation();
  // if (location.state.drug == "") {
  //   <Navigate to={"/"} />;
  // }
  // const drug = location.state;

  const salePrice =
    location.state.drug.price -
    (location.state.drug.discount * location.state.drug.price) / 100;
  function viewFunction(prop) {
    setisView(prop);
  }
  // Here first we should check first if the user is authentcated or not, because if user is not suthenticated we won't be able to upload it in the database related to the user
  // useEffect(() => {
  function handleAddtocart() {
    axios({
      method: "post",
      url: "http://localhost:3031/AddedCarts",
      data: location.state.drug,
    });
    dispatch(popupActiveAction(true));
  }
  // refFun.current = handleAddtocart;
  // }, []);

  return (
    <>
      <Nav />
      {popUpActive ? <PopUpForAddingCart /> : ""}
      {/* <PopUpForAddingCart /> */}
      <div className="containerExtraInfo" style={{ marginTop: "30px" }}>
        <div className="imgExtraInfo">
          <div className="imgExtraInfo2">
            <img
              // style={{ border: "1px solid green" }}
              className="imgExtraInfo2Enter"
              src={img09}
              onClick={() => {
                viewFunction(img08);
                setisView(img09);
              }}
            />
            <img
              className="imgExtraInfo2Enter"
              src={require("./CarouselImages/PillsImages/pill05.jpg")}
              onClick={() => {
                console.log("salam");
              }}
            />
            <img
              className="imgExtraInfo2Enter"
              src={require("./CarouselImages/PillsImages/pill05.jpg")}
              onClick={() => {
                console.log("salam");
              }}
            />
            <img
              className="imgExtraInfo2Enter"
              src={require("./CarouselImages/PillsImages/pill05.jpg")}
              onClick={() => {
                console.log("salam");
              }}
            />
            <img
              className="imgExtraInfo2Enter"
              src={require("./CarouselImages/PillsImages/pill05.jpg")}
              onClick={() => {
                console.log("salam");
              }}
            />
          </div>
          <div className="imgExtraInfo3">
            <ImageZoom
              style={{ height: "400px", width: "400px" }}
              key={location.state.drug.id}
              // src={require("./CarouselImages/PillsImages/pill05.jpg")}
              src={isView}
              alt="pills image"
              zoom="300"
              // onClick={() => {
              //   console.log("salam");
              // }}
              // onmouseOver={console.log("w.Salam")}
            />
          </div>
        </div>
        <div className="otherExtraInfo">
          <h6>
            {/* Name:&nbsp; &nbsp; */}
            {location.state.drug.name}
          </h6>
          <p>
            <h6>Details:</h6>
            {location.state.drug.description}
          </p>
          <p id="pCartRs">
            {/* {data.price} */}
            {"Rs." + salePrice + "/-"}
            <br />
            {/* <span id="pCartRsCross">{data.price}</span> -30% */}
            <span id="pCartRsCross">{location.state.drug.price}</span>{" "}
            {"-" + location.state.drug.discount + "%"}
          </p>
          <p>{location.state.drug.availability}</p>
          <button
            className="addToCart"
            onClick={handleAddtocart}
            // onClick={() => refFun.current()}
          >
            ADD TO CART
          </button>
          <button className="buyNow">BUY NOW</button>
        </div>
        <div className="addtocartExtraInfo">
          <h6>Ratings:</h6>
          <p>
            {" "}
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span style={{ fontSize: "20px" }}>{"   "}189</span>
          </p>
          <p>
            {" "}
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9734;</span>
            <span style={{ fontSize: "20px" }}>{"   "}90</span>
          </p>
          <p>
            {" "}
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9734;</span>
            <span className="starYellow">&#9734;</span>
            <span style={{ fontSize: "20px" }}>{"   "}50</span>
          </p>
          <p>
            {" "}
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9734;</span>
            <span className="starYellow">&#9734;</span>
            <span className="starYellow">&#9734;</span>
            <span style={{ fontSize: "20px" }}>{"   "}12</span>
          </p>
          <p>
            {" "}
            <span className="starYellow">&#9733;</span>
            <span className="starYellow">&#9734;</span>
            <span className="starYellow">&#9734;</span>
            <span className="starYellow">&#9734;</span>
            <span className="starYellow">&#9734;</span>
            <span style={{ fontSize: "20px" }}>{"   "}120</span>
          </p>
          <hr />
          <h6>Result</h6>
          <p>
            {4.7} <span style={{ color: "grey" }}> /5</span>
            {/* <span className="starEmpty">&#9733;</span> */}
            <div className="ratingFillup0">
              <div className="ratingFillup"></div>
            </div>
          </p>
          <hr />
          <h6>Your Review</h6>
          <form className="star-rating">
            <input
              className="radio-input"
              type="radio"
              id="star5"
              name="star-input"
              value="5"
            />
            <label className="radio-label" htmlFor="star5" title="5 stars">
              5 stars
            </label>

            <input
              className="radio-input"
              type="radio"
              id="star4"
              name="star-input"
              value="4"
            />
            <label className="radio-label" htmlFor="star4" title="4 stars">
              4 stars
            </label>

            <input
              className="radio-input"
              type="radio"
              id="star3"
              name="star-input"
              value="3"
            />
            <label className="radio-label" htmlFor="star3" title="3 stars">
              3 stars
            </label>

            <input
              className="radio-input"
              type="radio"
              id="star2"
              name="star-input"
              value="2"
            />
            <label className="radio-label" htmlFor="star2" title="2 stars">
              2 stars
            </label>

            <input
              className="radio-input"
              type="radio"
              id="star1"
              name="star-input"
              value="1"
            />
            <label className="radio-label" htmlFor="star1" title="1 star">
              1 star
            </label>
          </form>

          {/* <span className="starEmpty">&#9734;</span>
          <span className="starEmpty">&#9734;</span>
          <span className="starEmpty">&#9734;</span>
          <span className="starEmpty">&#9734;</span>
          <span className="starEmpty">&#9734;</span> */}
          {/* <button className="addToCart">ADD TO CART</button>
        <button className="buyNow">BUY NOW</button> */}
        </div>
      </div>
    </>
  );
}

export default ExtraInfo;
