import React from "react";
import styles from "./InfoSection.module.css";
import TrafficParkInfo from "./TrafficParkInfo";
import Nursery from "./Nursery";
import TrafficSansad from "./TrafficSansad";

const Testimonials = () => {
  return (
    <>
      <TrafficParkInfo />
      <div className={styles.infoWrapper}>
        <Nursery />
        <TrafficSansad />
      </div>
    </>
  );
};

export default Testimonials;
