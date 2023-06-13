import "./Footer.css";
import pharmaStoreAccounts from "./CarouselImages/pharmaStoreAccounts.webp";

function Footer() {
  return (
    <>
      <div className="containerFooter">
        <hr />
        <div className="linksEtc">
          <span className="inLinks1">
            <h4>Customer Care</h4>
            <ul>
              <li>
                {/* he anchor tag  in react should not be used because it rerenders the component and to avoid it we are having react router */}
                Help Center
              </li>
              <li>How to buy</li>
              <li>Corporate and bulk purchasing</li>
              <li>
                {/* <a target="_blank" rel="noreferrer" href="#"> */}
                Returns and Refunds
                {/* </a> */}
              </li>
              <li>
                {/* <a target="_blank" rel="noreferrer" href="#"> */}
                Pharma Shop
                {/* </a> */}
              </li>
              <li>
                {/* <a target="_blank" rel="noreferrer" href="#"> */}
                Contact Us
                {/* </a> */}
              </li>
              <li>
                {/* <a target="_blank" rel="noreferrer" href="#"> */}
                Purchase Protection
                {/* </a> */}
              </li>
            </ul>
          </span>
          <span className="inLinks2">
            <h4>Pharma Store Contract</h4>
            <p className="footerParagraphs">
              Pharma store contracts policy has been announced with the
              following pre-requisities and rules to be followed, Pharma store
              has been taking care of their customers from dawn to dusk and with
              all arrivals and deliveries.
            </p>
          </span>
          <span className="inLinks3">
            <h4>Privacy Policy</h4>
            <p className="footerParagraphs">
              We collect data for a better user experience and our data includes
              your address, sites yo visited for a better product interests. We
              will also be sending you emails base on yor interest to entertain
              you with our customer care
            </p>
          </span>
        </div>
        {/* <hr /> */}
        {/* <div className="linksEtc">
          <span className="inPrivacy"></span>
          <span className="inPrivacy">
            <p className="footerParagraphs"></p>
          </span>
          <span className="inPrivacy">
            <p className="footerParagraphs"></p>
          </span>
          <span className="inPrivacy"></span>
        </div> */}
        <div className="copyRight">
          <span> &#169; ParmaStore 2023</span>
          <img
            src={pharmaStoreAccounts}
            alt="pharma store accounts"
            useMap={"#image_map"}
            style={{
              height: "80px",
              width: "auto",
              margin: "0px 10px 0 auto",
            }}
          />
          <map name={"image_map"}>
            <area
              target="_blank"
              alt="instagram account"
              href="https://www.instagram.com"
              coords="476,319,145"
              shape="circle"
            />
            <area
              target="_blank"
              alt="facebook account"
              href="https://www.facebook.com"
              coords="144,320,144"
              shape="circle"
            />
            <area
              target="_blank"
              alt="twitter account"
              href="https://www.twitter.com"
              coords="805,318,145"
              shape="circle"
            />
            <area
              target="_blank"
              alt="youtube account"
              href="https://www.youtube.com"
              coords="1135,319,145"
              shape="circle"
            />
          </map>
        </div>
      </div>
    </>
  );
}

export default Footer;
