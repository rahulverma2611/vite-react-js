import React, { memo } from 'react';
import { useLocation } from 'wouter';

const HomeScreen = () => {
    const [locatiion, setLocation] = useLocation();
    return (
        <>
            <div className="flex items-center justify-center">
                This is HomeScreen
            </div>
            <div className="flex flex-col gap-4 w-24 cursor-pointer">
                <button
                    className="bg-blue-500 p-4"
                    onClick={() => setLocation('/about')}
                >
                    Go To About
                </button>
                <button
                    className="bg-blue-500 p-4"
                    onClick={() => setLocation('/contact')}
                >
                    Go To Contact
                </button>
            </div>
        </>
    );
};

export default memo(HomeScreen);
