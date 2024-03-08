import React from "react";
import classNames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Banner.module.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const BannerInfo = (
    <div className={styles.bannerInfo}>
      <div className={styles.bannerHeader}>
        Welcome to <span>traffic park !</span> <br />
        Journey into safety
      </div>
      <span>
        <br />
        Transformative road learnings for citizens, shaping responsible road
        users
      </span>

      <button className={styles.exploreMoreBtn}>
        Learn More
        <i
          className={classNames("fa fa-long-arrow-right", styles.arrowRight)}
        ></i>
      </button>
    </div>
  );
  return (
    <Slider {...settings}>
      <div className={styles.bannerImg1}>{BannerInfo}</div>
      <div className={styles.bannerImg2}>{BannerInfo}</div>
    </Slider>
  );
};

export default Banner;
