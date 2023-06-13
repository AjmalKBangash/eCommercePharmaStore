import { useEffect, useState, memo, useRef, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataStateFunction, dataStateFunction2 } from "./Store/Index";
import InnerCart from "./InnerCart";
import axios from "axios";
import "./Cart.css";

// function funn(ref) {
//   axios
//     .get("http://localhost:3031/wholeSaleDrugs/?_limit=4&_page=" + ref.current)
//     .then((response) => {
//       console.log(response.data);
//     });
//   console.log(ref.current);
// }
function Cart() {
  const [page, setPage] = useState(1);
  let [fetchDataWholeSale, setFetchDataWholeSale] = useState([]);
  let ref = useRef(4);
  let btnHandler2 = useRef();
  let loadMoreBtn = null;

  // *
  // *
  // * Redux Usage
  // *
  // *
  // const dataStateWholeSale = useSelector((state) => state.dataStateWholeSale);
  const dataStateDailyUsage = useSelector((state) => state.dataStateDailyUsage);
  const dispatch = useDispatch();

  // *
  // *
  // *
  // *
  // *
  let btnHandler = () => {
    setPage((pre) => pre + 1);
    // ref.current = ref.current + 1;
    // console.log(ref.current);
  };
  // *
  // *
  // *
  // * This is for Whole sale drugs
  // *
  // *
  // useEffect(() => {
  //   // Running fun on button click to add more pages
  //   let btnHandler = (loadMoreBtn) => {
  //     // setPage((pre) => pre + 1);
  //     ref.current = ref.current + 1;
  //     console.log(ref.current);
  //     axios
  //       .get(
  //         "http://localhost:3031/wholeSaleDrugs/?_limit=4&_page=" + ref.current
  //       )
  //       .then((response) => {
  //         // dispatch(dataStateFunction([...response.data]));
  //         if (response.data == "") {
  //           console.log("khaali sho");
  //           loadMoreBtn.style.display = "none";
  //         }
  //         // dispatch(dataStateFunction([...response.data])); this will only pass new array with new length 6
  //         // setJsonData((pre) => [...pre, ...response.data]); //It will fetch all data bc we are also previous data
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // btnHandler2.current = btnHandler;
  // Fetching Data
  useEffect(() => {
    axios
      .get(
        `http://localhost:3031/wholeSaleDrugs/?_limit=${ref.current}&_page=` +
          page
      )
      .then((response) => {
        // dispatch(dataStateFunction([...response.data])); ***** It is explained in store index.js file
        setFetchDataWholeSale((pre) => [...pre, ...response.data]);
        if (response.data == "") {
          loadMoreBtn.style.display = "none";
        }
        // dispatch(dataStateFunction([...response.data])); this will only pass new array with new length 6
        // setJsonData((pre) => [...pre, ...response.data]); //It will fetch all data bc we are also previous data
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  // *
  // *
  // *
  // * This is for Daily usage drugs
  // *
  // *
  useEffect(() => {
    axios
      .get("http://localhost:3031/dailyUseDrugs/?_limit=4")
      .then((response) => {
        dispatch(dataStateFunction2([...response.data]));
        // setJsonData(response.data);  It willl only fetch three elements
        // setDailyUsageData((pre) => [...pre, ...response.data]); //It will fetch all data bc we are also previous data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4
          className="h4Cart"
          // aria
          // style={{
          //   color: "#2e8b57",
          //   fontSize: "large",
          //   fontWeight: "bold",
          //   paddingLeft: "24px",
          // }}
        >
          DAILY USAGE DRUGS
        </h4>
        <button className="cartButtonShowMore">SHOW MORE ..</button>
      </div>
      {/* <div className="cards">
        {dailyUsageData.map((data, id) => {
          // console.log(data.id);
          return <InnerCart data={data} key={id} />;
        })}
      </div> */}
      <div className="cards">
        {dataStateDailyUsage.map((data, id) => {
          return <InnerCart data={data} key={id} />;
        })}
      </div>
      <hr style={{ color: "green", border: "2px solid green" }} />

      <h4
        className="h4Cart"
        // style={{
        //   color: "#2e8b57",
        //   fontSize: "22px",
        //   paddingLeft: "24px",
        // }}
      >
        WHOLE SALE DRUGS, GET IT NOW
      </h4>
      {/* <div className="cards">
        {jsonData.map((data, id) => {
          // console.log(data.id);
          return <InnerCart data={data} key={id} />;
        })}
      </div> */}
      <div className="cards">
        {/* {dataStateWholeSale.map((data, id) => {  *******It is explained in the useEffect hook that why it s wrong*******/}

        {Array.isArray(fetchDataWholeSale) &&
          fetchDataWholeSale.map((data, id) => {
            return <InnerCart data={data} key={id} />;
          })}
      </div>
      <button
        className="loadMoreBtn"
        // ref={loadMoreBtn}
        ref={(el) => {
          loadMoreBtn = el; //this is callback ref same like ref but having some differences
        }}
        // onClick={(el) => {
        //   // loadMoreBtn = el;
        //   btnHandler2.current(loadMoreBtn);
        // }}
        onClick={btnHandler}
      >
        Load More ...
      </button>
    </div>
  );
}

export default memo(Cart);
// *
// *
// *
// *
// *
