import { useState, useEffect } from "react";
import Overlay from "./Overlay";
// import { useSelector } from "react-redux";
// import { useForm } from "react-hook-form";

function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [value] = useState("");
  // const varForForm = useSelector((state) => state.varForForm);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div>
      {/* {function display() {}} */}
      {/* <button onClick={toggleOverlay}>Open</button> */}
      <Overlay isOpen={isOpen} onClose={toggleOverlay} />
      {/* <h1>Content in overlay</h1> */}
    </div>
  );
}

export default Form;
