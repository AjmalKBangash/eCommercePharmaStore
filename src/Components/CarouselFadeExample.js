import Carousel from "react-bootstrap/Carousel";

// import pharmaimg01 from "./CarouselImages/pharmaimg01.jpg";
import pharmaimg02 from "./CarouselImages/Pharmaimg02new.jpg";
import pharmaimg03 from "./CarouselImages/Pharmaimg03new.jpg";
import pharmaimg04 from "./CarouselImages/pharmaimg04new.jpg";

function CarouselFadeExample() {
  return (
    <Carousel fade style={{ margin: "0 1%" }}>
      <Carousel.Item style={{ height: "370px", width: "100%" }}>
        <img className="d-block w-100" src={pharmaimg04} alt="First slide" />
        <Carousel.Caption style={{ color: "seagreen" }}>
          <h3>Flygel Tablets</h3>
          <p>We are at your foot steps, Order Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "370px", width: "100%" }}>
        <img className="d-block w-100" src={pharmaimg02} alt="Second slide" />

        <Carousel.Caption style={{ color: "seagreen" }}>
          <h3>Temperature Tablets</h3>
          <p>We are at your foot steps, Order Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "370px", width: "100%" }}>
        <img className="d-block w-100" src={pharmaimg03} alt="Third slide" />

        <Carousel.Caption style={{ color: "seagreen" }}>
          <h3>Sugar Tablets</h3>
          <p>We are at your foot steps, Order Now </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
