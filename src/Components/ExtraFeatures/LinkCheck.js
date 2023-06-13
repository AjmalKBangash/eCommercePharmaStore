import { useLocation } from "react-router";

function LinkCheck(props) {
  let location = useLocation();
  let data = location.state;
  return (
    <div>
      <p>Salammmmmm</p>
      <p>W.Salammmmmmmm</p>
      <p>{data.nephew}</p>
    </div>
  );
}
export default LinkCheck;
