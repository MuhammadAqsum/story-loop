// HeroSection.js
import React from 'react';

const Herosection = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row">
          <div className="hero-left-col">
            <div className="hero-content">
              <h1>Empowering <br /> Ministries To Change <br />
                <span>Live</span>
              </h1>
              <p>A curated library of worship backgrounds, short films & more.</p>
              <div className="hero_btn">
                <a href="#" className="primary-btn">View Products</a>
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
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="assets/images/grid-image3.jpeg" alt="Image 1"/>
                  </div>
                </div>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="assets/images/grid-image.jpg" alt="Image 2"/>
                  </div>
                </div>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="assets/images/grid-image2.jpeg" alt="Image 3"/>
                  </div>
                </div>
                <div className="image-wrapper">
                  <div className="image-wrapper-inner">
                    <img src="assetsimages/grid-image.jpg" alt="Image 2"/>
                  </div>
                </div>
              </div>
              <div className="grid-column scroll-down">
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
              </div>
          </div>
        </div>
        </div>
       </div>   
    </section>
    
  );
};

export default Herosection;
