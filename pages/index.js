import React, { Component } from 'react';
import App from "../components/app";
import Pizzas from "../components/pizzas";
import Cart from "../components/cart";

class IndexPage extends Component {
    render() {
        return (
            <App title="Home Page">
              <React.Fragment>
                <Pizzas />
                <Cart />
              </React.Fragment>
            </App>
        );
    }
}

export default IndexPage;
