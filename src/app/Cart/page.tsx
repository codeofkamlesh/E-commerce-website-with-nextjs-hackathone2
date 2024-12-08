import React from 'react'
import Image from 'next/image';
import '@/styles/Cart.css';

const Cart = () => {
  return (
   <>
   <div className="middle-container">
   <div className="container">
<div className="bag">
  <h2>Bag</h2>
  <div className="item">
    <Image
      src="/orchair.png"
      alt="Library Stool Chair"
      width={120}
      height={120}
      className="itemImage"
    />
    <div className="item-details">
      <h3>Library Stool Chair</h3>
      <p>Ashen Slate/Cobalt Bliss</p>
      <p>Size: L    Quantity: 1</p>
    </div>
    <div className="item-actions">
      <i className="far fa-heart"></i>
      <i className="far fa-trash-alt"></i>
    </div>
    <div className="item-price">MRP: $99</div>
  </div>
  <div className="item">
    <Image
      src="/Frame.png"
      alt="Library Stool Chair"
      width={120}
      height={120}
      className="itemImage"
    />
    <div className="item-details">
      <h3>Library Stool Chair</h3>
      <p>Ashen Slate/Cobalt Bliss</p>
      <p>Size: L    Quantity: 1</p>
    </div>
    <div className="item-actions">
      <i className="far fa-heart"></i>
      <i className="far fa-trash-alt"></i>
    </div>
    <div className="item-price">MRP: $99</div>
  </div>
</div>
<div className="summary">
  <h2>Summary</h2>
  <p>
    Subtotal
    <span>$198.00</span>
  </p>
  <p>
    Estimated Delivery &amp; Handling
    <span>Free</span>
  </p>
  <hr />
  <p className="total">
    Total
    <span>$198.00</span>
  </p>
  <button>Member Checkout</button>
</div>
</div>
</div>
   </>
  );
}

export default Cart