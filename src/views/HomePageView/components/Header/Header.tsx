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
          <a href="/" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className={styles.desktopMenu}>
          <ul>
            <li>
              <a onClick={() => navigate("/")}>home</a>
            </li>
            <li>
              <a onClick={() => navigate("/aboutus")}>about us</a>
            </li>
            <li>
              <a onClick={() => navigate("/gallery")}>gallery</a>
            </li>
            <li>
              <a onClick={() => navigate("/contactus")}>contact us</a>
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
              <a onClick={() => navigate("/")}>home</a>
            </li>
            <li>
              <a onClick={() => navigate("/aboutus")}>about us</a>
            </li>
            <li>
              <a onClick={() => navigate("/gallery")}>gallery</a>
            </li>
            <li>
              <a onClick={() => navigate("/contactus")}>contact us</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
