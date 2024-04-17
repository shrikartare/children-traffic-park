import React from "react";
import Slider from "react-slick";
import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialView.module.scss";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

  const onClickReviewBtn = () => {
    window.open(
      "https://www.google.com/search?q=children+traffic+park+karelibaug&rlz=1C1CHZN_enIN966IN966&oq=children+traffic+pa&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGEAyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzNTc0ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x395fcf2bfb196ffb:0xb0b985f264774aa1,3,,,,",
      "_blank"
    );
  };
  return (
    <>
      <Header />
      <div className={styles.feedbackSection}>
        <div className={styles.feedbackHeadLine}>
          <h2>Testimonials</h2>
        </div>
        <div className={styles.feedbackContainer}>
          <Slider {...settings}>
            <div className={styles.feedbackInfo}>
              <p className={styles.feedbackText}>
                I couldn't be happier with the experience at Traffic Park. The
                interactive sessions and hands-on activities kept my students
                engaged and excited about learning road safety.
              </p>
              <div className={styles.bottomArrow}></div>
              <div className={styles.reviewerName}>
                Masuuri Shubana - Teacher (The M.E.S Primary School)
              </div>
            </div>
            <div className={styles.feedbackInfo}>
              <p className={styles.feedbackText}>
                Traffic Park has set a benchmark in road safety education. The
                informative sessions were not just educational but also fun,
                making it a memorable experience for my students. I highly
                recommend Traffic Park to schools looking for engaging road safety program.
              </p>
              <div className={styles.bottomArrow}></div>
              <div className={styles.reviewerName}>
                Bhavnaben Vyas - Teacher (New Era Girls School)
              </div>
            </div>
            <div className={styles.feedbackInfo}>
              <p className={styles.feedbackText}>
                Traffic Park is a game-changer for kids' road safety education.
                My daughter attended a session and came home not only with a
                better understanding of traffic rules but also with a sparkle in
                her eyes. Kudos to the dedicated team for making learning so
                enjoyable!
              </p>

              <div className={styles.bottomArrow}></div>
              <div className={styles.reviewerName}>
                Rajendra Makhwana - Teacher (Vinay Vidhayala)
              </div>
            </div>
          </Slider>
        </div>

        <button
          className={styles.writetestimonialBtn}
          onClick={onClickReviewBtn}
        >
          Share your feedback
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
