import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataStateForCartAction, stateForRenderingAction } from "./Store/Index";
import "./AddedCarts.css";
import Nav from "./Nav";
import pill06 from "./CarouselImages/PillsImages/pill06.png";

function AddedCarts() {
  const [stateForRendering, setstateForRendering] = useState(false);
  const dataStateForCart = useSelector((state) => state.dataStateForCart);
  //   const stateForRendering = useSelector((state) => state.stateForRendering);

  const refFunDelCart = useRef();

  const dispatch = useDispatch();

  // Fetching data from server(database) which is added carts of the users(((((We have commented useeffect because this component is never called until uuser want to see it hence we need fetched data from server)))))
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3031/AddedCarts")
  //       .then((response) => {
  //         dispatch(
  //           dataStateForCartAction([...dataStateForCart, ...response.data])
  //         );
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  //Deleting data from server (database)
  //   AddedCarts();

  //   useEffect(() => {
  function delTheCart(data) {
    axios.delete("http://localhost:3031/AddedCarts/" + data.id);
    setstateForRendering(true);
    //   dispatch(stateForRenderingAction([true]));
  }
  // refFunDelCart.current = delTheCart;
  // forceUpdate();
  //   }, []);
  useEffect(() => {
    if (stateForRendering == true) {
      axios
        .get("http://localhost:3031/AddedCarts")
        .then((response) => {
          dispatch(dataStateForCartAction([...response.data]));
        })
        .catch((error) => {
          console.log(error);
        });
      setstateForRendering(false);
    }
  }, [stateForRendering]);
  return (
    <>
      <Nav />
      {/* <div className="Carts"> */}
      <div className="cartss">
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-8hkb">Image</th>
              {/* <th class="tg-8hkb">ID</th> */}
              <th className="tg-8hkb">Name</th>
              <th className="tg-8hkb">Description</th>
            </tr>
          </thead>
          <tbody>
            {dataStateForCart.map((data) => {
              return (
                <>
                  <tr key={data.name}>
                    <td Name="del-td">
                      {" "}
                      <span
                        className="delCart"
                        // onClick={() => refFunDelCart.current(data)}
                        onClick={() => delTheCart(data)}
                      >
                        {"\u00D7"}
                      </span>
                    </td>{" "}
                  </tr>
                  <tr key={data.id}>
                    <td className="tg-vh87">
                      <img
                        src={pill06}
                        alt="pills images in added carts"
                        style={{ height: "150px", width: "auto" }}
                      ></img>
                    </td>
                    {/* <td class="tg-vh87">{data.id}</td> */}
                    <td className="tg-vh87" style={{ color: "black" }}>
                      {data.name}
                    </td>
                    <td className="tg-vh87">
                      {data.description} Okay thenw we will be so healthy after
                      eating pills
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        {/* <ul>
          <li>{dataStateForCart[0].id}</li>
          <li>{dataStateForCart[0].name}</li>
          <li>{dataStateForCart[0].description}</li>
        </ul> */}
      </div>
    </>
  );
}

export default AddedCarts;
