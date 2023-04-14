import { useState } from 'react';

import ComponentOne from '~/components/component-one';
// import viteLogo from "/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <p className="m-2 h-4 w-4 bg-blue-400 p-4 text-red-400">
                    hello
                </p>
            </div>
        </>
    );
}

export default App;
