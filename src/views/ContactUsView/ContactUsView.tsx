import React from "react";
import classNames from "classnames";
import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import styles from "./ContactUsView.module.css";

const ContactUsView = () => {
  return (
    <>
      <Header />
      <div className={styles.contactUsView}>
        <div className={styles.contactUsHeadLine}>
          <h2>Contact Us</h2>
        </div>
        <div className={styles.contactUsContainer}>
          <div className={styles.contactUsCard}>
            <div className={styles.nectarIcon}>
              <i className={classNames("fa fa-mobile")}></i>
            </div>
            <p>
              <a href="tel:6031112298">+91123456789</a>
            </p>
          </div>
          <div className={styles.contactUsCard}>
            <div className={styles.nectarIcon}>
              <i className={classNames("fa fa-envelope-open")}></i>
            </div>
            <p>
              {" "}
              <a href="mail:trafficpark@gmail.com">trafficpark@gmail.com</a>
            </p>
          </div>
          <div className={styles.contactUsCard}>
            <div className={styles.nectarIcon}>
              <i className={classNames("fa fa-map-marker")}></i>
            </div>
            <p>
              <a
                target="_blank"
                href="https://www.google.com/maps?ll=22.306991,73.204452&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=8957164172350216686"
              >
                Traffic office, Karelibaug Vadodara-390005
              </a>
            </p>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.935739797915!2d73.2044524!3d22.3069908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf5de1e080bd%3A0x7c4e3d5b8fca59ee!2sKarelibaug%20Police%20Station!5e0!3m2!1sen!2sin!4v1709997048224!5m2!1sen!2sin"
            width={"100%"}
            height={350}
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsView;
