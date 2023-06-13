import React from "react";
import "./Nav.css";
import Form from "./form/Form";
import SearchBox from "./SearchBox";
import CarouselFade from "./CarouselFade";
import { Link, NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navv">
        <ul className="navigation">
          {/* <li>Al'iikhwa PHARMACY</li> */}
          {/* <Link to="/" ></Link> */}
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <li className="arabicFont" style={{ color: "white" }}>
              الأخوةصيدلية
            </li>
          </Link>
          <Link className="linkai">
            <li>STORE</li>
          </Link>
          <Link className="linkai">
            <li>ADDED CARTS</li>
          </Link>
          <Link className="linkai">
            <li>TRACK ORDER</li>
          </Link>
          <Link className="linkai">
            <li>CUSTOMER CARE</li>
          </Link>
          <Link className="linkai">
            <li>ACCOUNT</li>
          </Link>
          <Link to="" className="linkai">
            <li>LOGin</li>
          </Link>
          <Link className="linkai">
            <li>SIGNup</li>
          </Link>
        </ul>
      </nav>
      {/* <Form />
      <SearchBox />
      <CarouselFade /> */}
      <Outlet />
    </>
  );
}

export default Nav;
