import React from 'react';
import Prompt from '../prompt';

function CustomHookPrompt() {
    return (
        <Prompt
            title="Custom Hook - useApi"
            list={[
                'Create a custom hook called useApi',
                'Hook should accept a URL parameter',
                'Return loading, data, and error states',
                'Automatically fetch data when URL changes',
                'Handle loading states during fetch',
                'Handle error states for failed requests',
                'Provide a refetch function to manually trigger fetch',
                'Clean up pending requests on unmount'
            ]}
            concepts="Custom hooks, useState, useEffect, async/await, fetch/axios, AbortController, Dependency arrays"
        />
    );
}

export default CustomHookPrompt;
