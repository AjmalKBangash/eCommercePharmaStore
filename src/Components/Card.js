import { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
// import pill01 from "./CarouselImages/PillsImages/pill01.png";
// "pic": "require('./src/Components/CarouselImages/PillsImages/pill01.png')",

function Cart() {
  const [jsonData, setJsonData] = useState([]);
  // const [dailyUsageData, setDailyUsageData] = useState([]);
  // const [visible, setVisible] = useState(12);
  const [page, setPage] = useState(1);
  // let countRef = useRef(0);
  // for (let i = 0; i < 5; i = i + 1) {
  //   countRef.current = countRef.current + 4;
  //   console.log(countRef.current);
  // *
  // *
  // *
  // * Down we are having a
  // *
  // *
  // let btnHandler = (event) => {
  //   if (visible >= jsonData.length - 1) {
  //     event.currentTarget.style.display = "none";
  //   }
  //   setVisible((pre) => pre + 6);
  // };
  // *
  // *
  // * Again we are having btHandler function because this time we are using real pagination and performance handling functionalities
  // *
  let btnHandler = (event) => {
    setPage((pre) => pre + 1);
    // setPage(page + 1);
  };
  // *
  // *
  // *
  // * This is for Whole sale drugs
  // *
  // *
  useEffect(() => {
    // function fetchData() {   (resDataPre) => resDataPre +
    axios
      .get("http://localhost:3031/wholeSaleDrugs/?_limit=3&_page=" + page)
      .then((response) => {
        // setJsonData(response.data);  It willl only fetch three elements
        setJsonData((pre) => [...pre, ...response.data]); //It will fetch all data bc we are also previous data
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  }, [page]);
  // *
  // *
  // *
  // * This is for Daily usage drugs
  // *
  // *
  useEffect(() => {
    // function fetchData() {   (resDataPre) => resDataPre +
    axios
      .get("http://localhost:3031/dailyUseDrugs/?_limit=3&_page=" + page)
      .then((response) => {
        // setJsonData(response.data);  It willl only fetch three elements
        setDailyUsageData((pre) => [...pre, ...response.data]); //It will fetch all data bc we are also previous data
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  }, [page]);
  return (
    <div className="container">
      <h4
        className="container"
        style={{
          color: "#2e8b57",
          fontSize: "22px",
          paddingLeft: "24px",
        }}
      >
        WHOLE SALE DRUGS, GET IT NOW
      </h4>
      <div className="cards">
        {/* {jsonData.slice(0, visible).map((data, id) => ( */}
        {jsonData.map((data, id) => (
          <div className="cartCssClass">
            <img
              key={id}
              src={require("./CarouselImages/PillsImages/pill08.jpg")}
              alt="Tablets"
              className="cartImgTag"
            />
            <p className="cartDescription">
              <strong>{data.description}</strong>
            </p>
            <p id="pCartRs">
              {data.price}
              <br />
              <span id="pCartRsCross">{data.price}</span> -30%
            </p>
          </div>
        ))}
      </div>
      {/* {jsonData} */}
      <button
        className="loadMoreBtn"
        // onClick={() => setVisible((pre) => pre + 6)}
        onClick={btnHandler}
      >
        Load More ...
      </button>
    </div>
  );
}

export default Card;
// *
// *
// *
// *
// *
// {
//   /* <div className="cartCssClass"> */
// }
// {
//   /* <img src={pill01} alt="Vigorex Tablets" className="cartImgTag" /> */
// }
// {
//   /* <img
//           src={require("./CarouselImages/PillsImages/pill07.png")}
//           alt="Vigorex Tablets"
//           className="cartImgTag"
//         /> */
// }
// {
//   /* <p className="cartPreTag">
//           <strong>
//             Vigorex Tablets newly made for whole selling in bundled in our
//             allikhwa pharmacy
//           </strong>
//         </p> */
// }
// {
//   /* <p id="pCartRs">
//           Rs.500 <br />
//           <span id="pCartRsCross">Rs.700</span> -30%
//         </p> */
// }
// {
//   /* </div> */
// }
