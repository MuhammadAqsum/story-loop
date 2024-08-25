import React from 'react';
import 'slick-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const FreshContent = () => {
  const setting = {
    speed: 15000, // Transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Transition speed in milliseconds
    cssEase: 'linear',
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    ltr:true
  };
  return (
    <div>
       <section class="explore-section">
      <div className="block-header">
        <h2>
          <span>Fresh Content.</span> Every Week.
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <a href="#" class="primary-btn">Explore</a>
      </div>
      <div class="weak-slider">
      <Slider {...setting}>
      <div className="slick-slide">
      <div className="inner">
            <a href="#"></a>
            <img src="assets/images/slide2-img.jpg"  alt='image1'/>
          </div>
        </div>
        <div className="slick-slide">
      <div className="inner">
            <a href="#"></a>
            <img src="assets/images/slide2-img.jpg"   alt='image1' />
          </div>
        </div>
        <div className="slick-slide">
        <div className="inner">
            <a href="#"></a>
            <img src="assets/images/slide3-img.jpeg"  alt='image1'/>
          </div>
        </div>
        <div className="slick-slide">
      <div className="inner">
            <a href="#"></a>
            <img src="assets/images/slide4-img.jpeg"   alt='image1'/>
          </div>
        </div>
        <div className="slick-slide">
        <div className="inner">
            <a href="#"></a>
            <img src="assets/images/slide5-img.jpeg"   alt='image1'/>
          </div>
        </div>
        <div className="slick-slide">
      <div className="inner">
            <a href="#"></a>
            <img src="assets/images/slide1-img.jpeg"  alt='image1'/>
          </div>
        </div>
      </Slider>
      
      </div>
    </section>
    </div>
  )
}

export default FreshContent;
