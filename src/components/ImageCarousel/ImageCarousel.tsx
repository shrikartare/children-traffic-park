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
              <img alt="img1"  src={require('../../images/img01.jpeg')}/>
            </div>
            <div>
            <img alt="img2"  src={require("../../images/img02.jpeg")  }/>
            </div>
          </Slider>
        </div>
        </>
    )
}

export default ImageCarousel

