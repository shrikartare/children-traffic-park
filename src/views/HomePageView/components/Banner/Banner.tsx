import React from "react";

import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();

  const BannerInfo = (
    <div className={styles.bannerInfo}>
      <div className={styles.bannerHeader}>
        Welcome to <span>children traffic park !</span> <br />
        Journey to road safety
      </div>
      <span className={styles.bannerSubtext}>
        <br />
        Transformative traffic learnings for children, shaping responsible road
        users
      </span>

      <button
        className={styles.exploreMoreBtn}
        onClick={() => navigate("/aboutus")}
      >
        Learn More
        <i
          className={classNames("fa fa-long-arrow-right", styles.arrowRight)}
        ></i>
      </button>
    </div>
  );
  return (
    // <Slider {...settings}>
    <div className={styles.bannerImg1}>
      {/* <img
        className={styles.bannerImage1}
        src={bannerImg}
        alt={"banner image"}
      /> */}
      {BannerInfo}
    </div>
    // <div className={styles.bannerImg2}>{BannerInfo}</div>
    // </Slider>
  );
};

export default Banner;
