import React, { useState } from "react";
import fadfedLogo from "../../assets/Logo/fadfed.PNG";
import { Link } from "react-router-dom";
// import './Header.css';

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    // const [subMenu,setSubMenu] = useState(false);

  const openmobilemenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else setMobileMenu(true);
  };

  // const openSubMenu = () => {
  //   if(subMenu) {
  //       setSubMenu(false);
  //   } else setSubMenu(true);
  // }

  return (
    <header className="header">
    <div className="container">
      <div className="header__content">
        <Link to="/">
          <img src={fadfedLogo} alt="gen logo" className="header__logo" />
        </Link>
        <nav className={"header__navbar " +
            [mobileMenu ? "openMobileMenu" : ""]}>
          <ul className="header__list">
            {/* <li className={"header__item submenu " + [subMenu ? 'closeArrow' : 'openArrow']}onClick={openSubMenu}>
              who we are
              <ul className={"header__sub-List " + [subMenu ? 'openSubmenu' : '']}> 
                <li className="header__subItem">
                  <Link to="/aboutus" className="header__link">
                    About us
                  </Link>
                </li>
                <li className="header__subItem">
                  <Link className="header__link" to="/capabilities">Capabilities</Link>
                </li>
                <li className="header__subItem">
                  <Link className="header__link" to="/team">Management Team</Link>
                </li>
              </ul>
            </li> */}
            <li className="header__item">
              <a className="header__link" href="#valuesContainer">Our Values</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#ourStory">Our Story</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#ourWork">Our Work</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#latestNews">Latest News</a>
            </li>
          </ul>
        </nav>
        <div
          className="header__burgerMenu-Container"
          onClick={openmobilemenu}
        >
          <i className={mobileMenu ? "openbtn" : "closebtn"}></i>
          <i className={mobileMenu ? "openbtn" : "closebtn"}></i>
          <i className={mobileMenu ? "openbtn" : "closebtn"}></i>
        </div>
      </div>
    </div>
  </header>
  );
}