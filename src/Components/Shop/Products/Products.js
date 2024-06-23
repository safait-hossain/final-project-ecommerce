import React from 'react';
import './Products.css';

// Redux

import Product from '../Product/Product';
import { connect } from 'react-redux';

const Products = ({ products }) => {
  return (
    <div className="col-md-8 m-auto pt-5">
      <div className="row products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
