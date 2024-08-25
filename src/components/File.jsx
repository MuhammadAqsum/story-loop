import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const File = () => {
    let sliderRef = useRef(null);
    let slider1Ref = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const next1 = () => {
        slider1Ref.slickNext();
      };
      const previous1 = () => {
        slider1Ref.slickPrev();
      };
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    
  return (
    <>
    <div>
<section className="account-section">
  <div className="account-container">
    <div className="account-sidebar">
      <div className="account-sidebar-wrapper">
        <ul>
          <li>
            <a href="profile.html">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                <path d="M9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665Z" style={{stroke: "#EB7F5E", strokeWidth:"1.2", strokeLinecap: "round", strokeLinejoin:"round", stroke: "#898989"}} />
                <path d="M3.55908 15.2879C3.55908 15.2879 5.4166 12.9165 9.99992 12.9165C14.5832 12.9165 16.4408 15.2879 16.4408 15.2879" style={{stroke: "#898989", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                <path d="M10 10C11.3807 10 12.5 8.88075 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61925 5 7.5 6.11929 7.5 7.5C7.5 8.88075 8.61925 10 10 10Z" style={{stroke: "#898989", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
              </svg> Profile </a>
          </li>
          <li>
            <a href="files.html" className="active">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                <path d="M3.55991 17.2733L9.05703 11.7761C9.38704 11.4461 9.55205 11.2811 9.74232 11.2193C9.90969 11.1649 10.09 11.1649 10.2574 11.2193C10.4476 11.2811 10.6126 11.4461 10.9426 11.7761L16.4031 17.2366M11.6665 12.5L14.057 10.1095C14.387 9.77946 14.552 9.61445 14.7423 9.55263C14.9097 9.49825 15.09 9.49825 15.2574 9.55263C15.4476 9.61445 15.6126 9.77946 15.9426 10.1095L18.3332 12.5M8.33317 7.5C8.33317 8.42047 7.58698 9.16667 6.6665 9.16667C5.74603 9.16667 4.99984 8.42047 4.99984 7.5C4.99984 6.57953 5.74603 5.83333 6.6665 5.83333C7.58698 5.83333 8.33317 6.57953 8.33317 7.5ZM5.6665 17.5H14.3332C15.7333 17.5 16.4334 17.5 16.9681 17.2275C17.4386 16.9878 17.821 16.6054 18.0607 16.135C18.3332 15.6002 18.3332 14.9001 18.3332 13.5V6.5C18.3332 5.09987 18.3332 4.3998 18.0607 3.86502C17.821 3.39462 17.4386 3.01217 16.9681 2.77248C16.4334 2.5 15.7333 2.5 14.3332 2.5H5.6665C4.26637 2.5 3.56631 2.5 3.03153 2.77248C2.56112 3.01217 2.17867 3.39462 1.93899 3.86502C1.6665 4.3998 1.6665 5.09987 1.6665 6.5V13.5C1.6665 14.9001 1.6665 15.6002 1.93899 16.135C2.17867 16.6054 2.56112 16.9878 3.03153 17.2275C3.56631 17.5 4.26637 17.5 5.6665 17.5Z" style={{stroke: "#898989", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
              </svg> Files </a>
          </li>
          <li>
            <a href="collections.html">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                <path d="M1.6665 9.99997L9.7017 14.0176C9.81101 14.0722 9.86567 14.0996 9.923 14.1103C9.97378 14.1198 10.0259 14.1198 10.0767 14.1103C10.134 14.0996 10.1887 14.0722 10.298 14.0176L18.3332 9.99997M1.6665 14.1666L9.7017 18.1842C9.81101 18.2389 9.86567 18.2662 9.923 18.277C9.97378 18.2865 10.0259 18.2865 10.0767 18.277C10.134 18.2662 10.1887 18.2389 10.298 18.1842L18.3332 14.1666M1.6665 5.83331L9.7017 1.81571C9.81101 1.76105 9.86567 1.73372 9.923 1.72297C9.97378 1.71344 10.0259 1.71344 10.0767 1.72297C10.134 1.73372 10.1887 1.76105 10.298 1.81571L18.3332 5.83331L10.298 9.8509C10.1887 9.90556 10.134 9.93289 10.0767 9.94365C10.0259 9.95317 9.97378 9.95317 9.923 9.94365C9.86567 9.93289 9.81101 9.90556 9.7017 9.8509L1.6665 5.83331Z" style={{stroke: "#898989", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
              </svg> Collections </a>
          </li>
          <li>
            <a href="receipts.html">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                <path d="M3.3335 6.5C3.3335 5.09987 3.3335 4.3998 3.60598 3.86502C3.84566 3.39462 4.22811 3.01217 4.69852 2.77248C5.2333 2.5 5.93336 2.5 7.3335 2.5H12.6668C14.067 2.5 14.767 2.5 15.3018 2.77248C15.7722 3.01217 16.1547 3.39462 16.3943 3.86502C16.6668 4.3998 16.6668 5.09987 16.6668 6.5V17.5L14.3752 15.8333L12.2918 17.5L10.0002 15.8333L7.7085 17.5L5.62516 15.8333L3.3335 17.5V6.5Z" style={{stroke: "#898989", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
              </svg> Receipts </a>
          </li>
        </ul>
      </div>
      <div className="sign-out">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
            <path d="M14.9998 6.66667L18.3332 10M18.3332 10L14.9998 13.3333M18.3332 10H7.49984M12.4998 3.50337C11.4375 2.86523 10.2042 2.5 8.88873 2.5C4.9 2.5 1.6665 5.85786 1.6665 10C1.6665 14.1421 4.9 17.5 8.88873 17.5C10.2042 17.5 11.4375 17.1348 12.4998 16.4966" stroke="#EA5757" stroke-width="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> Sign Out </a>
      </div>
    </div>
    <div className="file-wrapper">
      <div className="file-header">
        <h2 className="custom-heading">Files</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="latest-collections spacer-margin">
        <div className="section-header-collection">
          <h3>Recent Downloads</h3>
          <div className="slider-arrows">
            <button className="prev-btn" onClick={previous}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}} />
              </svg>
            </button>
            <button className="next-btn" onClick={next}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}}/>
              </svg>
            </button>
            <Link to="/purchases" className="secondary-btn">View All</Link>
          </div>
        </div>
        <div className="latest-collections-slider">
        <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
          <div className="slider-item" key={1}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/grid-image5.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Go and Tell</h6>
                  <a href="#">
                    <span>By Pixel Preacher</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item"key={2}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/explore-slide2.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>VJ Loops Vol 42</h6>
                  <a href="#">
                    <span>By Erica Anderson</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" key={3}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/explore-slide3.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Golden Shapes</h6>
                  <a href="#">
                    <span>By Church Media Squad</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" key={4}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/grid-image5.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Go and Tell</h6>
                  <a href="#">
                    <span>By Pixel Preacher</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" key={5}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/explore-slide3.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Golden Shapes</h6>
                  <a href="#">
                    <span>By Church Media Squad</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
      <div className="latest-collections spacer-margin">
        <div className="section-header-collection">
          <h3>Purchases</h3>
          <div className="slider-arrows">
            <button className="prev-btn" onClick={previous1}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" stroke="#181818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="next-btn" onClick={next1}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" stroke="#181818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <Link to="/purchases" className="secondary-btn">View All</Link>
          </div>
        </div>
        <div className="latest-collections-slider">
        <Slider
        ref={slider => {
          slider1Ref = slider;
        }}
        {...settings}
      >
          <div className="slider-item" key={1}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/grid-image5.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Go and Tell</h6>
                  <a href="#">
                    <span>By Pixel Preacher</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" key={2}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/explore-slide2.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round",stroke: "#000"}}  />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}}  />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>VJ Loops Vol 42</h6>
                  <a href="#">
                    <span>By Erica Anderson</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" key={3}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/explore-slide3.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round",stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round",stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Golden Shapes</h6>
                  <a href="#">
                    <span>By Church Media Squad</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" key={4}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/grid-image5.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round",stroke: "#000"}} />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round",stroke: "#000"}} />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round",  stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Go and Tell</h6>
                  <a href="#">
                    <span>By Pixel Preacher</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" key={5}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src="assets/images/explore-slide3.jpeg" alt=""/>
                </a>
                <div className="hover-buttons">
                  <a href="javascript:void(0)" className="add-hl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                      <path d="M7 2.91675V11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}}  />
                      <path d="M2.91675 7H11.0834" style={{stroke: "#E5FC93", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}}  />
                    </svg>
                    <div className="loading-animation"></div>
                  </a>
                  <a href="javascript:void(0)" className="add-wl-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000"}} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="slide-content">
                <div className="content-column">
                  <h6>Golden Shapes</h6>
                  <a href="#">
                    <span>By Church Media Squad</span>
                  </a>
                </div>
                <div className="slide-btns">
                  <a href="#" className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                    </svg>
                  </a>
                  <a href="#" className="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "20", height: "20", viewBox:"0 0 20 20", fill:"none"}}>
                      <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" stroke="white" strokeWidth="1.2" strokeLinecap="round" stroke-linejoin="round" />
                      <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round"}} />
                      <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" style={{stroke: "white", strokeWidth: "1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </div>
  </div>
</section>
</div></>

  )
}

export default File
