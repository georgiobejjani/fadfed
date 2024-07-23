import React from "react";
import fadfedLogo from "../../assets/Logo/fadfed.PNG";
import fadfedLogoWhite from "../../assets/Logo/fadfedWhite.png";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <>
    
      <footer className="footer">
        <Link>
        <img src={fadfedLogoWhite} alt="gen white logo" className="footer__logo"/>        
        </Link>
        <ul className="footer__list">
          <li className="footer__item"><a className="footer__linkItem" href="#valuesContainer">Our Values</a></li>
          <li className="footer__item"><a className="footer__linkItem" href="#ourStory">Our Story</a></li>
          <li className="footer__item"><a className="footer__linkItem" href="#ourWork">Our Work</a></li>
          <li className="footer__item"><a className="footer__linkItem" href="#latestNews">Latest News</a></li>
          {/* <li className="footer__item"><a className="footer__linkItem" to="/partners">Partners</a></li> */}
          {/* <li className="footer__item"><a className="footer__linkItem" to="/contactus">Contact-us</a></li> */}
        </ul>
        <span className="footer__copyright">Copyright © {new Date().getFullYear()} FADFEF-RELEASE - All rights reserved</span>
      </footer>
    </>
  );
}