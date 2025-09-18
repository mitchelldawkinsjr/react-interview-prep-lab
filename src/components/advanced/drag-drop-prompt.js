import React from 'react';
import Prompt from '../prompt';

function DragDropPrompt() {
    return (
        <Prompt
            title="Drag & Drop Component"
            list={[
                'Create draggable list items',
                'Implement drag start, drag over, and drop handlers',
                'Visual feedback during drag (opacity, cursor changes)',
                'Reorder items in the list',
                'Prevent default browser drag behavior',
                'Handle drag end to clean up visual states',
                'Bonus: Add drag between different lists'
            ]}
            concepts="useState, useEffect, HTML5 Drag API, Event handlers, DataTransfer, Visual feedback"
        />
    );
}

export default DragDropPrompt;
