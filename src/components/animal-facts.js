import React, { useState } from 'react';

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
    )
}

export default AnimalFactsApp;