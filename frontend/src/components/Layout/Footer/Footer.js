import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span>Phone Hub Bishop Auckland</span>
          </h3>

          <p className="footer-links">
            <Link smooth to="/">
              Home
            </Link>
            <Link smooth to="#aboutus">
              About Us
            </Link>
            <Link smooth to="#services">
              Service
            </Link>
            <Link smooth to="#gallery">
              Gallery
            </Link>

            <Link smooth to="/">
              Home
            </Link>
            <Link smooth to="#contactus">
              Contact Us
            </Link>
          </p>

          <p className="footer-company-name">
            2022 @ http://saif-portfolio-io.herokuapp.com | All Right Reserved
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>93 newgate street bishop auckland DL14 7EW</span> auckland
              DL14 7EW
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>0744 744 5141</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:help@phonehub.uk">help@phonehub.uk</a>
            </p>
          </div>
          <div>
            <i className="fa fa-map-marker"></i>
            <p>Monday - Saturday : 10:00AM - 4:30PM</p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the Company</span>
            For the last ten years, we have been providing high quality Mobile
            Phone Service & Repairs, iPad and tablet repairs for private
            individuals and businesses across the North East.
          </p>

          <div className="footer-icons">
            <a
              href="https://m.facebook.com/phonehubbishop/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="mailto:help@phonehub.uk" target="_blank" rel="noreferrer">
              <i className="fa fa-google"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
