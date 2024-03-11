import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./Gallery.module.css";

const importAll = (r: any) => {
  return r.keys().map(r);
};

const galleryImages = importAll(
  require.context(
    "../../../../images/GalleryThumbnail",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Gallery = () => {
  const navigate = useNavigate();
  const thumbnailImages = galleryImages.slice(0, 4);
  return (
    <div className={styles.galleryContainer}>
      <h2>OUR GALLERY</h2>
      <div className={styles.dividerLine} />
      {thumbnailImages.map((img: string) => {
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

      <button
        className={styles.viewMoreBtn}
        onClick={() => navigate("/gallery")}
      >
        View More
        <i
          className={classNames("fa fa-long-arrow-right", styles.arrowRight)}
        ></i>
      </button>
    </div>
  );
};

export default Gallery;
