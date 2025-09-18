import React from 'react';
import Prompt from '../prompt';

function ContextPrompt() {
    return (
        <Prompt
            title="Theme Context Component"
            list={[
                'Create a ThemeContext with light/dark theme',
                'Create a ThemeProvider component',
                'Create a custom hook useTheme() to consume context',
                'Create a theme toggle button component',
                'Apply theme styles to multiple components',
                'Persist theme preference in localStorage',
                'Provide default theme value'
            ]}
            concepts="createContext, useContext, Context.Provider, Custom hooks, localStorage, Default values"
        />
    );
}

export default ContextPrompt;
