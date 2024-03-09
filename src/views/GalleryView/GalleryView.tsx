import React from "react";
import Header from "../HomePageView/components/Header";
import Footer from "../HomePageView/components/Footer";
import styles from "./GalleryView.module.css";

const importAll = (r: any) => {
  return r.keys().map(r);
};

const galleryImages = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

const GalleryView = () => {
  return (
    <>
      <Header />
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeadLine}>
          {" "}
          <h2>OUR PHOTO GALLERY</h2>
        </div>
        {galleryImages.map((img: string) => {
          return (
            <div className={styles.responsive}>
              <div className={styles.gallery}>
                <a target="_blank" href={img} rel="noreferrer">
                  <img src={img} alt="Cinque Terre" width="600" height="400" />
                </a>
              </div>
            </div>
          );
        })}

        <div className={styles.clearfix}></div>
        <div className={styles.videoSection}>
          <div className={styles.galleryHeadLine}>
            {""}
            <h2>OUR VIDEO GALLERY</h2>
          </div>
          <div className={styles.videoContainer}>
            <div className={styles.responsiveVideo}>
              <iframe
                title="aboutus"
                width={"100%"}
                height="350"
                src={"https://www.youtube.com/embed/N2g15ytD3WA"}
              ></iframe>
            </div>
            <div className={styles.responsiveVideo}>
              <iframe
                title="aboutus"
                width={"100%"}
                height="350"
                src={"https://www.youtube.com/embed/N2g15ytD3WA"}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryView;
