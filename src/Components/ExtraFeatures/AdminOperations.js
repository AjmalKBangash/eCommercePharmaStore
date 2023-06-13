import "./Admin.css";

function AdminOperations() {
  function handleAdminSubmit() {
    return;
  }
  return (
    <div className="Admin">
      <p className="AdminMainHeading">
        THIS IS ADMINS PAGE BE POLITE AND BE CURIOUS WHILE UPLOADING AND
        DELETING DATA OR BLOCKING ANY USER:
      </p>
      {/* <form onSubmit={handleAdminSubmit}> THIS IS ADMIN FROM PREVIOUS PAGE
        <div className="blockUser">
          <p className="adminUserBlock">
            ENTER YOUR CREDENTIALS FOR LOGING IN AS ADMIN:
          </p>
          <label
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
          </label>

          <input
            placeholder="Type here..."
            id="adminInput"
            name="adminNamePassword"
            className="inputOfBlockUser"
            style={{ marginTop: "1px" }}
          />
          <label
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
          </label>
          <input
            placeholder="Type here..."
            id="adminPassword"
            name="adminEmail"
            className="inputOfBlockUser"
            style={{ marginTop: "1px" }}
          />
          <button
            className="blockUserBtn"
            type="submit"
            onSubmit={handleAdminSubmit}
          >
            ADMIN
          </button>
        </div>
      </form> */}
      {/* // Admin Ended */}
      <form>
        <div className="blockUser">
          {/* <label htmlFor="userName">User Name</label> */}
          <p className="adminUserBlock">
            ENTER YOUR INFORMATION FOR BLOCKING USER:
          </p>
          <input
            placeholder="Enter User Name for Blocking"
            id="userName"
            className="inputOfBlockUser"
          />
          {/* <label htmlFor="emailAddress">User Email Address</label> */}
          <input
            placeholder="Enter User Email Address for Blocking"
            className="inputOfBlockUser"
          />
          <button className="blockUserBtn" type="submit">
            BLOCK USER
          </button>
        </div>
      </form>
      <hr
        style={{
          height: "4px",
          width: "1328px",
          color: "green",
          backgroundColor: "green",
        }}
      />
      <form>
        <div className="blockUser">
          <p className="adminUserBlock">ENTER THE DATA YOU WANT TO UPLOAD:</p>
          {/* <label htmlFor="userName">User Name</label> */}
          <input
            name="id"
            placeholder="ENTER ITEM ID"
            id="userName"
            className="inputOfBlockUser"
          />
          {/* <label htmlFor="emailAddress">User Email Address</label> */}
          <input
            name="name"
            placeholder="ENTER ITEM NAME"
            className="inputOfBlockUser"
          />
          <input
            name="description"
            placeholder="ENTER ITEM DESCRIPTION"
            className="inputOfBlockUser"
          />
          <input
            name="image"
            placeholder="SELECT IMAGE LATER FIXING THIS SHOULD N LAST"
            className="inputOfBlockUser"
          />
          <input
            name="availability"
            placeholder="ENTER ITEM AVAILABILITY"
            className="inputOfBlockUser"
          />
          <input
            name="price"
            placeholder="ENTER ITEM PRICE"
            className="inputOfBlockUser"
          />
          <input
            name="category"
            placeholder="ENTER ITEM CATAGORY"
            className="inputOfBlockUser"
          />
          <button className="blockUserBtn" type="submit">
            UPLOAD DATA
          </button>
        </div>
      </form>
      <hr
        style={{
          height: "4px",
          width: "1328px",
          color: "green",
          backgroundColor: "green",
        }}
      />
      <form>
        <div className="blockUser">
          <p className="adminUserBlock">ENTER THE DATA YOU WANT TO DELETE:</p>
          <input
            name="id"
            placeholder="ENTER ITEM PRICE"
            className="inputOfBlockUser"
          />
          <input
            name="category"
            placeholder="ENTER ITEM CATAGORY"
            className="inputOfBlockUser"
          />
          <button className="blockUserBtn" type="submit">
            DELETE DATA
          </button>
        </div>
      </form>
      <hr
        style={{
          height: "4px",
          width: "1328px",
          color: "green",
          backgroundColor: "green",
        }}
      />
    </div>
  );
}

export default AdminOperations;
