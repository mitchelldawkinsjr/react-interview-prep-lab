import React from 'react';
import Prompt from '../prompt';

function SearchFilterPrompt() {
    return (
        <Prompt
            title="Search & Filter Component"
            list={[
                'Create a search input field',
                'Display a list of items (e.g., users, products, posts)',
                'Filter items based on search input in real-time',
                'Implement debouncing to avoid excessive filtering',
                'Show "No results found" when search yields no matches',
                'Highlight matching text in results',
                'Add a "Clear search" button'
            ]}
            concepts="useState, useEffect, useCallback, Debouncing, Array.filter(), String methods"
        />
    );
}

export default SearchFilterPrompt;
