import React from "react";

import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();

  const BannerInfo = (
    <div className={styles.bannerInfo}>
      <div className={styles.bannerHeader}>
        Welcome to <span>children traffic park !</span> <br />
        Journey into traffic safety and rules.
      </div>
      <span>
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
    <div className={styles.bannerImg1}>{BannerInfo}</div>
    // <div className={styles.bannerImg2}>{BannerInfo}</div>
    // </Slider>
  );
};

export default Banner;
