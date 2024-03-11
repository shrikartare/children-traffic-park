import React from "react";
import trafficPoster from "../../../../images/TrafficPoster_06.jpg";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.infoSection}>
        <h5>About Us</h5>
        <h2>Welcome to traffic park</h2>
        <div className={styles.dividerLine} />
        <p>
          Welcome to Traffic Park, a vibrant space dedicated to shaping the
          future of road safety education.Our park is more than just an
          educational hub – it's an immersive experience designed to instill a
          deep understanding of road safety in the hearts and minds of young
          learners.
        </p>

        <p>
          Also to make people aware about environment and increase awarness
          about banyan tree in Vadodara city(Vadnagri), we have also developed a
          nursery which showcases many types of plants.
        </p>
        <p>
          Our park features realistic signals, interactive exhibits, and
          engaging educational sessions led by experienced traffic policemen. We
          believe in making learning about road safety a memorable adventure for
          every child, laying the foundation for responsible road behavior.
        </p>
      </div>
      <div className={styles.videoSection}>
        <img
          src={trafficPoster}
          alt="Traffic Park"
          width="100%"
          height="100%"
        />
        {/* <iframe
          title="aboutus"
          width={"100%"}
          height="350"
          src={"https://www.youtube.com/embed/N2g15ytD3WA"}
        ></iframe> */}
      </div>
      <div></div>
    </div>
  );
};
export default AboutUs;
