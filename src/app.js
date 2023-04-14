import { useState } from 'react';

import ComponentOne from '~/components/component-one';
// import viteLogo from "/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="min-h-full">
                <p className=" bg-blue-400 text-black">hello abhay rana</p>
                <h1>this is h1</h1>
            </div>
        </>
    );
}

export default App;
