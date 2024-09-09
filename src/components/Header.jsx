import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Header (){
  
    return (
      <>
      <div>
           <header className="site-header">
      <div className="container-fluid">
        <div className="left-column">
          <Link to="/" className="site-logo">
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: "126", height: "22", viewBox: "0 0 126 22", fill: "none"}}>
              <g clip-path="url(#clip0_119_1331)">
                <path d="M35.8636 9.24516C33.5163 8.84299 32.0905 8.48957 32.0905 6.98325C32.0905 5.61831 33.1922 4.80421 35.0373 4.80421C36.8824 4.80421 38.162 5.80111 38.3619 7.40249L38.3838 7.59017H40.6701L40.6579 7.36349C40.4776 4.55072 38.2717 2.73242 35.0373 2.73242C31.9369 2.73242 29.8554 4.48004 29.8554 7.08319C29.8554 10.0544 32.3513 10.8758 34.7935 11.2853C37.0993 11.6777 38.6081 12.0531 38.6081 13.6325C38.6081 15.0291 37.4089 15.8944 35.4736 15.8944C33.3798 15.8944 31.9369 14.6976 31.798 12.8476L31.7833 12.6502H29.4922V12.872C29.6043 15.9651 31.9296 17.9638 35.4443 17.9638C38.6129 17.9638 40.8359 16.1138 40.8359 13.4667C40.8456 11.8897 40.2777 9.99345 35.8636 9.24516Z" fill="#181818" />
                <path d="M45.7937 14.8408V8.79605H48.5382V6.80957H45.7937V3.83594H43.6634V6.80957H41.75V8.79605H43.6634V14.8676C43.6634 16.9272 44.5798 17.8461 46.6419 17.8461H48.7039V15.8548H46.7979C46.0203 15.8548 45.7937 15.6281 45.7937 14.8408Z" fill="#181818" />
                <path d="M55.0017 6.68555C51.7795 6.68555 49.5273 9.00595 49.5273 12.3257C49.5273 15.6454 51.7795 17.9658 55.0017 17.9658C58.224 17.9658 60.4762 15.6454 60.4762 12.3257C60.4762 9.00595 58.224 6.68555 55.0017 6.68555ZM55.0017 16.0208C53.0518 16.0208 51.7015 14.5023 51.7015 12.3257C51.7015 10.1491 53.0591 8.63059 55.0017 8.63059C56.9444 8.63059 58.302 10.1491 58.302 12.3257C58.302 14.5023 56.9468 16.0208 55.0017 16.0208Z" fill="#181818" />
                <path d="M64.0782 8.06093L63.8978 6.81055H62.0234V17.8422H64.1562V12.2216C64.1562 10.9809 64.495 8.8994 66.7691 8.8994H67.8366V6.81055H67.1444C65.4626 6.81055 64.6022 7.41015 64.0782 8.06093Z" fill="#181818" />
                <path d="M73.8061 14.8857L70.6862 6.81055H68.4219L72.6361 17.6887L72.1487 18.9074C71.7636 19.8823 71.6612 20.0188 70.8081 20.0188H69.0775V22.0053H71.3297C72.9384 22.0053 73.4039 21.2424 74.084 19.4997L79.0855 6.82517H76.8163L73.8061 14.8857Z" fill="#181818" />
                <path d="M82.5359 2.85938H80.3008L80.4982 17.8421H89.3655V15.7508H82.7333L82.5359 2.85938Z" fill="#181818" />
                <path d="M95.4744 6.68555C92.2522 6.68555 90 9.00595 90 12.3257C90 15.6454 92.2522 17.9658 95.4744 17.9658C98.6967 17.9658 100.949 15.6454 100.949 12.3257C100.949 9.00595 98.6967 6.68555 95.4744 6.68555ZM95.4744 16.0208C93.5245 16.0208 92.1742 14.5023 92.1742 12.3257C92.1742 10.1491 93.5318 8.63059 95.4744 8.63059C97.417 8.63059 98.7747 10.1491 98.7747 12.3257C98.7747 14.5023 97.417 16.0208 95.4744 16.0208Z" fill="#181818" />
                <path d="M107.994 6.68555C104.769 6.68555 102.52 9.00595 102.52 12.3257C102.52 15.6454 104.769 17.9658 107.994 17.9658C111.219 17.9658 113.468 15.6454 113.468 12.3257C113.468 9.00595 111.216 6.68555 107.994 6.68555ZM107.994 16.0208C106.044 16.0208 104.694 14.5023 104.694 12.3257C104.694 10.1491 106.049 8.63059 107.994 8.63059C109.939 8.63059 111.294 10.1491 111.294 12.3257C111.294 14.5023 109.927 16.0208 107.994 16.0208Z" fill="#181818" />
                <path d="M120.577 6.68492C119.919 6.66899 119.265 6.79682 118.661 7.05951C118.058 7.32219 117.519 7.7134 117.082 8.20586L116.896 6.80923H115.02V21.9991H117.15V16.6368C117.94 17.4997 119.131 17.9677 120.577 17.9677C123.702 17.9677 125.883 15.6473 125.883 12.3275C125.883 8.89808 123.801 6.68492 120.577 6.68492ZM120.409 8.63484C122.385 8.63484 123.711 10.1192 123.711 12.3299C123.711 14.5407 122.385 16.0202 120.409 16.0202C118.432 16.0202 117.13 14.5187 117.13 12.2836C117.13 10.1314 118.478 8.62997 120.409 8.62997V8.63484Z" fill="#181818" />
                <path d="M20.7188 0V2.94926C19.9301 2.95055 19.1742 3.26459 18.6167 3.8225C18.0593 4.38041 17.7458 5.13664 17.7452 5.92533C17.7455 6.31336 17.8229 6.69746 17.9731 7.05525C18.1233 7.41305 18.3432 7.73739 18.6199 8.00938C18.8967 8.28137 19.2248 8.49557 19.5851 8.6395C19.9455 8.78344 20.3308 8.85424 20.7188 8.84777V11.797C19.1544 11.797 17.6541 11.1756 16.5479 10.0694C15.4418 8.96321 14.8203 7.4629 14.8203 5.89852C14.8203 4.33413 15.4418 2.83382 16.5479 1.72764C17.6541 0.621449 19.1544 0 20.7188 0Z" fill="#181818" />
                <path d="M0 0H0.326612C11.5387 0 11.5387 17.7419 20.462 17.7419H20.7179V20.6911H20.3986C9.22801 20.6911 9.22801 2.94926 0.260802 2.94926H0V0Z" fill="#181818" />
                <path d="M0 8.84766C1.57068 8.84895 3.07669 9.4733 4.18755 10.5837C5.29842 11.6941 5.92339 13.1999 5.92533 14.7705C5.92339 16.3414 5.2985 17.8475 4.1877 18.9582C3.07691 20.069 1.5709 20.6939 0 20.6959V17.7466C0.788907 17.7453 1.54513 17.4314 2.10297 16.8735C2.66082 16.3157 2.97478 15.5595 2.97607 14.7705C2.97478 13.9819 2.66074 13.2259 2.10283 12.6684C1.54491 12.111 0.788683 11.7976 0 11.7969V8.84766Z" fill="#181818" />
              </g>
              <defs>
                <clipPath id="clip0_119_1331">
                  <rect width="126" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="right-column">
          <div className="menu-drawer">
            <ul className="main-menu">
              <li className="main-nav-item has-sub-menu">
                <a href="#">Products <button className="submenu-button">
                    
<svg className="desktop-menu-icon" xmlns="http://www.w3.org/2000/svg" style={{width: "16", height: "16", viewBox: "0 0 16 16", fill: "none"}}>
<path d="M4 6L8 10L12 6" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}}/>
</svg>
                    <svg className="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" style={{width: "28", height:"28", viewBox:"0 0 28 28", fill:"none"}}>
                      <g clip-path="url(#clip0_898_20924)">
                        <path opacity="0.12" d="M28 14C28 16.7689 27.1789 19.4757 25.6406 21.778C24.1022 24.0803 21.9157 25.8747 19.3576 26.9343C16.7994 27.9939 13.9845 28.2712 11.2687 27.731C8.55301 27.1908 6.05845 25.8574 4.10051 23.8995C2.14258 21.9416 0.809205 19.447 0.269012 16.7313C-0.271181 14.0155 0.006066 11.2006 1.06569 8.64243C2.12532 6.08427 3.91974 3.89776 6.22202 2.35943C8.52431 0.821086 11.2311 0 14 0C17.713 0 21.274 1.475 23.8995 4.1005C26.525 6.72601 28 10.287 28 14Z" fill="#EB7F5E" />
                        <path id="m-path" d="M14 9.23633V18.7641" style={{stroke:"#EB7F5E", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                        <path d="M9.23608 14H18.7639" style={{stroke:"#EB7F5E", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                      </g>
                      <defs>
                        <clipPath id="clip0_898_20924">
                          <rect style={{width:"28", height:"28", fill:"white"}} />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </a>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link className="menu-link" to="/explore">Explore</Link>
                    </li>
                    <li>
                      <a className="menu-link" href="#">Ministry Graphics</a>
                    </li>
                    <li>
                      <a className="menu-link" href="#">Motion Packs</a>
                    </li>
                    <li>
                      <a className="menu-link" href="#">Sermon Series</a>
                    </li>
                    <li>
                      <a className="menu-link" href="#">Service Starters</a>
                    </li>
                    <li>
                      <a className="menu-link" href="#">Short Films</a>
                    </li>
                    <li>
                      <a className="menu-link" href="#">Stock Footage</a>
                    </li>
                    <li>
                      <a className="menu-link" href="#">VJ Loops</a>
                    </li>
                    <li>
                      <a className="menu-link" href="#">Freebies</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="main-nav-item">
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
            <div className="header-buttons">
              <Link to="/login" className="header-button login-btn sign-link">Sign In</Link>
              <Link to="/signup" className="header-button sign-up">Join Now</Link>
            </div>
          </div>
        </div>
        <div className="header-mobile-buttons">
          <div className="login-links">
            <a href="#" className="account-login sign-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 1.66602C5.39746 1.66602 1.6665 5.39697 1.6665 9.99935C1.6665 14.6017 5.39746 18.3327 9.99984 18.3327C14.6022 18.3327 18.3332 14.6017 18.3332 9.99935C18.3332 5.39697 14.6022 1.66602 9.99984 1.66602Z" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                <path d="M3.55908 15.2874C3.55908 15.2874 5.4166 12.916 9.99992 12.916C14.5832 12.916 16.4408 15.2874 16.4408 15.2874" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
                <path d="M10 10C11.3807 10 12.5 8.88075 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61925 5 7.5 6.11929 7.5 7.5C7.5 8.88075 8.61925 10 10 10Z" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
              </svg>
            </a>
            <div className="account-link">
              
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/files">Files</Link>
                </li>
                <li>
                  <Link to="/collections">Collections</Link>
                </li>
                <li>
                  <Link to="/recipts">Receipts</Link>
                </li>
                <li>
                  <a href="#">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/cart" className="mini-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 4.99935H18.3333L15.8333 13.3327H5L2.5 4.99935ZM2.5 4.99935L1.875 2.91602" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
              <path d="M9.1665 16.25C9.1665 16.9403 8.60684 17.5 7.9165 17.5C7.22615 17.5 6.6665 16.9403 6.6665 16.25" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
              <path d="M14.1665 16.25C14.1665 16.9403 13.6068 17.5 12.9165 17.5C12.2262 17.5 11.6665 16.9403 11.6665 16.25" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
            </svg>
          </Link>
          <div className="hamburger">
            <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 4.16602H17.5H2.5Z" fill="#181818" />
              <path d="M2.5 4.16602H17.5" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
              <path d="M2.5 10H17.5" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
              <path d="M2.5 15.834H17.5" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
            </svg>
            <svg className="close-menu" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
              <path d="M5 5L15 15" style={{stroke:"#181818", strokeWidth:"1.2", strokeLinecap:"round", strokeLinejoin:"round"}} />
            </svg>
          </div>
        </div>
      </div>
    </header>
      </div>
      </>
    )
  }
