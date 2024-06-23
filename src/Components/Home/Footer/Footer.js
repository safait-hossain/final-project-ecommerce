import React from 'react';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="row mt-5 mb-5">
                <div className="col-md-4">
                    <img height="100" width="200" src={logo} alt="" />
                    <p className="mt-3 text-secondary">Safait hossain, 1212 Mohakhali <br/> Dhaka, Bangladesh.</p>
                </div>
                <div className="col-md-2">
                    <ul className="text-uppercase font-weight-bold">Main Menu</ul>
                    <ul><a href="/">Home</a></ul>
                    <ul><a href="/">About</a></ul>
                    <ul><a href="/">Shop</a></ul>
                    <ul><a href="/">Help</a></ul>
                </div>
                <div className="col-md-2">
                    <ul className="text-uppercase font-weight-bold">COMPANY</ul>
                    <ul><a href="/">The Company</a></ul>
                    <ul><a href="/">Careers</a></ul>
                    <ul><a href="/">Press</a></ul>
                </div>
                <div className="col-md-2">
                    <ul className="text-uppercase font-weight-bold">Discover</ul>
                    <ul><a href="/">The Team</a></ul>
                    <ul><a href="/">Our History</a></ul>
                    <ul><a href="/">Brand Motto</a></ul>
                </div>
                <div className="col-md-2">
                    <ul className="text-uppercase font-weight-bold">Find Us On</ul>
                    <ul><a href="www.facebook.com">Facebook</a></ul>
                    <ul><a href="www.twitter.com">Twitter</a></ul>
                    <ul><a href="www.instagram.com">Instagram</a></ul>
                </div>
            </div>
            <hr/>
        </footer>
    );
};

export default Footer;