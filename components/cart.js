import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import CartItem from "./cart-item";
import SummaryCart from "./summary-cart";
import Link from 'next/link';

export const Cart = ({cartItems = []}) => (
  <React.Fragment>
    <div className="card container-cart">
      <div className="card-header">
        <SummaryCart/>
        {
          cartItems.length > 0 &&
          <Link
            href="/checkout"
          >
            <a
              className="btn btn-success"
            >
              Checkout
            </a>
          </Link>
        }
      </div>
      <div className="card-body">
        {
          cartItems.length > 0 ?
          cartItems.map((item,id) => <CartItem key={id} cartItem={item}/>):
          <h2>Your cart is empty, order some pizza :)</h2>
        }
      </div>
    </div>
  </React.Fragment>
);

Cart.propTypes = {
  cartItems: PropTypes.array
};

const mapStateToProps = state => ({
  cartItems: state.cart.items
});

export default connect(
  mapStateToProps
)(Cart);
