import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Nursery.module.css";

const importAll = (r: any) => {
  return r.keys().map(r);
};

const nurseyImages = importAll(
  require.context("../../../../../images/Nursery", false, /\.(png|jpe?g|svg)$/)
);
const Nursery = () => {
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
      <div className={styles.nurseryContainer}>
        <h3 className={styles.nurseryHeadLine}>Nursery</h3>
        <div className={styles.dividerLine} />
        <div className={styles.nurseryImageContainer}>
          <div className={styles.nurseryImageGallery}>
            <Slider {...settings}>
              {thumbnailImages.map((imgSrc: string) => {
                return (
                  <a href={imgSrc} target="_blank">
                    <img
                      src={imgSrc}
                      className={styles.nurseryImage}
                      alt="Nursery"
                    />
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className={styles.nurseryInfo}>
          <p>
            To increase environmental awarness a nursey is developed along side
            traffic park, which has many different types of plants and species.
            These gives helps the young minds to understand importance of
            nature. Since vadodara is also known as vadnagri,the banyan tree
            theme in our park helps to cultivate importance of banyan tree and
            promote culture and heritage of our city.
          </p>
        </div>
      </div>
      {/* <div className={styles.clearfix}></div> */}
    </>
  );
};

export default Nursery;
