import React, { memo } from 'react';

import Routes from '~/routes';

const App = () => {
    return (
        <>
            <div>
                <Routes />
            </div>
        </>
    );
};

export default memo(App);
