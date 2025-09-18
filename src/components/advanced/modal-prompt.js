import React from 'react';
import Prompt from '../prompt';

function ModalPrompt() {
    return (
        <Prompt
            title="Modal Component"
            list={[
                'Create a modal that can be opened/closed',
                'Modal should have a backdrop that closes modal when clicked',
                'Escape key should close the modal',
                'Modal should be rendered in a portal (outside normal DOM hierarchy)',
                'Focus should be trapped within the modal when open',
                'Modal should have a close button (X)',
                'Prevent body scroll when modal is open'
            ]}
            concepts="useState, useEffect, createPortal, Event listeners, Focus management, CSS positioning"
        />
    );
}

export default ModalPrompt;
