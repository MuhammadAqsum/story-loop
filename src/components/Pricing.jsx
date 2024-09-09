import React, { useContext } from 'react';
import { DataContext } from './DataContext';
const Pricing = () => {
  const { data, loading, error } = useContext(DataContext);
    
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const subscriptionSection = data?.subscription_section || {}; 
  const features = subscriptionSection.subscription_sec_attrbs || {}; 
  return (
    <div>
      <section class="pricing-section">
      <div class="container-fluid">
        <div class="pricing-wrapper">
          <div class="left-column">
            <h2 dangerouslySetInnerHTML={{ __html: subscriptionSection.subscription_sec_title }}></h2>
            <p>{subscriptionSection.subscription_sec_desc }</p>
            <a href="#" class="primary-btn">{subscriptionSection.subscription_sec_btn_label}</a>
            <div class="desc-content">
              <p>{subscriptionSection.subscription_sec_extra_info}</p>
            </div>
          </div>
          <div class="right-column">
            <h6>{subscriptionSection.subscription_sec_features_label}</h6>
            <ul>
            {features.map((item, index) => (
              <li key={index}>{item.feature} </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Pricing
