import React from 'react';
import 'slick-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Storysection = () => {
  const setting = {
    speed: 5000, // Transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Transition speed in milliseconds
    cssEase: 'linear',
    pauseOnHover: false,
    slidesToShow: 3,
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
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    rtl:true
  };
  return (
    <div>
       <section className="story-section">
      <div className="block-header">
        <h2>#StoryLoop in <span>Action</span>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
      </div>
      <div class="story-slider-top">
      <Slider {...setting}>
      <div className="slick-slide">
      <div class="inner">
        <a href="#"></a>
        <img src="assets/images/story1-img.png" class="slide-image" />
        <span class="slide-text">
          <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story2-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story3-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story1-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story2-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story3-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
      </Slider>
      
      </div>
      <div class="story-slider-bottom">
      <Slider {...setting1}>
      <div className="slick-slide">
      <div class="inner">
        <a href="#"></a>
        <img src="assets/images/story1-img.png" class="slide-image" />
        <span class="slide-text">
          <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story2-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story3-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story1-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story2-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
        <div className="slick-slide">
        <div class="inner">
          <a href="#"></a>
          <img src="assets/images/story3-img.png" class="slide-image" />
          <span class="slide-text">
            <img src="assets/images/church-icon.svg" />Vibrant Church, MS </span>
      </div>
        </div>
      </Slider>
      
      </div>
    </section>
    </div>
  )
}

export default Storysection
