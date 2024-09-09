
import React, { useContext } from 'react';
import 'slick-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DataContext } from './DataContext';

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
  const { data, loading, error } = useContext(DataContext);
    
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const exploreSection = data?.explore_section || {}; 
  const explores = exploreSection.explore_sec_products || []; 
  return (
    <div>
       <section class="explore-section">
      <div className="block-header">
      <h2 dangerouslySetInnerHTML={{ __html: exploreSection.explore_sec_title }}></h2> 
        <p dangerouslySetInnerHTML={{ __html: exploreSection.explore_sec_desc }}></p>
        <a href="#" class="primary-btn">{exploreSection.explore_sec_btn_label }</a>
      </div>
      <div class="weak-slider">
      <Slider {...setting}>
      {explores.map((item, index) => (
      <div className="slick-slide" key={index}>
      <div className="inner">
            <a href="#"></a>
            <img src={item.featured_image}  alt='image1'/>
          </div>
        </div>
          ))}
      </Slider>
      </div>
    </section>
    </div>
  )
}

export default FreshContent;
