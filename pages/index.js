import React from 'react';
import App from "../components/app";
import Pizzas from "../components/pizzas";
import Cart from "../components/cart";

export const IndexPage = () =>(
    <App title="Home Page">
      <React.Fragment>
        <Pizzas />
        <Cart />
      </React.Fragment>
    </App>
);

export default IndexPage;
