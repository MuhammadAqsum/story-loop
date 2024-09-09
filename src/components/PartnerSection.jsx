import React, { useState, useEffect } from "react";
import 'slick-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnerSection = () => {
    const setting2 = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000, // Adjusted for better timing
        cssEase: 'linear',
        pauseOnHover: false,
        slidesToShow: 9, // Show 5 slides at once
        slidesToScroll: 1,
        infinite: true, // Loop through the slides
        arrows: false, // Hide arrows if not needed
        vertical: false,
        verticalSwiping: false,
        swipeToSlide: true,
        rtl: false,
     // Adjust as needed for right-to-left layout
      };
      const [data, setData] = useState(null); // State to store the fetched data
      const [loading, setLoading] = useState(true); // State to manage loading state
      const [error, setError] = useState(null); // State to store any error that occurs
    
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://new.storyloop.com/wp-json/wp/v2/options');  // Replace with your API endpoint
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            console.log('Fetched data:', result);  // Debug log
            setData(result);  // Store the `acf` object in state
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
      const partners = data.partners|| {}; 
      const images = partners.details|| {}; 
  return (
    <div>
          <section class="partners-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="partners-content">
          <h6>{partners.label}</h6>
        </div>
      </div>
      <div class="col-10">
    
        <div class="partners-slider-wrapper">
        <div class="slider partners-slider">
        <Slider {...setting2}>
                                    {images.map((item, index) => (
                                        <div className="item" key={index}>
                                            <img src={item.img} alt={`Partner ${index + 1}`} />
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
  )
}

export default PartnerSection
