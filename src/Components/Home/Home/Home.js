import React from 'react';
import Navbar from '../Navbar/Navbar';
import Showcase from '../Showcase/Showcase';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Products from '../../Shop/Products/Products';
import { connect } from 'react-redux';

const Home = ({ products }) => {
    return (
        <div>
            <Header products={products}/>
            <FeaturedProducts products={products} />
            <Newsletter />
            <Showcase products={products}/>
            <About />
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
  
export default connect(mapStateToProps)(Home);