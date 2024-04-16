import React from "react";
import styles from "./InfoSection.module.scss";
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
