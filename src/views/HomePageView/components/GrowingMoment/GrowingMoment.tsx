import React from "react";
import classNames from "classnames";
import styles from "./GrowingMoment.module.css";

const GrowingMoment = () => {
  return (
    <>
      <div className={styles.growingMoment}>
        <div className={styles.growingMomentSection}>
          <h2>JOIN THE GROWING MOMENT</h2>
          <p>
            Over 1,000+ Children have already experienced the enriching journey
            at traffic park, located in karelibaug police station. Be part
            of the change, schedule your visit now and empower your students
            with the knowledge of road safety.
          </p>
          <button className={styles.visitTrafficParkBtn}>
            Visit Traffic Park
            <i
              className={classNames(
                "fa fa-long-arrow-right",
                styles.arrowRight
              )}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default GrowingMoment;
