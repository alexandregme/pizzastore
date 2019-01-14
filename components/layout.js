import React from 'react';
import PropTypes from 'prop-types';
import Head from "./head";
import Header from "./header";


const Layout = ({children, title}) => (
    <React.Fragment>
        <Head title={title}/>
        <Header/>
        {children}
    </React.Fragment>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};

export default Layout;
