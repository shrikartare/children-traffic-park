import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ParkInfo.module.css";

const importAll = (r: any) => {
  return r.keys().map(r);
};

const nurseyImages = importAll(
  require.context("../../../../../images/ParkInfo", false, /\.(png|jpe?g|svg)$/)
);
const ParkInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  const thumbnailImages = nurseyImages.slice(0, 4);
  return (
    <>
      <div className={styles.parkinfoContainer}>
        {/* <h3 className={styles.parkinfoHeadLine}>ParkInfo</h3> */}
        {/* <div className={styles.dividerLine} /> */}
        <div className={styles.parkinfoInfo}>
          <br/>
          <p>
            Our interactive exhibits, signals and paintings help children better
            understand traffic rules. We have many number of traffic signs and
            symbols ranging from traffic signals , informative and cautionary
            traffic signs.
          </p>
          <br />
          <p>
            The symbols also include navigation of routes, highways , speed
            regulation. Understanding these symbols will help to regulate
            traffic and in reducing the potential risk of accidents.Gaining
            knowledge on these will result in prevention of road offences and
            increase road discipline.
          </p>
        </div>
        <div className={styles.parkinfoImageContainer}>
          <div className={styles.parkinfoImageGallery}>
            <Slider {...settings}>
              {thumbnailImages.map((imgSrc: string) => {
                return (
                  <div className={styles.parkInfoimageWrapper}>
                    <a href={imgSrc} target="_blank">
                      <img
                        src={imgSrc}
                        className={styles.parkinfoImage}
                        alt="ParkInfo"
                      />
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className={styles.clearfix}></div>
      </div>
      {/* <div className={styles.clearfix}></div> */}
    </>
  );
};

export default ParkInfo;
