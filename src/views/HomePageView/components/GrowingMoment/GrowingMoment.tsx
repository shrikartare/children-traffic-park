import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./GrowingMoment.module.css";

const GrowingMoment = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.growingMoment}>
        <div className={styles.growingMomentSection}>
          <h2>JOIN THE GROWING MOMENT</h2>
          <p>
            Over 1,000+ children have already experienced the enriching journey
            at traffic park, located in karelibaug. Be part of the change,
            schedule your visit now and empower your students with the knowledge
            of road safety.
          </p>
          <button
            className={styles.visitTrafficParkBtn}
            onClick={() => navigate("/contactus")}
          >
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