import { useEffect, useRef, useState, useMemo, useCallback, memo } from "react";
import "./SearchBox.css";
import ExtraInfo from "./ExtraInfo";
import SearchBoxFetchingData from "./SearchBoxFetchingData";
import searchIcon from "./CarouselImages/searchBoxIcon.png";
import cart_icon2 from "./CarouselImages/cart_icon2.png";
import pharmacy_Icon from "./CarouselImages/pharmacy_Icon.png";
import { NavLink, useNavigate, Navigate, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dataStateForCartAction } from "./Store/Index";
import axios from "axios";

function SearchBox() {
  // const [inputValue, setInputValue] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [namesData, setNamesData] = useState();
  const [categoryDisplay, setCategoryDisplay] = useState(false);
  const [categoryDisplay2, setCategoryDisplay2] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryList2, setCategoryList2] = useState([]);
  const [categoryList2Name, setcategoryList2Name] = useState();
  const [subMenu, setSubMenu] = useState(true);

  const menuRef = useRef(false);
  const menuRef3 = useRef(false);
  const ulNodes = useRef();
  const liNodes = useRef();
  const [onClickDisplayMenu, setonClickDisplayMenu] = useState(false);
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
  }
  function submitHandlerOnClick() {}
  const arrFilterSearch = useSelector((state) => state.dataStateWholeSale);
  const dataStateForCart = useSelector((state) => state.dataStateForCart);
  const dataStateForCartalen = dataStateForCart.length;
  const dispatch = useDispatch();
  function onchangehandlerSearchBox(e) {
    setSearchValue(e);
  }

  // Now fetching data onChange event
  // function Search() {
  // const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // const delayDebounceFn = setTimeout(() => {
    // Axios request
    axios.get(`http://localhost:3031/wholeSaleDrugs`).then((response) => {
      setNamesData(response.data);
      // });
    });

    // return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  //Fetching data fromserver(database) which is added carts
  useEffect(() => {
    axios
      .get("http://localhost:3031/AddedCarts")
      .then((response) => {
        dispatch(dataStateForCartAction([...response.data]));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //handling display
  useEffect(() => {
    function handler(e) {
      if (menuRef.currentTarget == null || menuRef3.currentTarget == null) {
        setonClickDisplayMenu(true);
      } else if (
        menuRef.currentTarget.contains(e.target) ||
        menuRef3.currentTarget.contains(e.target)
      ) {
        setonClickDisplayMenu(false);
      } else {
        setonClickDisplayMenu(true);
      }
    }
    document.addEventListener("mousedown", handler);
  }, []);
  function routeChange(drug) {
    let path = `/ExtraInfo`;
    // setInputValue(true);
    navigate(path, { state: { drug } });
  }

  // const result = useCallback(() => {
  //   return arrFilterSearch.filter((drug) =>
  //     drug.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  // }, []);

  function cartHandlerFunction() {
    let path = `/AddedCarts`;
    // setInputValue(true);
    navigate(path);
  }

  // **** Counting li node in ul for showing more than 10
  // var list = myUl.children.tags("li");
  // console.log(ulNodes.current.children.length);
  // console.log(ulNodes.current);
  // if (ulNodes.current.children > 0) {
  //   console.log(ulNodes.current.children.length);
  // }
  // alert(list.length);
  // console.log(list.length);
  // for (let i = 0; i < ulNodes.current.children.length; i++) {
  // let xcc = ulNodes.current.hasChildNodes();
  // if (xcc) {
  // console.log(xcc);
  // ulNodes.current.childNodes.style.display = "none";
  // }
  // }
  // **** Catogories functionality
  function categoriesFunction() {
    setCategoryDisplay(!categoryDisplay);
    setCategoryDisplay2(false);
  }
  function categoriesFunction2(data) {
    setcategoryList2Name(data.name);
    // if (categoryList2.length > 0) {
    setCategoryDisplay2(!categoryDisplay2);
    // }
    console.log(categoryList2Name);
  }
  console.log(categoryList2.length);
  console.log(categoryList2Name);
  useEffect(() => {
    axios
      .get(`  http://localhost:3031/categories`)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3031/${categoryList2Name}`)
      .then((response) => {
        setSubMenu(false);
        setCategoryList2(response.data);
      })
      .catch((error) => {
        setSubMenu(true);
        console.log("Null");
        console.log(error);
      });
  }, [categoriesFunction2]);
  // ****Filtering
  let filtertion = [];
  if (namesData > "") {
    filtertion = namesData.filter((drug) =>
      drug.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    filtertion.splice(14); //Here we have spliced (reduced) the array filtered elemnts to limit 14
  }
  return (
    <div className="containerForSearchBox">
      {/* <span className="material-symbols-outlined expandMoreDropCate" /> */}
      <div className="categories" onClick={categoriesFunction}>
        <h6>categories</h6>
        <span className="material-symbols-outlined  expandMoreDropCate">
          expand_circle_down
        </span>
      </div>
      <div className="categoryUl">
        {categoryDisplay &&
          categoryList.map((data, id) => {
            return (
              <li key={id} onClick={() => categoriesFunction2(data)}>
                <span>&gt;</span>
                {data.name}
              </li>
            );
          })}
        {/* <li>Salam</li>
        <li>W.Salam</li> */}
      </div>
      {categoryDisplay2 && (
        <div
          className="categoryUl"
          style={{
            top: "90px",
            left: "350px",
            height: "350px",
            overflow: "scroll",
            position: "absolute",
          }}
        >
          {/* {categoryList2.length > 0 && */}
          {!subMenu &&
            categoryList2.map((data, id) => {
              return (
                <li key={id}>
                  <span>&gt;</span>
                  {data.name}
                </li>
              );
            })}
          {subMenu && (
            <>
              <li>The items is sold!</li>
              <li>Contact Us at: 0092 3334483486</li>
              <li>For Re-Revival</li>
            </>
          )}
        </div>
      )}

      {/* **** Practice **** */}
      {/* {categoryDisplay2 && categoryList2.length > 0 && (
        <div
          className="categoryUl subMenu2"
          // className="categoryUl"
          style={{
            top: "90px",
            left: "350px",
            height: "350px",
            overflow: "scroll",
            position: "absolute",
            // display: "none",
          }}
        >
          <ul>
            {categoryList2.splice(8).map((data, id) => {
              return (
                <li key={id}>
                  <span>&gt;</span>
                  {data.name}
                </li>
              );
            })}
            {/* <li>Salam</li>
                      <li>W.Salam</li> */}
      {/* **** Practice End **** */}
      <img src={pharmacy_Icon} className="pharmacyIcon"></img>
      <div className="searchFirstDiv">
        <form
          className="searchBox"
          onSubmit={submitHandler}
          // onKeyPress={(e) => submitHandler(e)}
        >
          <input
            type="text"
            placeholder="SEARCH FOR ITEMS"
            className="searchInputField"
            ref={(e) => (menuRef.currentTarget = e)}
            onChange={(e) => onchangehandlerSearchBox(e.target.value)}
          ></input>
          <img
            src={searchIcon}
            alt="search--icon"
            className="searchIcon"
            onClick={submitHandlerOnClick}
          />
          {/* <img src={searchAnimIcon} alt="search--icon" className="searchIcon" /> */}
        </form>
        <ul
          className="filteringInSearchBox"
          ref={(e) => {
            menuRef3.currentTarget = e;
            ulNodes.current = e;
          }}
        >
          {/* <SearchBoxFetchingData /> */}
          {filtertion.map((drug) => {
            if (searchValue === "") {
              return "";
            } else {
              return (
                <div
                  key={drug.id}
                  className={`grtSignInFilter ${
                    onClickDisplayMenu ? "grtSignInFilter2" : ""
                  }`}
                  onClick={() => {
                    routeChange(drug);
                  }}
                  ref={liNodes}
                >
                  {/* {inputValue && <Link to="/ExtraInfo" props={drug} />} */}
                  <li className="filteringInSearchBoxLi">
                    {/* <Link
                        to="/ExtraInfo"
                        state={(drug) => {
                          return drug;
                        }}
                        className={"grtSignInFilterLink"}
                      > */}
                    <span className="greaterThanInFiltering">&gt;</span>
                    {drug.name}
                    {/* </Link> */}
                  </li>
                  {/* {ulNodes.current.children.length > 12 && ulNodes.current.chilNodes[12] > } */}
                  {/* {console.log(ulNodes.current.childNodes[9])} */}
                  {/* {console.log(ulNodes.current.children.length)} */}
                  {/* {console.log(ulNodes.current.firstChild)} */}
                </div>
              );
            }
          })}
        </ul>
      </div>
      <img
        src={cart_icon2}
        className="cartIcon"
        onClick={cartHandlerFunction}
      ></img>
      <p className="numofAddedCarts">{dataStateForCartalen}</p>
    </div>
  );
}

export default memo(SearchBox);
