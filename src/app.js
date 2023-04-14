import { useState } from 'react';

import ComponentOne from '~/components/component-one';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="min-h-full">
                <p className=" bg-blue-400 text-black">hello abhay rana</p>
                <h1>this is h1</h1>
                <ComponentOne>
                    <p>hello</p>
                </ComponentOne>
            </div>
        </>
    );
}

export default App;
