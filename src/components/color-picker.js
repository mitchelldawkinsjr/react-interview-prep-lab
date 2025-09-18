import React, { useState } from 'react';
import Prompt from './prompt';

const colors = [
    'red',
    'blue',
    'green',
    'yellow'
]

function ColorPickerApp () {
    const [color, setColor] = useState('');
    const [message, setMessage] = useState('');

    const handleColorDisplay = (selectedColor) => {
        setColor(selectedColor);
        setMessage("You selected: " + color);
    }

    const clearColor = () => {
        setColor('');
        setMessage('');
    }

    return (
        <div>
            <Prompt
            title='Color Picker'
            list={[
                'Display 4 color buttons: Red, Blue, Green, Yellow',
                'A div with that color as the background',
                'A message: “You selected: Green',
                'Add a “Clear” button that hides the color box and message'
            ]}
            concepts={'useState'} />

            {
                colors.map((color) => (
                    <button onClick={() => handleColorDisplay(color)}> {color} </button>
                ))
            }
            
            <h1> {message} </h1>

            { color && (
                <div 
                    style={{ 
                        backgroundColor: color, 
                        height: '100px', 
                        width: '100px'
                    }}> 
                </div>
            )}

           

            <button onClick={clearColor}> Clear </button>
        </div>
    )
}

export default ColorPickerApp;