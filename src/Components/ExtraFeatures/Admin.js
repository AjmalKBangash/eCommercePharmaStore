import { useEffect, useState } from "react";
import "./Admin.css";
import axios from "axios";
import AdminOperations from "./AdminOperations";

function DataUpload() {
  const [isAuthenticate, setisAuthenticate] = useState(false);
  const [wrongCre, setWrongCre] = useState(false);
  const [adminPsswd, setAdminPsswd] = useState();
  const [adminName, setAdminName] = useState();
  let adminNamePasswordInput = "";
  let adminPasswordInput = "";
  // function handleAdminSubmit(e) {
  //   e.preventDefault();
  //   adminNamePassword = e.target.adminNamePassword.value;
  //   e.target.adminNamePassword.value = "";
  //   adminEmail = e.target.adminEmail.value;
  //   e.target.adminEmail.value = "";
  //   // console.log(adminNamePassword)
  // }

  // Fetching Data
  // const [id, setId] = useState("");

  function handleAdminSubmit(e) {
    // function handleAdminSubmit(e) {
    e.preventDefault();
    adminNamePasswordInput = e.target.adminNamePassword.value;
    e.target.adminNamePassword.value = "";
    adminPasswordInput = e.target.adminPassword.value;
    e.target.adminPassword.value = "";
    // fetcing data
    axios
      .get("http://localhost:3031/Admin?name=" + adminNamePasswordInput)
      .then((response) => {
        setAdminName(response.data[0].name);
        // if (response.data[0].name == adminNamePassword) {
        //   setisAuthenticate(true);
        // }
      })
      .catch((error) => {
        console.log(error);
        // setisAuthenticate(false);
      });
    axios
      .get("http://localhost:3031/Admin?password=" + adminPasswordInput)
      .then((response) => {
        setAdminPsswd(response.data[0].password);
        console.log(adminPsswd);
        // if (response.data[0].name == adminNamePassword) {
        //   setisAuthenticate(true);
        // }
      })
      .catch((error) => {
        console.log(error);
        // setisAuthenticate(false);
      });

    if (
      adminName == adminNamePasswordInput &&
      adminPsswd == adminPasswordInput
    ) {
      setisAuthenticate(true);
    } else {
      setisAuthenticate(false);
      setWrongCre(true);
    }
  }

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3031/Admin/adminNamePassword")
  //     .then((response) => {
  //       console.log(response);

  //       // if (response.data == "") {
  //       //   console.log("khaali sho");
  //       //   loadMoreBtn.style.display = "none";
  //       // }
  //       // dispatch(dataStateFunction([...response.data])); this will only pass new array with new length 6
  //       // setJsonData((pre) => [...pre, ...response.data]); //It will fetch all data bc we are also previous data
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  return (
    <>
      {!isAuthenticate && (
        <div className="Admin" style={{ marginTop: "120px" }}>
          <form onSubmit={handleAdminSubmit}>
            <div className="blockUser">
              <p className="adminUserBlock">
                ENTER YOUR CREDENTIALS FOR LOGING IN AS ADMIN:
              </p>
              {/* <label
            htmlFor="adminInput"
            style={{
              color: "rgb(207, 207, 207)",
              fontSize: "20px",
              borderRadius: "8px",
              backgroundColor: "#2e8b56d3",
              padding: "0 12px",
            }}
          >
            Enter Your Name or Email as Admin
          </label> */}

              <input
                type="text"
                placeholder="Enter Your Name or Email as Admin"
                id="adminInput"
                name="adminNamePassword"
                className="inputOfBlockUser"
                style={{ marginTop: "1px" }}
              />
              {/* <label
            htmlFor="adminPassword"
            style={{
              color: "rgb(207, 207, 207)",
              fontSize: "20px",
              borderRadius: "8px",
              backgroundColor: "#2e8b56d3",
              padding: "0 12px",
            }}
          >
            Enter Your Password as Admin
          </label> */}
              <input
                type="password"
                placeholder="Enter Your Password as Admin."
                id="adminPassword"
                name="adminPassword"
                className="inputOfBlockUser"
                style={{ marginTop: "1px" }}
              />
              {wrongCre && (
                <p style={{ color: "red", fontSize: "18px" }}>
                  Your credentials is wrong!
                </p>
              )}
              <button
                className="blockUserBtn"
                type="submit"
                onSubmit={handleAdminSubmit}
              >
                ADMIN
              </button>
            </div>
          </form>
          {/* // Admin Ended */}
          {/* <hr
        style={{
          height: "4px",
          width: "1328px",
          color: "green",
          backgroundColor: "green",
        }}
      /> */}
        </div>
      )}

      {isAuthenticate ? <AdminOperations /> : ""}
    </>
  );
}

export default DataUpload;
