import { useState } from 'react';
import useTilg from 'tilg';

const ScreenOne = () => {
    useTilg();
    const [state, setState] = useState(0);

    return (
        <>
            <div>
                <button onClick={() => setState(state + 1)}>
                    Change:{state}
                </button>
            </div>
        </>
    );
};

export default ScreenOne;
