import React from 'react'

const Content = () => {
  return (
    <div>
       <section class="worship-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="image-column">
              <img src="assets/images/curated-library1.png" alt=""/>
            </div>
          </div>
          <div class="col-6">
            <div class="content-column">
              <h2>
                <span> A Curated Library </span>of <br/> Worship Backgrounds & <br/>More
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
              </ul>
              <a href="#" class="arrow-button">Get Started Free <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E5FC93" />
                  <path d="M12.3333 19.6667L19.6666 12.3334L12.3333 19.6667ZM19.6666 12.3334V19.3734V12.3334ZM19.6666 12.3334H12.6267H19.6666Z" fill="#181818" />
                  <path d="M12.3333 19.6667L19.6666 12.3334M19.6666 12.3334V19.3734M19.6666 12.3334H12.6267" stroke="#181818" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <div class="author-box">
                <p>They have the most incredible visuals for worship. And they go way beyond the surface level with the most theologically strong short films that are available anywhere.</p>
                <div class="author-col">
                  <figure>
                    <img src="assets/images/brad-zimmerman.png" alt=""/>
                  </figure>
                  <div class="author-details">
                    <h6>Brad Zimmerman</h6>
                    <p>Worker at Company Name</p>
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
              <img src="assets/images/curated-library3.jpeg" alt=""/>
            </div>
          </div>
          <div class="col-6">
            <div class="content-column">
              <h2>
                <span> Less Time Scrolling. </span> More <br/> Time for Your Calling.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
              </ul>
              <a href="#" class="arrow-button">Get Started Free <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#E5FC93" />
                  <path d="M12.3333 19.6667L19.6666 12.3334L12.3333 19.6667ZM19.6666 12.3334V19.3734V12.3334ZM19.6666 12.3334H12.6267H19.6666Z" fill="#181818" />
                  <path d="M12.3333 19.6667L19.6666 12.3334M19.6666 12.3334V19.3734M19.6666 12.3334H12.6267" stroke="#181818" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <div class="author-box">
                <p>Story Loop has the most visually stunning content for churches anywhere. Their library of worship packs, short films, and dedicated content for church online are a must-have. </p>
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
          </div>
        </div>
      </div>
    </section>
   
    </div>
  )
}

export default Content;
