import React from "react";
import trafficPoster from "../../../../images/TrafficPoster_06.jpg";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.infoSection}>
        {/* <h5>About Us</h5> */}
        <h2>Welcome to traffic park</h2>
        <div className={styles.dividerLine} />
        <div className={styles.videoSection}>
          <img
            src={trafficPoster}
            alt="Traffic Park"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className={styles.aboutUsDetail}>
        <p>
          Children Traffic Park founded on 31 August 2024 is a vibrant space
          dedicated to shaping the future of road safety education.Our park is
          more than just an educational hub – it's an immersive experience
          designed to instill a deep understanding of road safety in the hearts
          and minds of young learners.
        </p>
        <p>
          Our park features realistic signals, interactive exhibits, and
          engaging educational sessions led by experienced traffic policemen. We
          believe in making learning about road safety a memorable adventure for
          every child, laying the foundation for responsible road behavior.
        </p>
        <p>
          Our park also has nursery to increase envrionment awarness. Also we have
          developed a unique concept traffic sansad where students can pledge to
          observe traffic rules. Vadodara city is known for its abundance of
          banyan trees.Our banyan tree based theme helps to preserve and also promote
          the culture and heritage of Vadodara city.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;