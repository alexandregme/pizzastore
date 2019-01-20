import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import configureStore from '../config/configureStore';
import Layout from "./layout";
import '../styles/style.scss';

const store = configureStore();

const App = ({children, title}) => (
  <Provider store={store}>
    <Layout title={title}>
      {children}
    </Layout>
  </Provider>
);

App.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string
};

export default App;
