import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import 'slick-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Storysection = () => {
  const setting = {
    speed: 18000, // Transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Transition speed in milliseconds
    cssEase: 'linear',
    pauseOnHover: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    ltr:true
  };
  const setting1 = {
    speed: 18000, // Transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Transition speed in milliseconds
    cssEase: 'linear',
    pauseOnHover: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    rtl:true
  };
  const { data, loading, error } = useContext(DataContext);
    
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const actionSec = data?.action_sec || {}; 
  const images1 = actionSec.action_sec_crsl1|| {}; 
  const images2 = actionSec.action_sec_crsl2|| {}; 
  return (
    <div>
       <section className="story-section">
      <div className="block-header">
        <h2 dangerouslySetInnerHTML={{ __html: actionSec.action_sec_title }}></h2>
        <p> {actionSec.ction_sec_desc} </p>
      </div>
      <div class="story-slider-top">
      <Slider {...setting}>
      {images1.map((item, index) => (
      <div className="slick-slide" key={index}>
      <div class="inner">
        <a href="#"></a>
        <img src={item.img} class="slide-image" />
        <span class="slide-text">
          <img src="assets/images/church-icon.svg" />{item.label} </span>
      </div>
        </div>
           ))}
      </Slider>
      
      </div>
      <div class="story-slider-bottom">
      <Slider {...setting1}>
      {images2.map((item, index) => (
      <div className="slick-slide" key={index}>
      <div class="inner">
        <a href="#"></a>
        <img src={item.img} class="slide-image" />
        <span class="slide-text">
          <img src="assets/images/church-icon.svg" />{item.label} </span>
      </div>
        </div>
           ))}
 
  
      </Slider>
      
      </div>
    </section>
    </div>
  )
}

export default Storysection
