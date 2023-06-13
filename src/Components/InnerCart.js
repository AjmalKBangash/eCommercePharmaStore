import "./InnerCart.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import LinkCheck from "./ExtraFeatures/LinkCheck";

function InnerCart(props) {
  // console.log(props.data.id);
  const discountPrice = (props.data.discount * props.data.price) / 100;
  const salePrice = props.data.price - discountPrice;
  const navigate = useNavigate();

  const data = {
    id: 1,
    name: "Ajay",
    nephew: "Hassan,Maaz",
  };
  function routeChange(drug) {
    // console.log("drugs");
    // console.log(drug);
    let path = `/ExtraInfo`;
    navigate(path, { state: { drug } });
  }
  const drug = props.data;
  // console.log(drug);
  return (
    <>
      {/* // {jsonData.slice(0, visible).map((data, id) => ( */}
      <div className="cartCssClass" onClick={() => routeChange(drug)}>
        <img
          // key={id}
          // key={props.id}
          src={require("./CarouselImages/PillsImages/pill08.jpg")}
          alt="Tablets"
          className="cartImgTag"
        />
        <p className="cartDescription">
          {/* <strong>{data.description}</strong> */}
          <strong>{props.data.description}</strong>
        </p>
        <p id="pCartRs">
          {/* {data.price} */}
          {"Rs." + salePrice + "/-"}
          <br />
          {/* <span id="pCartRsCross">{data.price}</span> -30% */}
          <span id="pCartRsCross">{props.data.price}</span>{" "}
          {"-" + props.data.discount + "%"}
        </p>
      </div>
      {/* <Link to="/LinkCheck" state={data}>
        <button>Go</button>
      </Link> */}
    </>
    // {/* <p>OKAY JANUUU</p> */}
    // {/* ))} */}
  );
}

export default InnerCart;
