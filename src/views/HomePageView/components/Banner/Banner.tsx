import React from "react";

import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./Banner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand" as any,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };
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
    <Slider {...settings}>
      <div className={classNames(styles.bannerImg, styles.bannerImg1)}>
        {BannerInfo}
      </div>
      <div className={classNames(styles.bannerImg, styles.bannerImg2)}>
        {BannerInfo}
      </div>
      <div className={classNames(styles.bannerImg, styles.bannerImg3)}>
        {BannerInfo}
      </div>
    </Slider>
  );
};

export default Banner;
