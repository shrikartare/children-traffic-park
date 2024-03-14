import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cn from "classnames";
import logo from "../../../../images/Logo/logo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <footer className={styles.footerSection}>
        <div className={styles.logo}>
          <a onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className={styles.quickLinks}>
          <h4> Quick Links</h4>
          <ul>
            <li>
              <a
                className={cn(location?.pathname === "/" && styles.activeLink)}
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={cn(
                  location?.pathname === "/aboutus" && styles.activeLink
                )}
                onClick={() => navigate("/aboutus")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className={cn(
                  location?.pathname === "/gallery" && styles.activeLink
                )}
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className={cn(
                  location?.pathname === "/contactus" && styles.activeLink
                )}
                onClick={() => navigate("/contactus")}
              >
                Contact Us
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
        <nav className={styles.contactUs}>
          <h4> Contact Us</h4>
          <ul>
            <li>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Children Traffic Park, Near Karelibaug Police Station Karelibaug,
              Vadodara-390005
            </li>
            <li>
              <i className="fa fa-mobile" aria-hidden="true"></i>
              12345665897
            </li>
            <li>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              xyz@gmail.com
            </li>
          </ul>
        </nav>
      </footer>

      <div className={styles.copyrightContainer}>
        <p> © 2024 Traffic Park. </p>
        <nav className={styles.socialLinks}>
          <ul>
            <li>
              <a href="#home">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="#home">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#home">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Footer;
