import React from 'react';
import Prompt from '../prompt';

function MemoPrompt() {
    return (
        <Prompt
            title="React.memo & useMemo Component"
            list={[
                'Create a parent component with expensive calculations',
                'Create child components that receive props',
                'Use React.memo to prevent unnecessary re-renders',
                'Use useMemo to memoize expensive calculations',
                'Use useCallback to memoize functions passed as props',
                'Add a counter to trigger parent re-renders',
                'Demonstrate when child components do/dont re-render',
                'Show performance difference with/without memoization'
            ]}
            concepts="React.memo, useMemo, useCallback, Performance optimization, Re-render prevention, Dependency arrays"
        />
    );
}

export default MemoPrompt;
