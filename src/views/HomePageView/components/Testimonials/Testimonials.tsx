import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
        },
      },
    ],
  };
  return (
    <div className={styles.feedbackSection}>
      <h2>Testimonials</h2>
      <div className={styles.dividerLine} />
      <h3>What our clients Say</h3>
      <div className={styles.feedbackContainer}>
        <Slider {...settings}>
          <div className={styles.feedbackInfo}>
            <p>
              Traffic Park has set a benchmark in road safety education. The
              informative sessions were not just educational but also fun,
              making it a memorable experience for my students. I highly
              recommend Traffic Park to schools looking for a comprehensive and
              engaging road safety program.
            </p>
            <p className={styles.circle}>
              <span>ST</span>
            </p>
            <p>Mr.Shrikar Tare</p>
            <p>Principal at New Era School</p>
          </div>
          <div className={styles.feedbackInfo}>
            <p>
              Traffic Park is a game-changer for kids' road safety education. My
              daughter attended a session and came home not only with a better
              understanding of traffic rules but also with a sparkle in her
              eyes. Kudos to the dedicated team for making learning so
              enjoyable!
            </p>
            <p className={styles.circle}>
              <span>AP</span>
            </p>
            <p>Mr.Akash Parikh</p>
            <p>Principal at Navrachna School</p>
          </div>
          <div className={styles.feedbackInfo}>
            <p>
              Traffic Park is awesome facility and policemen teach children
              patiently and answer to their queires and takes quizes at the end.
            </p>
            <p className={styles.circle}>
              <span>AP</span>
            </p>
            <p>Mr.John Doe</p>
            <p>Teacher at Baroda High School</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
