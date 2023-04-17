import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Footer from '~/screens/container/footer';
import Header from '~/screens/container/header';
import Sidebar from '~/screens/container/sidebar';

const Container = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    );
};

export default memo(Container);

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
