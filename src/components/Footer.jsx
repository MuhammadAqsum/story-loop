import React, { useState, useEffect } from "react";

const Footer = () => {
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
  const footer = data?.footer || {}; 
  return (
    <div>
       <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <div class="col-4-inner">
              <a href="#" class="footer-logo">
                <img src={footer.footer_logo} />
              </a>
              <div class="newsletter-form">
                <input type="text" placeholder="Enter Your Mail" id="newsletter-input" autocomplete="off"/>
                <button class="primary-btn" type="submit">Start for Free</button>
              </div>
              <p>{footer.footer_newsletter_instruction}</p>
            </div>
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-4 accordion-header-item">
                <h6 class="accordion-header-footer">CONNECT <svg class="footer-toggle" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4.16602V15.8327" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.16675 10H15.8334" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h6>
                <ul class="linklist accordion-content-footer">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Become a Contributor</a>
                  </li>
                  <li>
                    <a href="#">Members Group</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Licenses</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Media Kit</a>
                  </li>
                </ul>
              </div>
              <div class="col-4 accordion-header-item">
                <h6 class="accordion-header-footer">BROWSE BY TYPE <svg class="footer-toggle" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4.16602V15.8327" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.16675 10H15.8334" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h6>
                <ul class="linklist accordion-content-footer">
                  <li>
                    <a href="#">Church Online</a>
                  </li>
                  <li>
                    <a href="#">Countdowns</a>
                  </li>
                  <li>
                    <a href="#">Creator Resources</a>
                  </li>
                  <li>
                    <a href="#">Motion Backgrounds</a>
                  </li>
                  <li>
                    <a href="#">Motion Packs</a>
                  </li>
                  <li>
                    <a href="#">ProPresenter Themes</a>
                  </li>
                  <li>
                    <a href="#">Sermon Series</a>
                  </li>
                  <li>
                    <a href="#">Service Starters</a>
                  </li>
                  <li>
                    <a href="#">Short Films</a>
                  </li>
                  <li>
                    <a href="#">Stills</a>
                  </li>
                  <li>
                    <a href="#">Stock Footage</a>
                  </li>
                  <li>
                    <a href="#">VJ Loops</a>
                  </li>
                  <li>
                    <a href="#">Freebies</a>
                  </li>
                </ul>
              </div>
              <div class="col-4 accordion-header-item">
                <h6 class="accordion-header-footer">BROWSE BY LANGUAGE <svg class="footer-toggle" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4.16602V15.8327" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.16675 10H15.8334" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h6>
                <ul class="linklist accordion-content-footer">
                  <li>
                    <a href="#">English (UK)</a>
                  </li>
                  <li>
                    <a href="#">English (US)</a>
                  </li>
                  <li>
                    <a href="#">Chinese</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">German</a>
                  </li>
                  <li>
                    <a href="#">Portuguese</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 flex space-betweent">
            <p>{footer.footer_copyright}</p>
            <div class="social-share">
              <a href="#">
                <svg xmlns={footer.social_media.img} width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.08" d="M16.5 3H7.5C6.30653 3 5.16193 3.47411 4.31802 4.31802C3.47411 5.16193 3 6.30653 3 7.5V16.5C3 17.6935 3.47411 18.8381 4.31802 19.682C5.16193 20.5259 6.30653 21 7.5 21H16.5C17.6935 21 18.8381 20.5259 19.682 19.682C20.5259 18.8381 21 17.6935 21 16.5V7.5C21 6.30653 20.5259 5.16193 19.682 4.31802C18.8381 3.47411 17.6935 3 16.5 3ZM12 15.75C11.2583 15.75 10.5333 15.5301 9.91661 15.118C9.29993 14.706 8.81928 14.1203 8.53545 13.4351C8.25162 12.7498 8.17736 11.9958 8.32205 11.2684C8.46675 10.541 8.8239 9.8728 9.34835 9.34835C9.8728 8.8239 10.541 8.46675 11.2684 8.32205C11.9958 8.17736 12.7498 8.25162 13.4351 8.53545C14.1203 8.81928 14.706 9.29993 15.118 9.91661C15.5301 10.5333 15.75 11.2583 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75Z" fill="white" />
                  <path d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM20.25 16.5C20.25 17.4946 19.8549 18.4484 19.1516 19.1516C18.4484 19.8549 17.4946 20.25 16.5 20.25H7.5C6.50544 20.25 5.55161 19.8549 4.84835 19.1516C4.14509 18.4484 3.75 17.4946 3.75 16.5V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H16.5C17.4946 3.75 18.4484 4.14509 19.1516 4.84835C19.8549 5.55161 20.25 6.50544 20.25 7.5V16.5ZM12 7.5C11.11 7.5 10.24 7.76392 9.49993 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18868 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0243 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM18 7.125C18 7.3475 17.934 7.56501 17.8104 7.75002C17.6868 7.93502 17.5111 8.07922 17.3055 8.16436C17.1 8.24951 16.8738 8.27179 16.6555 8.22838C16.4373 8.18498 16.2368 8.07783 16.0795 7.9205C15.9222 7.76316 15.815 7.56271 15.7716 7.34448C15.7282 7.12625 15.7505 6.90005 15.8356 6.69448C15.9208 6.48891 16.065 6.31321 16.25 6.1896C16.435 6.06598 16.6525 6 16.875 6C17.1734 6 17.4595 6.11853 17.6705 6.3295C17.8815 6.54048 18 6.82663 18 7.125Z" fill="white" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.08" d="M21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3C14.387 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" fill="white" />
                  <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12.75 20.2153V14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H12.75V10.5C12.75 10.1022 12.908 9.72064 13.1893 9.43934C13.4706 9.15804 13.8522 9 14.25 9H15.75C15.9489 9 16.1397 8.92098 16.2803 8.78033C16.421 8.63968 16.5 8.44891 16.5 8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5H14.25C13.4544 7.5 12.6913 7.81607 12.1287 8.37868C11.5661 8.94129 11.25 9.70435 11.25 10.5V12.75H9C8.80109 12.75 8.61033 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61033 14.171 8.80109 14.25 9 14.25H11.25V20.2153C9.13575 20.0223 7.17728 19.0217 5.78198 17.4215C4.38667 15.8214 3.66195 13.7449 3.75855 11.6241C3.85515 9.50324 4.76564 7.50127 6.30064 6.0346C7.83563 4.56793 9.87696 3.74947 12 3.74947C14.1231 3.74947 16.1644 4.56793 17.6994 6.0346C19.2344 7.50127 20.1449 9.50324 20.2415 11.6241C20.3381 13.7449 19.6133 15.8214 18.218 17.4215C16.8227 19.0217 14.8643 20.0223 12.75 20.2153Z" fill="white" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.08" d="M19.5 20.25H15L4.5 3.75H9L19.5 20.25Z" fill="white" />
                  <path d="M20.133 19.8478L14.2643 10.6247L20.0552 4.25438C20.1862 4.10674 20.2537 3.91343 20.2431 3.71636C20.2325 3.51929 20.1446 3.33435 19.9986 3.20161C19.8525 3.06888 19.66 2.99907 19.4628 3.00731C19.2657 3.01555 19.0797 3.10117 18.9452 3.24562L13.4289 9.31312L9.633 3.34781C9.56531 3.24127 9.47183 3.15353 9.36121 3.09274C9.25059 3.03194 9.12642 3.00004 9.00019 3H4.50019C4.36571 2.99993 4.2337 3.03603 4.11796 3.10449C4.00222 3.17296 3.90702 3.27129 3.84232 3.38918C3.77763 3.50707 3.74582 3.64018 3.75023 3.77458C3.75463 3.90898 3.7951 4.03973 3.86738 4.15313L9.73613 13.3753L3.94519 19.7503C3.87756 19.823 3.82503 19.9083 3.79063 20.0014C3.75623 20.0945 3.74065 20.1935 3.74479 20.2927C3.74894 20.3918 3.77272 20.4892 3.81477 20.5791C3.85681 20.669 3.91628 20.7496 3.98973 20.8164C4.06318 20.8831 4.14915 20.9346 4.24265 20.9679C4.33615 21.0012 4.43533 21.0156 4.53443 21.0103C4.63354 21.0049 4.7306 20.98 4.81999 20.9369C4.90938 20.8937 4.98932 20.8333 5.05519 20.7591L10.5714 14.6916L14.3674 20.6569C14.4356 20.7625 14.5293 20.8494 14.6399 20.9093C14.7505 20.9693 14.8744 21.0005 15.0002 21H19.5002C19.6345 21 19.7664 20.9638 19.882 20.8954C19.9976 20.827 20.0927 20.7288 20.1573 20.611C20.222 20.4933 20.2539 20.3604 20.2496 20.2261C20.2453 20.0918 20.205 19.9612 20.133 19.8478ZM15.4118 19.5L5.86613 4.5H8.58488L18.1343 19.5H15.4118Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
