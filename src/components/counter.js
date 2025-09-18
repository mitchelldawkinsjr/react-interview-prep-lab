import React, { useState } from 'react';
import Prompt from './prompt';

function Counter() {
    const [count, setCount] = useState(0);

    const addBtn = () => {
        setCount(count + 1);
    }

    const subtractBtn = () => {
        setCount(count - 1);
    }

    const resetBtn = () => {
        setCount(0);
    }

    return (
        <>
            <Prompt
                title="Counter Component"
                list={[
                    'Display current count value',
                    'Increment button (+1)',
                    'Decrement button (-1)',
                    'Reset button (set to 0)',
                    
                ]}
                concepts="useState, Event Handlers, Conditional Styling"
            />
            
            {count}
            <button onClick={addBtn}>+1</button>
            <button onClick={subtractBtn}>-1</button>
            <button onClick={resetBtn}>Reset</button> 
        </>
    );
}

export default Counter;
