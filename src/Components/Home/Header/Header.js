import React from 'react';
import './Header.css';
import toy1 from '../../../images/toy1.jpg';
import { Link } from 'react-router-dom';

const Header = ({ products }) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    const firstThreeProducts = shuffled.slice(0, 3);
    return (
        <header>
            <h3 className="m-5">Make Yourself Better Than Before!</h3>
            <hr/>
            <div className="row m-5">
                <div className="col-md-3"><img height='300' width='300' src={firstThreeProducts[0].image} alt=""/></div>
                <div className="col-md-3"><img height='300' width='300' src={firstThreeProducts[1].image} alt=""/></div>
                <div className="col-md-3"><img height='300' width='300' src={firstThreeProducts[2].image} alt=""/></div>
            </div>
            <Link to="/products"><button className="btn btn-primary m-3">Shop Now</button></Link>
            <hr/>
        </header>
    );
};

export default Header;