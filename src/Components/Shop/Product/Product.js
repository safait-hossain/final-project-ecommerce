import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="col-md-6">
      <img height='220' width='410' src={product.image} alt="" />
      <div className="caption">
        <div className="title-price">
          <h5 className="mt-3">{product.title}</h5>
          <h5>$ {product.price}</h5>
        </div>
        <button onClick={() => addToCart(product.id)} className="add-to-cart-btn text-primary">Add to Cart</button>
      </div>
    </div>



    // <div className="product">
    //   <img
    //     className="product__image"
    //     src={product.image}
    //     alt={product.title}
    //   />

    //   <div className="product__details">
    //     <p className="details__title">{product.title}</p>
    //     <p className="details__desc">{product.description}</p>
    //     <p className="details__price">$ {product.price}</p>
    //   </div>

    //   <div className="product__buttons">
    //     <Link to={`/product/${product.id}`}>
    //       <button
    //         onClick={() => loadCurrentItem(product)}
    //         className="buttons__btn buttons__view"
    //       >
    //         View Item
    //       </button>
    //     </Link>
    //     <button
    //       onClick={() => addToCart(product.id)}
    //       className="buttons__btn styles.buttons__add"
    //     >
    //       Add To Cart
    //     </button>
    //   </div>
    // </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
