import React, { useEffect, useState } from 'react';
import Prompt from '../prompt';

function TimerPrompt() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval( () => {
                setSeconds(prevSec => prevSec + 10)
            }, 10);
        }

        return () => clearInterval(intervalId);
    },[isRunning])

    return (
        <>
            <Prompt
            title="Timer/Stopwatch Component"
            list={[
                'Create a timer that counts up from 00:00:00',
                'Start/Stop/Pause functionality',
                'Reset button to return to 00:00:00',
                'Display time in MM:SS:MS format',
                'Use useEffect with setInterval for timing',
                'Clean up interval on component unmount',
                'Bonus: Add lap/split time functionality'
            ]}
            concepts="useState, useEffect, setInterval, clearInterval, Component cleanup, Time formatting"
            />
            <div style={{margin: '2em'}}>
                {seconds}
                <span style={{margin: '0 2em'}} ></span>
                <button onClick={ () => {setIsRunning(!isRunning)}}>{isRunning ? 'Stop' : 'Start' }</button>
                <button onClick={ () => setSeconds(0) }>reset</button>            
            </div>
            
        </>        
    );
}

export default TimerPrompt;
