import React from 'react';
import App from "../components/app";
import Pizzas from "../components/pizzas";

export const IndexPage = () =>(
    <App title="Home Page">
      <Pizzas />
    </App>
);

export default IndexPage;
