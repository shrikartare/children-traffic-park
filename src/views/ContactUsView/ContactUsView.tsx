import React from "react";
import classNames from "classnames";
import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL_DISPLAY,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "../../contactInfo";
import styles from "./ContactUsView.module.scss";

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
              <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
            </p>
          </div>
          <div className={styles.contactUsCard}>
            <div className={styles.nectarIcon}>
              <i className={classNames("fa fa-envelope-open")}></i>
            </div>
            <p>
              {" "}
              <a href={CONTACT_EMAIL_HREF}>{CONTACT_EMAIL_DISPLAY}</a>
            </p>
          </div>
          <div className={classNames(styles.contactUsCard, styles.addressCard)}>
            <div className={styles.nectarIcon}>
              <i className={classNames("fa fa-map-marker")}></i>
            </div>
            <p>{CONTACT_ADDRESS}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsView;
