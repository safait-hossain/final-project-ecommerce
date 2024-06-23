import React from 'react';
import './Showcase.css';
import toy1 from '../../../images/toy1.jpg';
import { connect } from 'react-redux';

import {
    loadCurrentItem,
    addToCart,
} from "../../../redux/Shopping/shopping-actions";
import Product from '../../Shop/Product/Product';

const Showcase = ({ products, addToCart }) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    const randomFiveProducts = shuffled.slice(0, 5);
    const randomFourProducts = randomFiveProducts.slice(1, 5);
    return (
        <section>
            <div className="row mt-5 mb-5 p-3">
                <div className="col-md-4 showcase-left">
                    <img height='520' width='400' src={randomFiveProducts[0].image} alt="" />
                    <div className="caption p-3">
                        <div className="title-price">
                            <h5 className="mt-3">{randomFiveProducts[0].title}</h5>
                            <h5>$ {randomFiveProducts[0].price}</h5>
                        </div>
                        <button onClick={() => addToCart(randomFiveProducts[0].id)} className="add-to-cart-btn text-primary">Add to Cart</button>
                    </div>
                </div>
                <div className="col-md-8 showcase-right">
                    <div className="row">
                        {
                            randomFourProducts.map((product) => (
                                <Product key={product.id} product={product} />
                            ))
                        }
                        {/* <div className="col-md-6">
                            <img height='250' width='410' src={randomFourProducts[1].image} alt="" />
                            <div className="caption p-3">
                                <div className="title-price">
                                    <h5 className="mt-3">{randomFourProducts[1].title}</h5>
                                    <h5>$ {randomFourProducts[1].price}</h5>
                                </div>
                                <button onClick={() => addToCart(randomFourProducts[1].id)} className="add-to-cart-btn text-primary">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img height='250' width='410' src={randomFourProducts[2].image} alt="" />
                            <div className="caption p-3">
                                <div className="title-price">
                                    <h5 className="mt-3">{randomFourProducts[2].title}</h5>
                                    <h5>$ {randomFourProducts[2].price}</h5>
                                </div>
                                <button onClick={() => addToCart(randomFourProducts[2].id)} className="add-to-cart-btn text-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img height='250' width='410' src={randomFourProducts[0].image} alt="" />
                            <div className="caption p-3">
                                <div className="title-price">
                                    <h5 className="mt-3">{randomFourProducts[0].title}</h5>
                                    <h5>$ {randomFourProducts[0].price}</h5>
                                </div>
                                <button onClick={() => addToCart(randomFourProducts[0].id)} className="add-to-cart-btn text-primary">Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img height='250' width='410' src={randomFourProducts[1].image} alt="" />
                            <div className="caption p-3">
                                <div className="title-price">
                                    <h5 className="mt-3">{randomFourProducts[1].title}</h5>
                                    <h5>$ {randomFourProducts[1].price}</h5>
                                </div>
                                <button onClick={() => addToCart(randomFourProducts[1].id)} className="add-to-cart-btn text-primary">Add to Cart</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
};

// export default Showcase;

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Showcase);