import React from "react";
import styles from "./AboutUsView.module.css";
import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import aboutUsImg from "../../images/1708930666951.jpg";

const AboutUsView = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutUsView}>
        <div className={styles.aboutUsHeadLine}>
        <h2 >About Us</h2>
        </div>
        <div className={styles.aboutUsInfo}>
          <div className={styles.aboutUsImage}>
            <img src={aboutUsImg} alt="about us" />
          </div>

          <div className={styles.welcomeContainer}>
            <h2>WELCOME TO TRAFFIC PARK</h2>
            <div className={styles.dividerLine} />
            <p>
              Welcome to Traffic Park, a vibrant space dedicated to shaping the
              future of road safety education. Established by a team of
              passionate traffic police officers, our park is more than just an
              educational hub – it’s an immersive experience designed to instill
              a deep understanding of road safety in the hearts and minds of
              young learners.
            </p>
            <p>
              Our park features realistic signals, interactive exhibits, and
              engaging educational sessions led by experienced traffic
              policemen. We believe in making learning about road safety a
              memorable adventure for every child, laying the foundation for
              responsible road behavior.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsView;
