import React, { useState } from 'react';
import Prompt from './prompt';

const animals = {
    'dog' : {
        'facts' : [
            "dog run fast", "known as mans best friend", "loved by all"
        ],
    },
    'cat' : {
        'facts' : [
            "nible as can be", "not liked by many", "great hunters"
        ]
    },
    'Rabbit' : {
        'facts' : [
            "hard to catch", "low in fat", "bounce very fast"
        ],
    }
};

function AnimalFactsApp() {
    const [fact, setFact] = useState('');
    const [selectedAnimal, setSelectedAnimal] = useState('');

    const showFact = (animal) => {
        const facts = animals[animal].facts;
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        setFact(randomFact);
        setSelectedAnimal(animal);
    }

    const clearFact = () => {
        setFact('');
        setSelectedAnimal('');
    }

    return (
        <div style={{padding: '1rem', fontFamily: 'Arial'}}>
            <Prompt
                title="Animal Facts Component"
                list={[
                    'Display buttons for different animals (dog, cat, rabbit)',
                    'When clicked, show a random fact about that animal',
                    'Display the selected animal name and fact',
                    'Add a "Clear" button to hide the fact',
                    'Use object data structure to store animal facts',
                    'Implement random fact selection from arrays'
                ]}
                concepts="useState, Object manipulation, Array methods, Conditional rendering, Event handlers"
            />
            
            <div style={{ marginTop: '2rem' }}>
                <h2> Fun Facts about animals</h2>
            <ul style={{listStyle:'none',padding:0}}>
                {Object.keys(animals).map((animal) => (
                    <li key={animal}>
                        <button onClick={() => showFact(animal)}>{animal}</button>
                    </li>
                ))}
            </ul>

            {fact && (
                <div style={{ marginTop: '1rem'}}>
                    <strong>{selectedAnimal.toUpperCase()}</strong>: {fact}
                    <br />
                    <button onClick={clearFact} style={{marginTop: '0.5rem'}}>Clear</button>
                </div>
            )}
            </div>
        </div>
    )
}

export default AnimalFactsApp;