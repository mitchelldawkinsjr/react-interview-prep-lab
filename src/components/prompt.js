import React from 'react';

function Prompt({title, list, concepts}) {

    return (
        <div style={{border: '1px orange dotted', padding: '1rem'}}>
            <h3>AI Provided Prompt</h3>
            <p>{title}</p>
            <ul>
                {
                    list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
            <p>Concepts tested: {concepts}</p>
        </div>
        
    )
}

export default Prompt;