import React from "react";
import Slider from "react-slick";
import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialView.module.css";

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

  const onClickReviewBtn = () => {
    window.open(
      "https://www.google.com/search?q=aatapi+wonderland&sca_esv=8b94fdf9c54254b4&rlz=1C1CHZN_enIN966IN966&ei=H3XtZZe9EM7i2roPosG20AU&gs_ssp=eJzj4tVP1zc0zDDKMDIvT841YLRSNagwtjRNSzE3TU4zN00zMbewtDKoMEpNMUxMNkhOtLA0NbOwSPMSTEwsSSzIVCjPz0tJLcpJzEsBAPbuFgg&oq=atapi+wondoerlan&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGF0YXBpIHdvbmRvZXJsYW4qAggAMhMQLhgNGK8BGMcBGLEDGIAEGI4FMgcQABiABBgNMgcQABiABBgNMgoQABiABBgNGLEDMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMiIQLhgNGK8BGMcBGLEDGIAEGI4FGJcFGNwEGN4EGOAE2AEDSKonUABY1x1wAXgBkAEAmAGGAqAB5B2qAQQyLTE2uAEDyAEA-AEBmAIRoALjHqgCEsICFBAAGIAEGOMEGOkEGOoCGLQC2AEBwgIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAsICCxAAGIAEGIoFGJECwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiDARixAxiABBiKBcICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYsQMYgwHCAggQLhiABBixA8ICBRAuGIAEwgIQEC4YgAQYigUYQxjHARivAcICEBAuGIAEGIoFGEMYxwEY0QPCAgoQLhiABBiKBRhDwgIREC4YgAQYsQMYxwEYrwEYjgXCAg0QABiABBiKBRhDGLEDwgILEC4YgAQYigUYsQPCAh8QLhiABBiKBRhDGMcBGK8BGJcFGNwEGN4EGOAE2AEDwgIXEC4YrwEYxwEYkQIYsQMYgAQYigUYjgXCAggQLhixAxiABMICDhAAGIAEGIoFGJECGLEDwgIOEC4YgAQYsQMYxwEYrwHCAhMQLhiABBiKBRhDGLEDGIMBGNQCwgImEC4YrwEYxwEYkQIYsQMYgAQYigUYjgUYlwUY3AQY3gQY4ATYAQPCAhMQLhhDGK8BGMcBGIAEGIoFGI4FwgIKEAAYgAQYigUYQ8ICBRAAGIAEwgIHEAAYgAQYCsICChAAGIAEGAoYsQPCAiIQLhhDGK8BGMcBGIAEGIoFGI4FGJcFGNwEGN4EGOAE2AEDwgIREC4YrwEYxwEYkgMYgAQYjgXCAggQABiABBjJA8ICCxAAGIAEGIoFGJIDwgIgEC4YrwEYxwEYkgMYgAQYjgUYlwUY3AQY3gQY4ATYAQPCAg4QLhivARjHARjJAxiABMICHRAuGK8BGMcBGMkDGIAEGJcFGNwEGN4EGOAE2AEDwgIaEC4YrwEYxwEYkQIYsQMYyQMYgAQYigUYjgXCAikQLhivARjHARiRAhixAxjJAxiABBiKBRiOBRiXBRjcBBjeBBjgBNgBA8ICEhAuGA0YrwEYxwEYgAQYjgUYCsICCRAAGIAEGA0YCsICIRAuGA0YrwEYxwEYgAQYjgUYChiXBRjcBBjeBBjgBNgBA5gDB7oGBAgBGAe6BgYIAhABGAq6BgYIAxABGBSSBwYxLjAuMTagB7nFAQ&sclient=gws-wiz-serp#lrd=0x395fd75cf75f4789:0x2ed1ac0ca895688f,3,,,,",
      "_blank",
      // "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    );
  };
  return (
    <>
      <Header />
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
                recommend Traffic Park to schools looking for a comprehensive
                and engaging road safety program.
              </p>
              <p className={styles.circle}>
                <span>ST</span>
              </p>
              <p>Mr.Shrikar Tare</p>
              <p>Principal at New Era School</p>
            </div>
            <div className={styles.feedbackInfo}>
              <p>
                Traffic Park is a game-changer for kids' road safety education.
                My daughter attended a session and came home not only with a
                better understanding of traffic rules but also with a sparkle in
                her eyes. Kudos to the dedicated team for making learning so
                enjoyable!
              </p>
              <p className={styles.circle}>
                {/* <img></img> */}
                <span>AP</span>
              </p>
              <p>Mr.Akash Parikh</p>
              <p>Principal at Navrachna School</p>
            </div>
            <div className={styles.feedbackInfo}>
              <p>
                Traffic Park is awesome facility and policemen teach children
                patiently and answer to their queires and takes quizes at the
                end.
              </p>
              <p className={styles.circle}>
                {/* <img></img> */}
                <span>AP</span>
              </p>
              <p>Mr.John Doe</p>
              <p>Teacher at Baroda High School</p>
            </div>
          </Slider>
        </div>

        <button
          className={styles.writetestimonialBtn}
          onClick={onClickReviewBtn}
        >
          Write a review
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
