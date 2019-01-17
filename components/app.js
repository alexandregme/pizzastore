import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import reducers from '../reducers';
import Layout from "./layout";
import { PIZZAS } from "../__mocks__";

const store = createStore(reducers,{pizzas:PIZZAS},composeWithDevTools(applyMiddleware()));

const App = ({children, title}) => (
  <Provider store={store}>
    <Layout title={title}>
      {children}
    </Layout>
  </Provider>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;
