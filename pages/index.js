import React, { Component } from 'react';
import App from "../components/app";
import Pizzas from "../components/pizzas";
import Cart from "../components/cart";

const pizzaSizes = ['SMALL', 'MEDIUM', 'LARGE'];

class Index extends Component {
    render() {
        return (
            <App title="Home Page">
              <React.Fragment>
                <Pizzas pizzaSizes={pizzaSizes}/>
                <Cart cartItems={pizzaSizes}/>
              </React.Fragment>
            </App>
        );
    }
}

export default Index;
