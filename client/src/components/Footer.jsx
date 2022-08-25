import React from "react";
import "../styles/Footer.css";
import {
  AiFillPhone,
  AiFillFacebook,
  AiFillPrinter,
  AiFillHome,
  AiFillMail,
} from "react-icons/ai";

function Footer() {
  return (
    <section className="footer position-bottom height-50px
    margin-bottom: -50px" >
      <section className="footer-info">
        <section className="footer-info-left">
          <h6 className="text-uppercase fw-bold mb-4">ABOUT US</h6>
          MySupermarket is a new company that came to help consumer easy buy.
          <br />
          We are happy you choice to join us :)
          <br />
          And now lets do shooping !!
        </section>

        <section className="footer-info-center">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on Facebook:</span>
            <br />
            <a
              href="https://www.facebook.com/My-Supermarket-109443241883186"
              className="me-4 text-reset"
            >
              <AiFillFacebook fab icon="facebook-f" />
            </a>
          </div>
        </section>

        <section className="footer-info-right">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <AiFillHome /> Tel Aviv, Rothschild 32, Israel
          </p>
          <p>
            <AiFillMail /> info@MySupermarket.co.il
          </p>
          <p>
            <AiFillPhone /> + 972 03-9628249
          </p>
          <p>
            <AiFillPrinter /> + 972 03-9634857
          </p>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
}

export default Footer;
