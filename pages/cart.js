import React, { Component } from 'react';
import App from '../components/app';
import Cart from '../components/cart';

class CartPage extends Component {
    render() {
        return (
            <App title="Cart Page">
                <Cart />
            </App>
        );
    }
}

export default CartPage;
