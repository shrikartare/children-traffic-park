import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TrafficSansad.module.css";

const importAll = (r: any) => {
  return r.keys().map(r);
};

const nurseyImages = importAll(
  require.context(
    "../../../../../images/TrafficSansad",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const TrafficSansad = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };
  const thumbnailImages = nurseyImages.slice(0, 10);
  return (
    <>
      <div className={styles.sansadContainer}>
        <h3 className={styles.sansadHeadLine}>Traffic Sansad</h3>
        <div className={styles.dividerLine} />
        <div className={styles.sansadImageContainer}>
          <div className={styles.sansadImageGallery}>
            <Slider {...settings}>
              {thumbnailImages.map((imgSrc: string) => {
                return (
                  <a href={imgSrc}    target="_blank">
                    <img
                      src={imgSrc}
                      className={styles.sansadImage}
                      alt="Sansad"
                    />
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className={styles.sansadInfo}>
          <p>
            Traffic Sansad is a place inside traffic park where students take pledge to observe and follow
            traffic rules. After learning all the road safety rules from traffic
            policemen, students take pledge to observe and follow traffic rules.
            These helps them lay a good foundation for responsible road behaviour.
          </p>
        </div>
      </div>
      <div className={styles.clearfix}></div>
    </>
  );
};

export default TrafficSansad;
