import React from 'react'

const Cart = () => {
  return (
    <div>
       <section className="cart-section">
   <div className="container-fluid">
     <nav className="breadcrumb-nav">
       <ol className="breadcrumb">
         <li className="breadcrumb-item">
           <a href="#">Home</a>
         </li>
         <li className="breadcrumb-item active">Library</li>
       </ol>
     </nav>
     <div className="cart-page-header">
       <h2 className="custom-heading">My Cart</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
     </div>
     <form>
       <div className="cart-wrapper">
         <div className="cart-left-col">
           <div className="cart-left-col-wrapper">
            
             <ul className="cart-item-list">
               <li>
                 <div className="cart-item-image">
                   <a href="#">
                     <img src="assets/images/grid-image5.jpeg"/>
                   </a>
                 </div>
                 <div className="cart-item-text">
                   <h6 className="cart-item-title">Go and Tell</h6>
                   <div className="cart-item-details">
                     <div className="cart-item-price">
                       <span>$39</span>
                     </div>
                     <div className="name">By Pixel Preacher</div>
                   </div>
                 </div>
                 <a href="#" className="remove-button">
                   <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20", viewBox:"0 0 20 20", fill:"none"}}>
                     <path d="M15 5L5 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M5 5L15 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                 </a>
               </li>
               <li>
                 <div className="cart-item-image">
                   <a href="#">
                     <img src="assets/images/grid-image5.jpeg"/>
                   </a>
                 </div>
                 <div className="cart-item-text">
                   <h6 className="cart-item-title">Go and Tell</h6>
                   <div className="cart-item-details">
                     <div className="cart-item-price">
                       <span>$39</span>
                     </div>
                     <div className="name">By Pixel Preacher</div>
                   </div>
                 </div>
                 <a href="#" className="remove-button">
                   <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20", viewBox:"0 0 20 20", fill:"none"}}>
                     <path d="M15 5L5 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M5 5L15 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                 </a>
               </li>
               <li>
                 <div className="cart-item-image">
                   <a href="#">
                     <img src="assets/images/grid-image5.jpeg"/>
                   </a>
                 </div>
                 <div className="cart-item-text">
                   <h6 className="cart-item-title">Go and Tell</h6>
                   <div className="cart-item-details">
                     <div className="cart-item-price">
                       <span>$39</span>
                     </div>
                     <div className="name">By Pixel Preacher</div>
                   </div>
                 </div>
                 <a href="#" className="remove-button">
                   <svg xmlns="http://www.w3.org/2000/svg" style={{width:"20", height:"20", viewBox:"0 0 20 20", fill:"none"}}>
                     <path d="M15 5L5 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M5 5L15 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                 </a>
               </li>
             </ul>
           </div>
          
         </div>
         <div className="cart-right-col">
           <div className="cart-right-col-wrapper">
             <div className="cart-order-summary">
               <h6>Order Summary</h6>
               <ul>
                 <li>
                   <span>Save Your Tears</span>
                   <span className="price">$39</span>
                 </li>
                 <li>
                   <span>Save Your Tears</span>
                   <span className="price">$39</span>
                 </li>
                 <li>
                   <span>Total</span>
                   <span className="price total-price">$78</span>
                 </li>
               </ul>
             </div>
             <div className="cart-order-footer">
               <div className="coupon-container">
                 <h6>Promo Code</h6>
                 <div className="coupon-input-container">
                   <input type="text" name="coupoun" id="" className="coupon-input" value="" placeholder="Enter Promo Code"/>
                   <button type="button" className="coupon-apply-button"> Apply</button>
                 </div>
               </div>
               <button type="button" className="primary-btn checkout-btn"> Checkout </button>
             </div>
           </div>
         </div>
       </div>
     </form>
   </div>
 </section>
 <section className="subscribe-section">
   <div className="container-fluid">
     <div className="subscribe_wrapper">
       <div className="row">
         <div className="col-5">
           <h3>Subscribe Now!</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. </p>
           <a href="#" className="primary-btn">Subscribe Now</a>
         </div>
         <div className="col-7">
           <figure>
             <img src="assets/images/news-image.png" className="desktop-image" />
             <img src="assets/images/mobile-image.png" className="mobile-image"/>
           </figure>
         </div>
       </div>
     </div>
   </div>
 </section>
   
    </div>
  )
}

export default Cart
