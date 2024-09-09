import React, { useRef,useState, useEffect } from 'react';
import Slider from 'react-slick';

const Explore = () => {
    let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  let sliderRef3 = useRef(null);
  let sliderRef4 = useRef(null);
  let sliderRef5 = useRef(null);
    const [data, setData] = useState(null); // State to store the fetched data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to store any error that occurs
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://new.storyloop.com/wp-json/wp/v2/pages/379281?_fields=acf');  // Replace with your API endpoint
          if (!response.ok) throw new Error('Network response was not ok');
          const result = await response.json();
          console.log('Fetched data:', result);  // Debug log
          setData(result.acf);  // Store the `acf` object in state
        } catch (error) {
          setError(error);  // Handle any errors
        } finally {
          setLoading(false);  // Set loading to false when done
        }
      };
  
      fetchData();  // Call the function to fetch data
    }, []);
  
    if (loading) return <div>Loading...</div>;  // Render loading state
    if (error) return <div>Error: {error.message}</div>; 

const carousel1 = data?.first_carousel || [];
const carousel2 = data?.second_carousel || [];
const carousel3 = data?.third_carousel || [];
const carousel4 = data?.fourth_carousel || [];
const carousel5 = data?.fifth_carousel || [];
    // Event handlers to control the slider
    const nextSlide = (sliderRef) => {
          sliderRef.slickNext();
      };
    
      const prevSlide = (sliderRef) => {
          sliderRef.slickPrev();
    
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
    <div>
      <section className="category-section">
      {/* <!--- explore sidebar start---> */}
      <div className="category-sidebar">
        <div className="category-sidebar-wrapper">
          <div className="category-sidebar-mask">
            <ul className="category-list">
              <li>
                <a href="#">Explore <span>458</span>
                </a>
              </li>
              <li>
                <a href="#">Countdowns <span>414</span>
                </a>
              </li>
              <li>
                <a href="#">Creator Resources <span>56</span>
                </a>
              </li>
              <li>
                <a href="#">Ministry Graphics <span>368</span>
                </a>
              </li>
              <li>
                <a href="#">Motion Backgrounds <span>327</span>
                </a>
              </li>
              <li>
                <a href="#">Motion Packs <span>296</span>
                </a>
              </li>
              <li>
                <a href="#">ProPresenter Themes <span>231</span>
                </a>
              </li>
              <li>
                <a href="#">Sermon Series <span>182</span>
                </a>
              </li>
              <li>
                <a href="#">Service Starters <span>142</span>
                </a>
              </li>
              <li>
                <a href="#">Short Films <span>93</span>
                </a>
              </li>
              <li>
                <a href="#">Stills <span>70</span>
                </a>
              </li>
              <li>
                <a href="#">Stock Footage <span>56</span>
                </a>
              </li>
              <li>
                <a href="#">VJ Loops <span>56</span>
                </a>
              </li>
            </ul>
            <button id="show-more-btn" style={{display: "none"}}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:"24", height:"24"}} viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_493_3283)">
                  <path opacity="0.12" d="M24 12C24 14.3734 23.2962 16.6935 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0866C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.8071 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519943 9.60051 0.913451 7.4078C1.8217 5.21509 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76515 24 8.8174 24 12Z" fill="#E5FC93" />
                  <path d="M12 7.91699V16.0837" stroke="#E5FC93" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.9165 12H16.0832" stroke="#E5FC93" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_493_3283">
                    <rect style={{width:"24", height:"24"}} fill="white" />
                  </clipPath>
                </defs>
              </svg> Show More </button>
            <button id="read-less-btn" style={{display: "none"}}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:"24", height:"24"}} viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_493_3283)">
                  <path opacity="0.12" d="M24 12C24 14.3734 23.2962 16.6935 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0866C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.8071 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519943 9.60051 0.913451 7.4078C1.8217 5.21509 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76515 24 8.8174 24 12Z" fill="#E5FC93"></path>
                  <path d="M16.0835 12H7.91675" stroke="#E5FC93" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                  <clipPath id="clip0_493_3283">
                    <rect style={{width:"24", height:"24", fill:"white"}}></rect>
                  </clipPath>
                </defs>
              </svg> Show Less </button>
          </div>
        </div>
      </div>
      {/* <!--- explore sidebar end---> */}
      <div className="category-page-wrapper">
        <div className="search-block-header">
          <div className="search-block-left-col">
            <form className="search-form">
              <div className="search-form-outer">
                {/* <!--- serach form html -----> */}
                <div className="search-form__wrapper">
                  <div className="search-form__input-box">
                    <input type="text" className="search-form__field" placeholder="Search..." value=""/>
                    <button className="search-clear">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <rect x="2" y="2" width="16" height="16" rx="8" fill="#4D4D4D" />
                        <path d="M12 8L8 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 8L12 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <input type="submit" className="search-form__submit-button" value=""/>
                  </div>
                  {/* <!----- serach box popup ----> */}
                  <div className="search-popup-form" style={{display:"none"}}>
                    <div className="search-popup-form-mask">
                      <div className="search-view-box">
                        <div className="search-view-box-header">
                          <h5>RECENT SEARCHES</h5>
                          <a href="#" className="clear-btn">CLEAR ALL</a>
                        </div>
                        <div className="search-result-list">
                          <ul>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-img.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Prismatic Light</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                                <a href="#" className="remove">
                                  <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16", height:"16"}} viewBox="0 0 16 16" fill="none">
                                    <path d="M12 4L4 12" stroke="#181818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 4L12 12" stroke="#181818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-img.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Prismatic Light</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                                <a href="#" className="remove">
                                  <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16", height:"16"}} viewBox="0 0 16 16" fill="none">
                                    <path d="M12 4L4 12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 4L12 12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-img.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Prismatic Light</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                                <a href="#" className="remove">
                                  <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16", height:"16"}} viewBox="0 0 16 16" fill="none">
                                    <path d="M12 4L4 12" stroke="#181818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 4L12 12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-img.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Prismatic Light</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                                <a href="#" className="remove">
                                  <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16", height:"16"}} viewBox="0 0 16 16" fill="none">
                                    <path d="M12 4L4 12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 4L12 12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="search-view-box">
                        <div className="search-view-box-header">
                          <h5>PRODUCTS</h5>
                        </div>
                        <div className="search-result-list">
                          <ul>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-img.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Example Title</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-img.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Example Title</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-img.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Example Title</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="search-view-box">
                        <div className="search-view-box-header">
                          <h5>PRODUCERS</h5>
                        </div>
                        <div className="search-result-list">
                          <ul>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-2.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Example Title</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-2.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Example Title</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="image-column">
                                <a href="#">
                                  <img src="assets/images/result-2.jpg" alt=""/>
                                </a>
                              </div>
                              <div className="text-column">
                                <a href="#">
                                  <h6>Example Title</h6>
                                  <span>Ministry Graphics</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!----- serach box popup ----> */}
                </div>
                {/* <!--- serach form html end -----> */}
                {/* <!--- category select html---> */}
                <div className="search-form__select-box">
                  <button id="search-form__toggle-button" className="search-form__category-button">
                    <span>All Categories</span>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"10", height:"6"}} viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <ul id="search-form__options-list" className="search-form__category-list">
                    <li className="search-form__category-item">Explore</li>
                    <li className="search-form__category-item">Ministry Graphics</li>
                    <li className="search-form__category-item">Motion Packs</li>
                    <li className="search-form__category-item">Sermon Series</li>
                    <li className="search-form__category-item">Service Starters</li>
                    <li className="search-form__category-item">Short Films</li>
                    <li className="search-form__category-item">Stock Footage</li>
                    <li className="search-form__category-item">VJ Loops</li>
                    <li className="search-form__category-item">Freebies</li>
                  </ul>
                </div>
                {/* <!--- category select html end---> */}
              </div>
            </form>
            <button className="filter-btn mobile-show   filter-applied">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                <path d="M2.5 15L12.5 15M12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C13.6193 17.5 12.5 16.3807 12.5 15ZM7.5 5L17.5 5M7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5C6.38071 7.5 7.5 6.38071 7.5 5Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          <div className="search-block-right-col" style={{display:"none"}}>
            <div className="search-block-right-col-inner">
              <div className="search-header-buttons">
                <a href="#" className="switch-btn active">Items</a>
                <a href="#" className="switch-btn">Packs</a>
                <div className="bg-animation"></div>
              </div>
              <div className="sortby__select-box">
                <button id="sortby__toggle-button" className="sortby-button filter-applied">
                  <svg className="mobile-icon" xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                    <path d="M14.1667 3.33301V16.6663M14.1667 16.6663L10.8333 13.333M14.1667 16.6663L17.5 13.333M5.83333 16.6663V3.33301M5.83333 3.33301L2.5 6.66634M5.83333 3.33301L9.16667 6.66634" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <label>Sort By</label>
                  <span></span>
                  <svg xmlns="http://www.w3.org/2000/svg"style={{width:10, height:6}} viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <ul id="sortby__options-list" className="sortby_select_options">
                  <li className="search-form__category-item">Trending</li>
                  <li className="search-form__category-item">Recently Added</li>
                  <li className="search-form__category-item">Popular</li>
                  <li className="search-form__category-item">Price Low to High</li>
                  <li className="search-form__category-item">Price High to Low</li>
                  <li className="search-form__category-item">Producer</li>
                  <li className="search-form__category-item">Creator Resources</li>
                  <li className="search-form__category-item">Motion Backgrounds</li>
                  <li className="search-form__category-item">Stills</li>
                </ul>
              </div>
              <button className="filter-btn">
                <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 15L12.5 15M12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C13.6193 17.5 12.5 16.3807 12.5 15ZM7.5 5L17.5 5M7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5C6.38071 7.5 7.5 6.38071 7.5 5Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="latest-collections spacer-margin">
          <div className="section-header-collection">
            <h3>{carousel1.heading}</h3>
            <div className="slider-arrows">
            <button className="prev-btn" onClick={() => prevSlide(sliderRef1)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}} />
              </svg>
            </button>
            <button className="next-btn" onClick={() => nextSlide(sliderRef1)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}}/>
              </svg>
            </button>
          </div>
        </div>
        <div className="latest-collections-slider" style={{paddingRight:"30"}}>
        <Slider
        ref={(slider) => {
            sliderRef1 = slider; // Assign each slider to its ref
          }}
        {...settings}
      >
        {carousel1.products.length > 0 ? (
    carousel1.products.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src={item?.product[0]?.featured_image} alt=""/>
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
                  <h6>{item?.product[0]?.post_title}</h6>
                  <a href="#">
                    <span>By {item?.product[0]?.producer.name}</span>
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
              ))
            ) : (
              <div>No carousels available.</div>
            )}
         </Slider>
        </div>
      </div>
      <div className="latest-collections spacer-margin">
          <div className="section-header-collection">
            <h3>{carousel2.heading}</h3>
            <div className="slider-arrows">
            <button className="prev-btn" onClick={() => prevSlide(sliderRef2)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}} />
              </svg>
            </button>
            <button className="next-btn" onClick={() => nextSlide(sliderRef2)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}}/>
              </svg>
            </button>
          </div>
        </div>
        <div className="latest-collections-slider">
        <Slider
        ref={slider => {
          sliderRef2 = slider;
        }}
        {...settings}
      >
        {carousel2.products.length > 0 ? (
    carousel2.products.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src={item?.product[0]?.featured_image} alt=""/>
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
                  <h6>{item?.product[0]?.post_title}</h6>
                  <a href="#">
                    <span>By {item?.product[0]?.producer.name}</span>
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
              ))
            ) : (
              <div>No carousels available.</div>
            )}
         </Slider>
        </div>
     </div>
     <div className="latest-collections spacer-margin">
          <div className="section-header-collection">
            <h3>{carousel3.heading}</h3>
            <div className="slider-arrows">
            <button className="prev-btn" onClick={() => prevSlide(sliderRef3)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}} />
              </svg>
            </button>
            <button className="next-btn" onClick={() => nextSlide(sliderRef3)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}}/>
              </svg>
            </button>
          </div>
        </div>
        <div className="latest-collections-slider">
        <Slider
        ref={slider => {
          sliderRef3 = slider;
        }}
        {...settings}
      >
        {carousel3.products.length > 0 ? (
    carousel3.products.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src={item?.product[0]?.featured_image} alt=""/>
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
                  <h6>{item?.product[0]?.post_title}</h6>
                  <a href="#">
                    <span>By {item?.product[0]?.producer.name}</span>
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
              ))
            ) : (
              <div>No carousels available.</div>
            )}
         </Slider>
        </div>
     </div>
     <div className="latest-collections spacer-margin">
          <div className="section-header-collection">
            <h3>{carousel4.heading}</h3>
            <div className="slider-arrows">
            <button className="prev-btn" onClick={() => prevSlide(sliderRef4)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}} />
              </svg>
            </button>
            <button className="next-btn" onClick={() => nextSlide(sliderRef4)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}}/>
              </svg>
            </button>
          </div>
        </div>
        <div className="latest-collections-slider">
        <Slider
        ref={slider => {
          sliderRef4 = slider;
        }}
        {...settings}
      >
        {carousel4.products.length > 0 ? (
    carousel4.products.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src={item?.product[0]?.featured_image} alt=""/>
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
                  <h6>{item?.product[0]?.post_title}</h6>
                  <a href="#">
                    <span>By {item?.product[0]?.producer.name}</span>
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
              ))
            ) : (
              <div>No carousels available.</div>
            )}
         </Slider>
        </div>
     </div>
     <div className="latest-collections spacer-margin">
          <div className="section-header-collection">
            <h3>{carousel5.heading}</h3>
            <div className="slider-arrows">
             <button className="prev-btn" onClick={() => prevSlide(sliderRef5)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M12.8332 7.00033H1.99984M6.99984 1.16699L1.1665 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}} />
              </svg>
            </button>
            <button className="next-btn" onClick={() => nextSlide(sliderRef5)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: "14", height: "14", viewBox: "0 0 14 14", fill: "none"}}>
                <path d="M1.1665 7.00033H11.9998M6.99984 1.16699L12.8332 7.00033L6.99984 12.8337" style={{stroke: "#181818", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin:"round"}}/>
              </svg>
            </button>
          </div>
        </div>
        <div className="latest-collections-slider">
        <Slider
        ref={slider => {
          sliderRef5 = slider;
        }}
        {...settings}
      >
        {carousel5.products.length > 0 ? (
    carousel5.products.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-item-outer">
              <div className="graphic-wrapper">
                <a href="#">
                  <img src={item?.product[0]?.featured_image} alt=""/>
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
                  <h6>{item?.product[0]?.post_title}</h6>
                  <a href="#">
                    <span>By {item?.product[0]?.producer.name}</span>
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
              ))
            ) : (
              <div>No carousels available.</div>
            )}
         </Slider>
        </div>
     </div>
       <a href="#" className="load-more">Load More</a>
        {/* <!----  query-string-found grid ----> */}
        <div className="latest-collections spacer-margin">
          <div className="result-found-header">
            <div className="result-found-header-content">
              <h3>Search Result for “ <span>Example Title”</span>
              </h3>
            </div>
            <div className="result-count"> 214 Results </div>
          </div>
          <div className="result-found-header">
            <div className="result-found-header-content">
              {/* <!-- <h3>Search Result for “ <span>Example Title”</span></h3> --> */}
              <div className="selected-tags">
                <span>German <a href="#" className="clear">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16", height:"16"}} viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="2" width="12" height="12" rx="6" fill="#4D4D4D" />
                      <path d="M9.5 6.5L6.5 9.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.5 6.5L9.5 9.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </span>
                <span>Autumn <a href="#" className="clear">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16", height:"16"}} viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="2" width="12" height="12" rx="6" fill="#4D4D4D" />
                      <path d="M9.5 6.5L6.5 9.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.5 6.5L9.5 9.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </span>
                <span>Church Online Starter <a href="#" className="clear">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16", height:"16"}} viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="2" width="12" height="12" rx="6" fill="#4D4D4D" />
                      <path d="M9.5 6.5L6.5 9.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.5 6.5L9.5 9.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </span>
                {/* <!-- show for mobile if more then one --> */}
                <span className="tag-count">+2</span>
                <a href="#" className="clear-all">Clear All</a>
              </div>
            </div>
            <div className="result-count"> 214 Results </div>
          </div>
          <div className="product-grid">
            <div className="slider-item">
              <div className="slider-item-outer">
                <div className="graphic-wrapper">
                  <a href="#">
                    <img src="assets/images/grid-image5.jpeg" alt=""/>
                  </a>
                  <div className="hover-buttons">
                    <a href="javascript:void(0)" className="add-hl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"14", height:"14"}} viewBox="0 0 14 14" fill="none">
                        <path d="M7 2.91675V11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                        <path d="M2.91675 7H11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                      </svg>
                      <div className="loading-animation"></div>
                    </a>
                    <a href="javascript:void(0)" className="add-wl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke:"white", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}} />
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
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="add-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item-outer">
                <div className="graphic-wrapper">
                  <a href="#">
                    <img src="assets/images/explore-slide2.jpeg" alt=""/>
                  </a>
                  <div className="hover-buttons">
                    <a href="javascript:void(0)" className="add-hl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"14", height:"14"}} viewBox="0 0 14 14" fill="none">
                        <path d="M7 2.91675V11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                        <path d="M2.91675 7H11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                      </svg>
                      <div className="loading-animation"></div>
                    </a>
                    <a href="javascript:void(0)" className="add-wl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke:"white", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}} />
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
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="add-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item-outer">
                <div className="graphic-wrapper">
                  <a href="#">
                    <img src="assets/images/explore-slide3.jpeg" alt=""/>
                  </a>
                  <div className="hover-buttons">
                    <a href="javascript:void(0)" className="add-hl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"14", height:"14"}} viewBox="0 0 14 14" fill="none">
                        <path d="M7 2.91675V11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                        <path d="M2.91675 7H11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                      </svg>
                      <div className="loading-animation"></div>
                    </a>
                    <a href="javascript:void(0)" className="add-wl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke:"white", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}} />
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
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="add-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item-outer">
                <div className="graphic-wrapper">
                  <a href="#">
                    <img src="assets/images/grid-image5.jpeg" alt=""/>
                  </a>
                  <div className="hover-buttons">
                    <a href="javascript:void(0)" className="add-hl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"14", height:"14"}} viewBox="0 0 14 14" fill="none">
                        <path d="M7 2.91675V11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                        <path d="M2.91675 7H11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                      </svg>
                      <div className="loading-animation"></div>
                    </a>
                    <a href="javascript:void(0)" className="add-wl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke:"white", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}} />
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
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="add-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-item-outer">
                <div className="graphic-wrapper">
                  <a href="#">
                    <img src="assets/images/explore-slide3.jpeg" alt=""/>
                  </a>
                  <div className="hover-buttons">
                    <a href="javascript:void(0)" className="add-hl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"14", height:"14"}} viewBox="0 0 14 14" fill="none">
                        <path d="M7 2.91675V11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}} />
                        <path d="M2.91675 7H11.0834" style={{stroke:"#E5FC93", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}}/>
                      </svg>
                      <div className="loading-animation"></div>
                    </a>
                    <a href="javascript:void(0)" className="add-wl-button">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" style={{stroke:"white", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round",stroke:"#000"}} />
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
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"d="M9.99437 4.27985C8.32825 2.332 5.54987 1.80804 3.46233 3.59168C1.37478 5.37532 1.08089 8.35748 2.72025 10.467C4.08326 12.2209 8.20823 15.9201 9.56017 17.1174C9.71142 17.2513 9.78705 17.3183 9.87526 17.3446C9.95225 17.3676 10.0365 17.3676 10.1135 17.3446C10.2017 17.3183 10.2773 17.2513 10.4286 17.1174C11.7805 15.9201 15.9055 12.2209 17.2685 10.467C18.9079 8.35748 18.6498 5.35656 16.5264 3.59168C14.403 1.8268 11.6605 2.332 9.99437 4.27985Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="add-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20"}} viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 5.00033H18.3333L15.8333 13.3337H5L2.5 5.00033ZM2.5 5.00033L1.875 2.91699" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.95825 9.16667H10.6249M10.6249 9.16667H12.2916M10.6249 9.16667V7.5M10.6249 9.16667V10.8333" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.16675 16.25C9.16675 16.9403 8.60708 17.5 7.91675 17.5C7.22639 17.5 6.66675 16.9403 6.66675 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.1667 16.25C14.1667 16.9403 13.6071 17.5 12.9167 17.5C12.2264 17.5 11.6667 16.9403 11.6667 16.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!---- query-string-found grid end  ---> */}
      </div>
    </section>
    </div>
  )
}

export default Explore
