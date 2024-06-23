import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/logo.png';
import { connect } from "react-redux";

const Navbar = ({ cart }) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);
    return (

        <nav className="container py-2">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-2">
                    <Link to="/">
                        <img src={logo} alt="logo" className="img-fluid logo" />
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Form className="inline">
                        <input className="search-box" placeholder="Search" type="text" />
                        <button className="btn btn-primary ml-3" type="submit">Submit</button>
                    </Form>
                </div>

                <div className="col-lg-5">
                    <ul className="nav">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Shop</a>
                        </li>
                        <li>
                            <a href="/">Help</a>
                        </li>
                        <li>
                            <Link to="/cart">
                                <div className="cart-container">
                                    <h5>Cart</h5>
                                    <img className="cart-image" src="https://image.flaticon.com/icons/svg/102/102276.svg"
                                        alt="shopping cart" alt="" />
                                    <div className="cart-counter">
                                        {cartCount}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Navbar);