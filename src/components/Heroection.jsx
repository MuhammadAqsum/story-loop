// HeroSection.js
import React, { useState, useEffect } from "react";
const Herosection = () => {
  const [data, setData] = useState(null); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to store any error that occurs

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://new.storyloop.com/wp-json/wp/v2/pages/422?_fields=acf'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json(); // Parse the JSON from the response
        setData(result); // Update the state with the fetched data
      } catch (error) {
        setError(error); // Update the state with the error if any occurs
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>; // Display loading state
  if (error) return <div>Error: {error.message}</div>; // Display error if it occurs
  if (!data) return <div>No data found</div>; // Display if no data is returned

  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row">
          <div className="hero-left-col">
            <div className="hero-content">
              <h1>{data.hero_section.hero_sec_title}<br /> Ministries To Change <br />
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
