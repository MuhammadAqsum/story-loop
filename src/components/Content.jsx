import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const Content = () => {
  const { data, loading, error } = useContext(DataContext);
    
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const contentSection1 = data?.content_section1 || {};
  const contentSection2 = data?.content_section2 || {};
  const contentSec1  = contentSection1.content_sec1_attrbs || {}; 
  const contentSec2  = contentSection2.content_sec2_attrbs || {}; 
  return (
    <div>
       <section class="worship-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="image-column">
              <img src={contentSection1.content_sec1_img} alt=""/>
            </div>
          </div>
          <div class="col-6">
            <div class="content-column">
              <h2 dangerouslySetInnerHTML={{ __html: contentSection1.content_sec1_title }}></h2>
              <p>{contentSection1.content_sec1_desc}</p>
              <ul>
              {contentSec1.map((item, index) => (
              <li key={index}>{item.feature} </li>
            ))}
              </ul>
              <a href="#" class="arrow-button">{contentSection1.content_sec1_btn_label} <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E5FC93" />
                  <path d="M12.3333 19.6667L19.6666 12.3334L12.3333 19.6667ZM19.6666 12.3334V19.3734V12.3334ZM19.6666 12.3334H12.6267H19.6666Z" fill="#181818" />
                  <path d="M12.3333 19.6667L19.6666 12.3334M19.6666 12.3334V19.3734M19.6666 12.3334H12.6267" stroke="#181818" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <div class="author-box">
                <p>{contentSection1.content_sec1_testimonial_txt} </p>
                <div class="author-col">
                  <figure>
                    <img src={contentSection1.content_sec1_testimonial_img} alt=""/>
                  </figure>
                  <div class="author-details">
                    <h6>{contentSection1.content_sec1_testimonial_name}</h6>
                    <p>{contentSection1.content_sec1_testimonial_role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="worship-section column-reverse">
    <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="image-column">
              <img src={contentSection2.content_sec2_img} alt=""/>
            </div>
          </div>
          <div class="col-6">
            <div class="content-column">
              <h2 dangerouslySetInnerHTML={{ __html: contentSection2.content_sec2_title }}></h2>
              <p>{contentSection2.content_sec2_desc}</p>
              <ul>
              {contentSec2.map((item, index) => (
              <li key={index}>{item.feature} </li>
            ))}
              </ul>
              <a href="#" class="arrow-button">{contentSection2.content_sec2_btn_label} <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E5FC93" />
                  <path d="M12.3333 19.6667L19.6666 12.3334L12.3333 19.6667ZM19.6666 12.3334V19.3734V12.3334ZM19.6666 12.3334H12.6267H19.6666Z" fill="#181818" />
                  <path d="M12.3333 19.6667L19.6666 12.3334M19.6666 12.3334V19.3734M19.6666 12.3334H12.6267" stroke="#181818" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <div class="author-box">
                <p>{contentSection2.content_sec2_testimonial_txt} </p>
                <div class="author-col">
                  <figure>
                    <img src={contentSection2.content_sec2_testimonial_img} alt=""/>
                  </figure>
                  <div class="author-details">
                    <h6>{contentSection2.content_sec2_testimonial_name}</h6>
                    <p>{contentSection2.content_sec2_testimonial_role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    </div>
  )
}

export default Content;
