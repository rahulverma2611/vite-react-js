import PropTypes from 'prop-types';
import React from 'react';
import ReactLogoSvg from '~/assets/react.svg';

import ScreenOne from '~/screens/screen-one';

const ComponentOne = ({ children }) => {
    return (
        <>
            <div className="bg-blue-400 text-red-500">ComponentOne</div>
            {children}
            <ReactLogoSvg />
            <ScreenOne />
        </>
    );
};

ComponentOne.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ComponentOne;
