import React, { memo } from 'react';

import Routes from '~/routes';

import Container from '~/screens/container/container';
import ErrorBoundary from '~/screens/container/error-boundary';

const App = () => {
    console.log(import.meta.env.MODE);
    return (
        <>
            <ErrorBoundary>
                <Container>
                    <Routes />
                </Container>
            </ErrorBoundary>
        </>
    );
};

export default memo(App);
