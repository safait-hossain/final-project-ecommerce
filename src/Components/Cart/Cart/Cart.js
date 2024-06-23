import React, { useState, useEffect } from 'react';
import './Cart.css';

import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  let shipping = 0;
  if (totalPrice > 35) {
    shipping = 0;
  }
  else if (totalPrice > 15) {
    shipping = 4.99;
  }
  else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = (totalPrice * 0.05);
  const grandTotal = totalPrice + shipping + tax;
  const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
  }
  return (
    <div>
      <div className="row cart">
        <div className="cart-items col-md-8">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-summary col-md-4">
          <h3>Summary</h3>
          <hr />
          <div className="cart-summary-item">
            <p>SUBTOTAL: ({totalItems} items) </p>
            <p>$ {totalPrice}</p>
          </div>
          <div className="cart-summary-item">
            <p>SHIPPING: </p>
            <p>$ {shipping}</p>
          </div>
          <div className="cart-summary-item">
            <p>TAXES:</p>
            <p>$ {tax}</p>
          </div>
          <hr />
          <div className="cart-summary-item p-3">
            <p>TOTAL:</p>
            <p>$ {formatNumber(grandTotal)}</p>
          </div>
          <button className="btn btn-primary summary-checkoutBtn">
            Proceed To Checkout
        </button>
        </div>
      </div>
      <footer>
        <div className="row">
          <ul><a href="/">Home</a></ul>
          <ul><a href="/">About</a></ul>
          <ul><a href="/products">Shop</a></ul>
          <ul><a href="/">Help</a></ul>
        </div>
        <p>&copy;eShopBD</p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
