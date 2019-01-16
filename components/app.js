import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import reducers from '../reducers';
import Layout from "./layout";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

const App = ({children, props}) => (
  <Provider store={store}>
    <Layout {...props}>
      {children}
    </Layout>
  </Provider>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;
