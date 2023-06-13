import { Fragment, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isActiveAction } from "../Store/Index";
import LoginForm from "./LoginForm";
import "./Overlay.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function Overlay({ isOpen, onClose }) {
  // const [isActive, setActive] = useState(false); //this should be in redux
  // const [isActive2, setActive2] = useState(false);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    namee: yup
      .string()
      .required("Name is required!")
      .min(3, "Name must be greater than 3 cahracters!"),
    email: yup
      .string()
      .required("Email is required!")
      .email("Please enter valid email!"),
    password: yup
      .string()
      .required("Please enter your password!")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password!")
      .oneOf([yup.ref("password"), null], "Passwords don't match!"),
    address: yup.string().required("Address is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function handleSignUp() {
    // setActive2(true);
    // setActive(true);
    dispatch(isActiveAction(true));
  }
  function handleSignIn() {
    // setActive2(false);
    // setActive(false);
    dispatch(isActiveAction(false));
  }
  function onsubmit(e) {
    console.log(e);
    reset();
  }

  useEffect(() => {});
  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <h6 className="h6OverForm">Log In and get order</h6>
            <hr style={{ margin: "10px 0 10px 0" }} />
            <div className="overlayHeaderForm">
              <button
                key={Math.random()}
                type="button"
                // className="signLogBtn"
                className={`signLogBtn ${isActive ? "" : "signLogBtn2"}`}
                ref={ref2}
                onClick={handleSignIn}
              >
                Log In
              </button>
              <button
                key={Math.random()}
                type="button"
                // className="signLogBtn"
                className={`signLogBtn ${isActive ? "signLogBtn2" : ""}`}
                ref={ref3}
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              >
                {"\u00D7"}
              </button>
            </div>

            <div className="overlay__controls">
              <div className={`${!isActive ? "login" : ""}`}>
                <form onSubmit={handleSubmit(onsubmit)}>
                  <input
                    type="text"
                    className="inputFieldinOverlayForm"
                    // name="namee"
                    {...register("namee")}
                    placeholder="Enter Your Name"
                  ></input>
                  {errors.namee && (
                    <p className="pForForm">{errors.namee.message}</p>
                  )}
                  <input
                    type="text"
                    className="inputFieldinOverlayForm"
                    {...register("email")}
                    placeholder="Email Address"
                  ></input>
                  {errors.email && (
                    <p className="pForForm">{errors.email.message}</p>
                  )}
                  <input
                    type="password"
                    className="inputFieldinOverlayForm"
                    {...register("password")}
                    placeholder="Password"
                  ></input>
                  {errors.password && (
                    <p className="pForForm">{errors.password.message}</p>
                  )}
                  <input
                    type="password"
                    className="inputFieldinOverlayForm"
                    {...register("confirmPassword")}
                    placeholder="Confirm Passowrd"
                  ></input>
                  {errors.confirmPassword && (
                    <p className="pForForm">{errors.confirmPassword.message}</p>
                  )}
                  <input
                    type="text"
                    className="inputFieldinOverlayForm"
                    {...register("address")}
                    placeholder="Enter Your Address"
                  ></input>
                  {errors.address && (
                    <p className="pForForm">{errors.address.message}</p>
                  )}
                  <br />
                  <br />
                  <p
                    style={{
                      color: "grey",
                      fontSize: "12px",
                      width: "500px",
                      padding: "0 11px 0 11px",
                    }}
                  >
                    By clicking{" "}
                    <span style={{ color: "orangered" }}>Sign up</span>, you
                    agree to our{" "}
                    <span style={{ color: "orangered" }}>Terms,</span> Privacy
                    Policy{" "}
                    <span style={{ color: "orangered" }}>Cookies Policy </span>
                    and Cookies Policy. You may receive SMS notifications from
                    us and can opt out at any time.
                    <br />
                    <br />
                    We may be sending you reports about{" "}
                    <span style={{ color: "orangered" }}>
                      Current Diseases{" "}
                    </span>{" "}
                    to warn and inform you about present situation and security
                    measures against diseases.
                  </p>
                  <button type="submit" className="loginSignBtn">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            <LoginForm />

            <hr style={{ margin: "10px 0 0 0" }} />
            <h6 className="h6OverForm">Log In with</h6>
            <div className="overlayHeaderForm">
              <button type="button" className="facebook">
                Facebook
              </button>
              <button type="button" className="github">
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#DB4437" }}>o</span>
                <span style={{ color: "#F4B400" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#0F9D58" }}>l</span>
                <span style={{ color: "#DB4437" }}>e</span>
              </button>
            </div>
          </div>
        </div>
        // </div>
      )}
    </Fragment>
  );
}

export default Overlay;
