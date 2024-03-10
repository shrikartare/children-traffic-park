import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.css";
import logo from "../../../../images/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const [isHamburgerCloseIcon, setHamburgerCloseIcon] = useState(false);
  const location = useLocation();
  console.log("location", location?.pathname);
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.siteLogo}>
          <a onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className={styles.desktopMenu}>
          <ul>
            <li>
              <a
                className={cn(location?.pathname === "/" && styles.activeLink)}
                onClick={() => navigate("/")}
              >
                home
              </a>
            </li>
            <li>
              <a
                className={cn(
                  location?.pathname === "/aboutus" && styles.activeLink
                )}
                onClick={() => navigate("/aboutus")}
              >
                about us
              </a>
            </li>
            <li>
              <a
                className={cn(
                  location?.pathname === "/gallery" && styles.activeLink
                )}
                onClick={() => navigate("/gallery")}
              >
                gallery
              </a>
            </li>
            <li>
              <a
                className={cn(
                  location?.pathname === "/contactus" && styles.activeLink
                )}
                onClick={() => navigate("/contactus")}
              >
                contact us
              </a>
            </li>

            <li>
              <a
                className={cn(
                  location?.pathname === "/testimonials" && styles.activeLink
                )}
                onClick={() => navigate("/testimonials")}
              >
                Testimonials
              </a>
            </li>

            <li>
              <a
                className={cn(
                  location?.pathname === "/quiz" && styles.activeLink
                )}
                onClick={() => navigate("/quiz")}
              >
                Quiz
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
            <li>
              <a onClick={() => navigate("/quiz")}>Quiz</a>
            </li>
            <li>
              <a onClick={() => navigate("/testimonials")}>Testimonials</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
