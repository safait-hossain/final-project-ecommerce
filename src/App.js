import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';

import Navbar from './Components/Home/Navbar/Navbar';
import Products from './Components/Shop/Products/Products';
import Cart from './Components/Cart/Cart/Cart';
import Home from './Components/Home/Home/Home';

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/ecommerce/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};
export default connect(mapStateToProps)(App);
