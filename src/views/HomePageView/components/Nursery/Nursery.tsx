import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nursery.module.css";

const importAll = (r: any) => {
  return r.keys().map(r);
};

const nurseyImages = importAll(
  require.context("../../../../images/Nursery", false, /\.(png|jpe?g|svg)$/)
);
const Nursery = () => {
  const thumbnailImages = nurseyImages.slice(0, 4);
  return (
    <>
      <h2 className={styles.nurseryHeadLine}>Nursery</h2>
      <div className={styles.dividerLine} />
      <div className={styles.nurseryImageContainer}>
        {thumbnailImages.map((img: string) => {
          return (
            <div className={styles.imageWrapper}>
              <a target="_blank" href={img} rel="noreferrer">
                <img
                  className={styles.nurseryImage}
                  src={img}
                  alt={"nursery"}
                />
              </a>
            </div>
          );
        })}
        {/* {thumbnailImages.map((img: string) => {
          return <img className={styles.nurseryIMage} src={img} alt={"nursey1"} />;
        })} */}
      </div>
      <div className={styles.nurseryInfo}>
        <p>
          To make people aware about nature and trees and also to increase
          awarness about banyan trees in Vadodara city also known as Vadnagri,
          we have also developed a nursery which showcases 22 types of plants.
        </p>
      </div>
    </>
  );
};

export default Nursery;
