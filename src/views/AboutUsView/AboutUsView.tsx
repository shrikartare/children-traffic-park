import React from "react";
import styles from "./AboutUsView.module.scss";
import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import aboutUsImg from "../../images/TrafficParkTeam/TrafficparkTeam_02_c.jpg";

const AboutUsView = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutUsView}>
        <div className={styles.aboutUsHeadLine}>
          <h2>About Us</h2>
        </div>
        <div className={styles.aboutUsInfo}>
          <div className={styles.aboutUsImage}>
            <a target="_blank" href={aboutUsImg}>
              <img src={aboutUsImg} alt="about us" />
            </a>
          </div>

          <div className={styles.welcomeContainer}>
            <h2>CHILDREN TRAFFIC PARK</h2>
            <div className={styles.dividerLine} />
            <p>
              Welcome to Traffic Park, a vibrant space dedicated to shaping the
              future of road safety education.Our park is more than just an
              educational hub – it’s an immersive experience designed to instill
              a deep understanding of road safety in the hearts and minds of
              young learners.
            </p>
            <p>
              Also to make people aware about environment and increase awarness
              about banyan tree in Vadodara city (Vadnagri), we have constructed
              a nursery which showcases many different types of cultural
              forests.
            </p>
            <p>
              Our park features realistic signals, interactive exhibits, and
              engaging educational sessions led by experienced traffic
              policemen. We believe in making learning about road safety a
              memorable adventure for every child, laying the foundation for
              responsible road behavior.
            </p>
            <h3 className={styles.owners}>Traffic Park Team</h3>
            <ul>
              <li>Anupam Singh Gehlot (Commissioner of Police)</li>
              <li>Jyoti Pankaj Patel (Deputy Commissioner of Police)</li>
              <li>Manoj Ninama (Joint Commissioner of Police)</li>
              <li>J.I.Vasava (Assistant Commissioner of Police,Traffic)</li>
              <li>Vadodara Traffic Police</li>
              <li>Vadodara City Traffic Education Trust</li>
            </ul>
          </div>
        </div>
        <div className={styles.clear}></div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsView;
