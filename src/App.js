import "./App.css";
// import "react-router";
// import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import ExtraInfo from "./Components/ExtraInfo";
import Nav from "./Components/Nav";
import AddedCarts from "./Components/AddedCarts";
import Jolly from "./Components/Jolly";
import LinkCheck from "./Components/ExtraFeatures/LinkCheck";
import Form from "./Components/form/Form";
import Admin from "./Components/ExtraFeatures/Admin";

import axios from "axios";
// import Form from "./Components/form/Form";
// import CarouselSliding from "./Components/CarouselSliding";
// import CarouselFade from "./Components/CarouselFade";
// import Search from "./Components/Search";
import SearchBox from "./Components/SearchBox";
// import CarouselFadeExample from "./Components/CarouselFadeExample";
// import Carousel from "react-bootstrap/Carousel";
// import Card from "./Components/Card";
// import Cart from "./Components/Cart";
// import ExtraInfo from "./Components/ExtraInfo";
// import Footer from "./Components/Footer";
import Practice from "./Components/Practice";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  component,
} from "react-router-dom";

const theRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />} />
      <Route path="/Nav" element={<Nav />}>
        {/* <Route index element={<Jolly />} /> */}
        {/* <Route index element={<SearchBox />} /> */}
        <Route path="Form" element={<Form />} />
      </Route>
      <Route path="ExtraInfo" element={<ExtraInfo />} />
      <Route path="AddedCarts" element={<AddedCarts />} />
      <Route path="LinkCheck" element={<LinkCheck />} />
      <Route path="Admin" element={<Admin />} />

      {/* <Route path="Nav" element={<Nav />}></Route> */}
    </>
  )
);

function App() {
  // axios.post("http://localhost:3031/users", {
  //   id: 3,
  //   firstName: "Finn",
  //   lastName: "Williams",
  //   password: "jaan@302",
  // });

  // axios({
  //   method: "post",
  //   url: "http://localhost:3031/users",
  //   data: {
  //     id: 2,
  //     firstName: "Finn",
  //     lastName: "Williams",
  //     password: "jaan@302",
  //   },
  // });
  return (
    <div style={{ float: "left" }}>
      <RouterProvider router={theRoutes} />
    </div>
  );
}

// <div style={{ float: "left" }}>
//   <Nav />
// </div>

export default App;
