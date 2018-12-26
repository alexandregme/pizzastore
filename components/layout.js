import React from 'react';
import Head from "./head";
import Header from "./header";

const Layout = ({children}) => (
    <React.Fragment>
        <Head/>
        <Header/>
        {children}
    </React.Fragment>
);
export default Layout;