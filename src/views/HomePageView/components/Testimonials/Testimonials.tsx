import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  return (
    <div className={styles.feedbackSection}>
      <h2>Testimonials</h2>
      <div className={styles.dividerLine} />
      <div className={styles.feedbackContainer}>
        <Slider {...settings}>
          <div className={styles.feedbackInfo}>
            <p className={styles.feedbackText}>
              On behalf of our team (Demo Public School), I wanted to express
              deepest appreciation for your valuable contribution. Your
              interactive sessions with the students have made learning about
              traffic rules fun and memorable. We encourage everyone to take
              advantage of this opportunity to learn more about road safety.
              Keep up your great work!
            </p>

            <div className={styles.bottomArrow}></div>
            <div className={styles.reviewerName}>
              Priya Sharma (Demo Public School)
            </div>
          </div>
          <div className={styles.feedbackInfo}>
            <p className={styles.feedbackText}>
              I couldn't be happier with the experience at Traffic Park. The
              interactive sessions and hands-on activities kept my students
              engaged and excited about learning road safety.
            </p>
            <div className={styles.bottomArrow}></div>
            <div className={styles.reviewerName}>
              Amit Patel - Teacher (Sample Primary School)
            </div>
          </div>
          <div className={styles.feedbackInfo}>
            <p className={styles.feedbackText}>
              Traffic Park is a game-changer for kids' road safety education. My
              daughter attended a session and came home not only with a better
              understanding of traffic rules but also with a sparkle in her
              eyes. Kudos to the dedicated team for making learning so
              enjoyable!
            </p>
            <div className={styles.bottomArrow}></div>
            <div className={styles.reviewerName}>
              Neha Desai - Parent (Demo Academy)
            </div>
          </div>
          <div className={styles.feedbackInfo}>
            <p className={styles.feedbackText}>
              Traffic Park has set a benchmark in road safety education. The
              informative sessions were not just educational but also fun,
              making it a memorable experience for my students. I highly
              recommend Traffic Park to schools looking for a comprehensive and
              engaging road safety program.
            </p>

            <div className={styles.bottomArrow}></div>
            <div className={styles.reviewerName}>
              Kavita Mehta - Teacher (Sample Girls School)
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
