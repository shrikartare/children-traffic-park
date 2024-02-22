import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImageCarousel.module.css';

const  ImageCarousel = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
    return (
        <>
         <div className={styles.sliderContainer}>
          <Slider {...settings}>
            <div>
              <img alt="img1"  src={"https://alkapuri.barodahighschool.com/pri-morning/wp-content/uploads/sites/2/2023/11/BHS_11zon-scaled-e1699524472286.jpg"}/>
            </div>
            <div>
            <img alt="img2"  src={"https://alkapuri.barodahighschool.com/pri-morning/wp-content/uploads/sites/2/2023/01/image-4_11zon-scaled.jpg"}/>
            </div>
          </Slider>
        </div>
        </>
    )
}

export default ImageCarousel

