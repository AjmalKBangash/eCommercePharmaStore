import { Route, Outlet } from "react-router-dom";
import Nav from "./Nav";
import Form from "./form/Form";
import SearchBox from "./SearchBox";
import CarouselFade from "./CarouselFade";
import Cart from "./Cart";
import ExtraInfo from "./ExtraInfo";
import Footer from "./Footer";
import AddedCarts from "./AddedCarts";
import Admin from "./ExtraFeatures/Admin";

import { useMemo } from "react";
import { useSelector } from "react-redux";

function AppLayout() {
  const arrFilterSearch = useSelector((state) => state.dataStateWholeSale);
  const displayFormOneTime = useSelector((state) => state.displayFormOneTime);
  return (
    <>
      {/* <Route path="/"> */}
      {/* <Form /> */}
      {/* <Route index path="Form" element={<Form />} /> */}
      <Nav />

      <SearchBox />

      <CarouselFade />
      <Cart />
      {/* <ExtraInfo /> */}
      {/* <Admin /> */}

      <Footer />
      {/* <AddedCarts /> */}
      <Outlet />
      {/* </Route> */}
    </>
  );
}

export default AppLayout;
