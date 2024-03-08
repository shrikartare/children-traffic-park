import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.css";
import logo from "../../../../images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isHamburgerCloseIcon, setHamburgerCloseIcon] = useState(false);
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.siteLogo}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className={styles.desktopMenu}>
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/aboutus" onClick={() => navigate("aboutus")}>
                about us
              </a>
            </li>
            <li>
              <a href="gallery" onClick={() => navigate("gallery")}>
                gallery
              </a>
            </li>
            <li>
              <a href="contactus" onClick={() => navigate("contactus")}>
                contact us
              </a>
            </li>
          </ul>
        </nav>
        {!isHamburgerCloseIcon ? (
          <a
            href="javascript:void(0);"
            className={cn("icon", styles.hamburgerIcon)}
            onClick={() => setHamburgerCloseIcon(!isHamburgerCloseIcon)}
          >
            <i className="fa fa-bars"></i>
          </a>
        ) : (
          <a
            href="javascript:void(0);"
            className={cn("icon", styles.hamburgerIcon)}
            onClick={() => setHamburgerCloseIcon(!isHamburgerCloseIcon)}
          >
            <i className="fa fa-close"></i>
          </a>
        )}
      </div>
      {isHamburgerCloseIcon && (
        <nav className={styles.hamburgerMenu}>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#home">about us</a>
            </li>
            <li>
              <a href="#home">gallery</a>
            </li>
            <li>
              <a href="#home">contact us</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
