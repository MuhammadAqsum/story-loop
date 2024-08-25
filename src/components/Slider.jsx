import React, { useEffect } from 'react';
import 'slick-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slidercomponent = () => {
  const setting = {
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1, // Set initialSlide to 0 to start from the left edge
    arrows: false,
    buttons: false,
    vertical: true, // Enable vertical scrolling
    verticalSwiping: true
  };
  const setting1 = {
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1, // Set initialSlide to 0 to start from the left edge
    arrows: false,
    buttons: false,
    vertical: true, // Enable vertical scrolling
    verticalSwiping: true,
    rtl:true
  };
  const setting2 = {
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000, // Adjusted for better timing
    cssEase: 'linear',
    pauseOnHover: false,
    slidesToShow: 8, // Show 5 slides at once
    slidesToScroll: 1,
    infinite: true, // Loop through the slides
    arrows: false, // Hide arrows if not needed
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    rtl: false // Adjust as needed for right-to-left layout
  };
  return (
    <>
    <div>
          <section className="hero-section">
      <div className="container-fluid">
        <div className="row">
          <div className="hero-left-col">
            <div className="hero-content">
              <h1>Empowering <br/> Ministries To Change 
                <span>Live</span>
              </h1>
              <p>A curated library of worship backgrounds, short films & more.</p>
              <div className="hero_btn">
                <a href="" class="primary-btn">View Products</a>
              </div>
              <ul>
                <li>New Content Every Week</li>
                <li>40K+ Users</li>
                <li>High Quality Content</li>
              </ul>
            </div>
          </div>
          <div className="hero-right-col">
            <div className="hero-grid">
              <div className="grid-column scroll-up">
                <Slider {...setting}>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="./assets/images/grid-image.jpg" alt="Image 1"/>
                  </div>
                </div>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="./assets/images/grid-image.jpg" alt="Image 2"/>
                  </div>
                </div>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="./assets/images/grid-image2.jpeg" alt="Image 3"/>
                  </div>
                </div>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="./assets/images/grid-image.jpg" alt="Image 2"/>
                  </div>
                </div>
                </Slider>
              </div>
              <div className="grid-column scroll-down">
                <Slider {...setting1}> 
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="assets/images/grid-image4.jpeg" alt="Image 1"/>
                  </div>
                </div>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="assets/images/grid-image5.jpeg" alt="Image 2"/>
                  </div>
                </div>
                <div class="image-wrapper">
                  <div class="image-wrapper-inner">
                    <img src="assets/images/grid-image7.jpg" alt="Image 2"/>
                  </div>
                </div>
                <div class="image-wrapper">
                  <div class="image-wrapper-inner">
                    <img src="assets/images/grid-image6.jpeg" alt="Image 3"/>
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partners-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="partners-content">
          <h6>Join over 48,000 <br/> churches </h6>
        </div>
      </div>
      <div class="col-10">
        <div class="partners-slider-wrapper">
        <div class="slider partners-slider">
        <Slider {...setting2}>
                              <div className="item">
                                <img src="assets/images/partners-1.png" alt="Partner 1" />
                              </div>
                              <div className="item">
                                <img src="assets/images/partners-2.png" alt="Partner 2" />
                              </div>
                              <div className="item">
                                <img src="assets/images/partners-3.png" alt="Partner 3" />
                              </div>
                              <div className="item">
                                <img src="assets/images/partners-4.png" alt="Partner 4" />
                              </div>
                              <div className="item">
                                <img src="assets/images/partners-5.png" alt="Partner 5" />
                              </div>
                              <div className="item">
                                <img src="assets/images/partners-6.png" alt="Partner 6" />
                              </div>
                              <div className="item">
                                <img src="assets/images/partners-6.png" alt="Partner 6" />
                              </div>
                              <div className="item">
                                <img src="assets/images/partners-6.png" alt="Partner 6" />
                              </div>
                            </Slider>
                            </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </>
  )
}
export default Slidercomponent;