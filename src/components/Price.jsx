import React, { useRef } from "react";
import 'slick-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Price = () => {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
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
      const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
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
    <div>
      <section class="hero-section pricing-banner">
  <div class="container-fluid">
    <div class="row">
      <div class="hero-left-col">
        <div class="hero-content">
          <h1>Summer <span>Sale</span>
          </h1>
          <p>For a limited time, save $60 on a subscription. Use coupon code SUNNY60 at checkout. Applies for the life of your subscription.</p>
          <div class="hero_btn">
            <a href="" class="primary-btn">Subscribe Now</a>
          </div>
          <ul>
            <li>4K Content</li>
            <li>Unlimited Downloads </li>
            <li>Lifetime Use</li>
          </ul>
        </div>
      </div>
      <div class="hero-right-col">
        <div class="image-wrap">
          <img src="assets/images/price-banner.jpg"/>
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
<section class="rich-text-section">
  <div class="container">
    <h2>
      <span> Less Time Scrolling.</span> More Time for <br /> Your Calling.
    </h2>
    <p>Get full access to a curated Library of worship backgrounds & more!</p>
  </div>
</section>
<section class="worship-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="image-column">
          <img src="assets/images/curated-library3.jpeg" alt=""/>
          <div class="caption-text">
            <p>*Subscriptions start as a one year commitment that's billed monthly. After the first year, it's a month-to-month commitment.</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="content-column">
          <h2>Subscribe <span>Now! </span>
          </h2>
          <p>Available on-demand or subscribe to get instant access to thousands of resources for one low monthly price.</p>
          <ul>
            <li>Unlimited Access to Entire Libraries</li>
            <li>Unlimited Downloads</li>
            <li>Weekly Releases</li>
            <li>Ultrawides</li>
            <li>All Media Types</li>
            <li>Access to Facebook Members Group</li>
            <li>All Languages</li>
            <li>Lifetime Use </li>
            <li>4K Content</li>
            <li>Pro Video Formats</li>
          </ul>
          <a href="#" class="primary-btn">Subscribe Now </a>
        </div>
      </div>
    </div>
  </div>
</section>

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

<section class="review-section">
  <div class="container-fluid">
    <div class="review-header">
      <h2>Reviews from Story Loop <span>Users</span>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
    </div>
    <div class="review-slider">
    <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
      <div class="item" key={1}>
        <div class="reivew-item">
          <div class="ratings">
            <div class="rating-stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
            </div>
            <span> 24 Dec 2024 </span>
          </div>
          <div class="review-content">
            <h4>Elevating Church Visuals!</h4>
            <p>Story Loop has the most visually stunning content for churches anywhere. Their library of worship packs, short films, and dedicated content for church online are a must-have. </p>
          </div>
          <div class="author-col">
            <figure>
              <img src="assets/images/andrew-farmer.jpeg" alt=""/>
            </figure>
            <div class="author-details">
              <h6>Andrew Farmer</h6>
              <p>Connection Point Church</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item" key={2}>
        <div class="reivew-item">
          <div class="ratings">
            <div class="rating-stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
            </div>
            <span> 24 Dec 2024 </span>
          </div>
          <div class="review-content">
            <h4>Elevating Church Visuals!</h4>
            <p>Story Loop has the most visually stunning content for churches anywhere. Their library of worship packs, short films, and dedicated content for church online are a must-have. </p>
          </div>
          <div class="author-col">
            <figure>
              <img src="assets/images/andrew-farmer.jpeg" alt=""/>
            </figure>
            <div class="author-details">
              <h6>Andrew Farmer</h6>
              <p>Connection Point Church</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item" key={3}>
        <div class="reivew-item">
          <div class="ratings">
            <div class="rating-stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
            </div>
            <span> 24 Dec 2024 </span>
          </div>
          <div class="review-content">
            <h4>Elevating Church Visuals!</h4>
            <p>Story Loop has the most visually stunning content for churches anywhere. Their library of worship packs, short films, and dedicated content for church online are a must-have. </p>
           </div>
          <div class="author-col">
            <figure>
              <img src="assets/images/andrew-farmer.jpeg" alt=""/>
            </figure>
            <div class="author-details">
              <h6>Andrew Farmer</h6>
              <p>Connection Point Church</p>
            </div>
          </div>
        </div>
      </div>
       <div class="item" key={4}>
        <div class="reivew-item">
          <div class="ratings">
            <div class="rating-stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
            </div>
            <span> 24 Dec 2024 </span>
          </div>
          <div class="review-content">
            <h4>Elevating Church Visuals!</h4>
            <p>Story Loop has the most visually stunning content for churches anywhere. Their library of worship packs, short films, and dedicated content for church online are a must-have. </p>
           </div>
          <div class="author-col">
            <figure>
              <img src="assets/images/andrew-farmer.jpeg" alt=""/>
            </figure>
            <div class="author-details">
              <h6>Andrew Farmer</h6>
              <p>Connection Point Church</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item" key={5}>
        <div class="reivew-item">
          <div class="ratings">
            <div class="rating-stars">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.08763 25.6367C6.70961 25.8658 6.24203 25.5277 6.3412 25.0969L8.09389 17.4837C8.1353 17.3038 8.07423 17.1157 7.93505 16.9945L2.05422 11.8716C1.72164 11.5818 1.89979 11.0348 2.3392 10.9964L10.1065 10.319C10.2913 10.3029 10.452 10.1857 10.5239 10.0147L13.5394 2.84571C13.7111 2.43753 14.2895 2.43753 14.4612 2.84571L17.4767 10.0147C17.5486 10.1857 17.7093 10.3029 17.8942 10.319L25.6615 10.9964C26.1009 11.0348 26.279 11.5818 25.9464 11.8716L20.0656 16.9945C19.9264 17.1157 19.8654 17.3038 19.9068 17.4837L21.6595 25.0969C21.7586 25.5277 21.291 25.8658 20.913 25.6367L14.2595 21.6038C14.1002 21.5072 13.9004 21.5072 13.7412 21.6038L7.08763 25.6367Z" fill="#EB7F5E" />
              </svg>
            </div>
            <span> 24 Dec 2024 </span>
          </div>
          <div class="review-content">
            <h4>Elevating Church Visuals!</h4>
            <p>Story Loop has the most visually stunning content for churches anywhere. Their library of worship packs, short films, and dedicated content for church online are a must-have. </p>
          </div>
          <div class="author-col">
            <figure>
              <img src="assets/images/andrew-farmer.jpeg" alt=""/>
            </figure>
            <div class="author-details">
              <h6>Andrew Farmer</h6>
              <p>Connection Point Church</p>
            </div>
          </div>
        </div>
      </div>
      </Slider>
    </div>
    <div class="slider-arrows">
      <button class="prev-btn" onClick={previous}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" stroke="#181818" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button class="next-btn" onClick={next}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" stroke="#181818" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</section>
<section class="faq-section">
  <div class="review-header">
    <h2>Frequently Asked <span>Questions</span>
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
  </div>
  <div class="faq-wrapper">
    <div class="faq-item active">
      <button class="faq-header">
        <h6>What forms of payment do you accept?</h6>
        <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clip-path="url(#clip0_1816_30916)">
            <path opacity="0.12" d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77487 31.0752 6.92394 29.5513 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.00693258 12.8007 1.21793 9.87706C2.42894 6.95345 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16Z" fill="#EB7F5E" />
            <path class="m-dash" d="M16 10.5586V21.4475" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5552 16H21.4441" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1816_30916">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div class="faq-content">
        <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-header">
        <h6>Will I be charged sales tax?</h6>
        <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clip-path="url(#clip0_1816_30916)">
            <path opacity="0.12" d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77487 31.0752 6.92394 29.5513 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.00693258 12.8007 1.21793 9.87706C2.42894 6.95345 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16Z" fill="#EB7F5E" />
            <path class="m-dash" d="M16 10.5586V21.4475" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5552 16H21.4441" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1816_30916">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div class="faq-content">
        <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-header">
        <h6>What is your refund policy?</h6>
        <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clip-path="url(#clip0_1816_30916)">
            <path opacity="0.12" d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77487 31.0752 6.92394 29.5513 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.00693258 12.8007 1.21793 9.87706C2.42894 6.95345 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16Z" fill="#EB7F5E" />
            <path class="m-dash" d="M16 10.5586V21.4475" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5552 16H21.4441" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1816_30916">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div class="faq-content">
        <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-header">
        <h6>What is your refund policy?</h6>
        <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clip-path="url(#clip0_1816_30916)">
            <path opacity="0.12" d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77487 31.0752 6.92394 29.5513 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.00693258 12.8007 1.21793 9.87706C2.42894 6.95345 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16Z" fill="#EB7F5E" />
            <path class="m-dash" d="M16 10.5586V21.4475" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5552 16H21.4441" stroke="#EB7F5E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1816_30916">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div class="faq-content">
        <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Price
