import React from 'react';

import ScreenTwo from '~/screens/screen-two';

import ComponentOne from '~/components/component-one';

import { abhay } from '~/actions/actions-one';

import { rana } from '~/reducers/reducer';

// import ComponentOne from '~/components/component-one';

const ScreenOne = () => {
    abhay;
    rana;
    // useState();
    return (
        <>
            <div className="text-red bg-blue-500">
                ScreenOne
                <ScreenTwo />
                <ComponentOne />
            </div>
        </>
    );
};

export default ScreenOne;
