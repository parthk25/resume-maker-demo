import React from 'react'
import Slider from "react-slick";
import img1 from '../img/content.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {
//   Link
// } from "react-router-dom";

const Templates = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <h2 className='text-center mt-5'>Select Templates:</h2>
      <div className='text-center mt-5 mb-4 ps-5 pe-5'>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img1} alt="" />

          </div>
          <div>
            <img src={img1} alt="" />

          </div>
          <div>
            <img src={img1} alt="" />

          </div>
          <div>
            <img src={img1} alt="" />

          </div>
          <div>
            <img src={img1} alt="" />

          </div>

        </Slider>
      </div>
      <div className='btemp'>
      </div>
    </>
  )
}

export default Templates
