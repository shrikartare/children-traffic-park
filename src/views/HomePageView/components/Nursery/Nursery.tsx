import React from "react";
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
      </div>
      <div className={styles.nurseryInfo}>
        <p>
          To increase environmental awarness a nursey is developed, which has
          many different types of plants and gives deep understanding to young
          minds to understand importance of nature. Since vadodara is also known
          as vadnagri,the banyan tree theme in our park helps to cultivate
          importance of banyan tree and promote culture and heritage of our
          city. Nurseries promote environmental awareness and sustainability by
          offering native and climate-appropriate plant species that support
          local ecosystems and reduce water consumption.
        </p>
      </div>
    </>
  );
};

export default Nursery;
