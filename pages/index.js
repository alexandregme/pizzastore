import React, { Component } from 'react';
import Layout from '../components/layout';
import Pizzas from "../components/pizzas";

const pizzaSizes = ['SMALL', 'MEDIUM', 'LARGE'];

class Index extends Component {
    render() {
        return (
            <Layout title="Home Page">
                <Pizzas pizzaSizes={pizzaSizes}/>
            </Layout>
        );
    }
}

export default Index;
