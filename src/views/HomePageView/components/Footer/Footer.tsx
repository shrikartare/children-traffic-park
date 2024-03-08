import React from "react";
import logo from "../../../../images/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footerSection}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className={styles.quickLinks}>
          <h4> Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">About Us</a>
            </li>
            <li>
              <a href="#home">Gallery</a>
            </li>
            <li>
              <a href="#home">Contact Us</a>
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
