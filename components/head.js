import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({title = 'Pizza Store :)'}) => (
    <NextHead>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
);

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
