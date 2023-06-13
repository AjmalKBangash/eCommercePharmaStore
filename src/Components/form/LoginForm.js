import { useSelector } from "react-redux";
import "./Overlay.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginForm() {
  const isActive = useSelector((state) => state.isActive);

  const validationSchema = yup.object({
    usernameORemail: yup.string().required("User Name or Email is required!"),
    password: yup.string().required("Password is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  function onsubmit() {
    reset();
  }
  // console.log(errors.password.message);

  return (
    <div className={`${isActive ? "login" : ""}`}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          type="text"
          className="inputFieldinOverlayForm"
          {...register("usernameORemail", {
            required: "This should not be empty",
          })}
          placeholder="Username or Email"
        ></input>
        {errors.usernameORemail && (
          <p className="pForForm">{errors.usernameORemail.message}</p>
        )}
        <input
          type="password"
          className="inputFieldinOverlayForm"
          {...register("password", {
            required: "This should not be empty",
          })}
          placeholder="Password"
        ></input>
        {errors.password && (
          <p className="pForForm">{errors.password.message}</p>
        )}
        {/* <p>errors</p> */}
        <br />
        <br />
        {/* <p
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
                  </p> */}
        <button type="submit" className="loginSignBtn">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
