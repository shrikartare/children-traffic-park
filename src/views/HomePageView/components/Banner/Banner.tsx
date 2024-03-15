import React from "react";

import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from "../../../../images/1708930666951.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();

  const BannerInfo = (
    <div className={styles.bannerInfo}>
      <div className={styles.bannerHeader}>
        Welcome to children traffic park ! <br />
        Journey into road safety
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
