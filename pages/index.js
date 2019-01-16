import React, { Component } from 'react';
import App from "../components/app";
import Pizzas from "../components/pizzas";

const pizzaSizes = ['SMALL', 'MEDIUM', 'LARGE'];

class Index extends Component {
    render() {
        return (
            <App title="Home Page">
                <Pizzas pizzaSizes={pizzaSizes}/>
            </App>
        );
    }
}

export default Index;
