import React from 'react';
import Prompt from '../prompt';

function InfiniteScrollPrompt() {
    return (
        <Prompt
            title="Infinite Scroll Component"
            list={[
                'Create a list that loads more items as user scrolls',
                'Detect when user reaches bottom of the list',
                'Show loading indicator while fetching more data',
                'Prevent duplicate API calls during loading',
                'Handle end of data (no more items to load)',
                'Implement proper cleanup of scroll listeners',
                'Bonus: Add pull-to-refresh functionality'
            ]}
            concepts="useState, useEffect, Intersection Observer API, Event listeners, Scroll detection, API pagination"
        />
    );
}

export default InfiniteScrollPrompt;
