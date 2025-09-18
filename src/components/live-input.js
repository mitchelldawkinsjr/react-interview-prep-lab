import React, { useState } from 'react'

function LiveInput() {
    const [input, setInput] = useState('');

    const updateInfo = (input) => {
        setInput(input);
    }

    const clearData = () => {
        setInput('');
    }

    return (
        <div>
            <textarea 
            value={input}
            onChange={ (event) => updateInfo(event.target.value)} 
            />

            {input.length > 100 && (
                <span style={{color: 'red'}}>Too many characters!</span>
            )}

            <p>
                count: {input.length}
            </p>

            <button onClick={clearData}> Clear </button>
        </div>
    )
}

export default LiveInput;