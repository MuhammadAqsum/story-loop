import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState(null); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to store any error that occurs

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://new.storyloop.com/wp-json/wp/v2/pages/422?_fields=acf');  // Replace with your API endpoint
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
  if (error) return <div>Error: {error.message}</div>;  // Render error state

  // Ensure data and data.hero_section are defined before accessing
  const heroSection = data?.hero_section || {}; 
  const features = heroSection.hero_section_attrbts || []; 
  const carousal1 = heroSection.hero_sec_products_carousal1 || []; 
  const carousal2 = heroSection.hero_sec_products_carousal2 || []; 
  return (
    <>
    <div>
          <section className="hero-section">
      <div className="container-fluid">
        <div className="row">
          <div className="hero-left-col">
            <div className="hero-content">
            <h1 dangerouslySetInnerHTML={{ __html: heroSection.hero_sec_title }}></h1> 
              <p>{heroSection.hero_sec_desc}</p>
              <div className="hero_btn">
                <a href="" class="primary-btn">{heroSection.hero_sec_btn_label}</a>
              </div>
              <ul>
                 {features.map((item, index) => (
                 <li key={index}>{item.feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero-right-col">
            <div className="hero-grid">
              <div className="grid-column scroll-up">
                <Slider {...setting}>
                {carousal1.map((item, index) => (
                <div className="image-wrapper" key={index}>
                  <div className="image-wrapper-inner">
                    <img src={item.featured_image} alt="Image 1"/>
                  </div>
                </div>
                ))}
                </Slider>
              </div>
              <div className="grid-column scroll-down">
                <Slider {...setting1}> 
                {carousal2.map((item, index) => (
                <div className="image-wrapper" key={index}>
                  <div className="image-wrapper-inner">
                    <img src={item.featured_image} alt="Image 1"/>
                  </div>
                </div>
                ))}
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