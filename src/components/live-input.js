import React, { useState } from 'react';
import Prompt from './prompt';

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
            <Prompt
                title="Live Input Component"
                list={[
                    'Create a textarea input field',
                    'Display character count in real-time',
                    'Show warning when character limit is exceeded (100+ chars)',
                    'Add a "Clear" button to reset the input',
                    'Update display immediately as user types',
                    'Handle controlled input with onChange events'
                ]}
                concepts="useState, Controlled components, Real-time updates, Conditional rendering, Event handlers, Character counting"
            />
            
            <div style={{ marginTop: '2rem' }}>
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
        </div>
    )
}

export default LiveInput;