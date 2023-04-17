import React, { memo } from 'react';
import { useLocation } from 'wouter';

const HomeScreen = () => {
    const [locatiion, setLocation] = useLocation();
    return (
        <>
            <div className="flex items-center justify-center">
                This is HomeScreen
            </div>
            <div className="flex w-24 cursor-pointer flex-col gap-4">
                <button
                    className="bg-blue-500 p-4"
                    onClick={() => setLocation('/about')}
                >
                    Go To About
                </button>
                <button onClick={() => setLocation('/contact')}>
                    Go To Contact
                </button>
            </div>
        </>
    );
};

export default memo(HomeScreen);
