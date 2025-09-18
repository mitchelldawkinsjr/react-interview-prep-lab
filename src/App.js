import React, { useState } from 'react';
import AnimalFactsApp from './components/animal-facts';
import ColorPicker from './components/color-picker';
import LiveInput from './components/live-input';
import TodoList from './components/todo-list';
import FetchUser from './components/fetch-user';
import Counter from './components/counter';
import TimerPrompt from './components/advanced/timer-prompt';

const appStyles = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '0',
  margin: '0',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
  minHeight: '100vh',
};

const headerStyles = {
  textAlign: 'center',
  marginBottom: '3rem',
  color: 'white',
};

const titleStyles = {
  fontSize: '3.5rem',
  fontWeight: '800',
  margin: '0 0 1rem 0',
  background: 'linear-gradient(45deg, #fff, #f0f8ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
};

const subtitleStyles = {
  fontSize: '1.2rem',
  opacity: '0.9',
  fontWeight: '300',
  margin: '0',
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
  marginBottom: '3rem',
};

const cardStyles = {
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
};

const cardHoverStyles = {
  transform: 'translateY(-4px)',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
};

const cardHeaderStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
  paddingBottom: '1rem',
  borderBottom: '2px solid #f0f0f0',
};

const cardNumberStyles = {
  background: 'linear-gradient(45deg, #667eea, #764ba2)',
  color: 'white',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  marginRight: '1rem',
  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
};

const cardTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#333',
  margin: '0',
};

const footerStyles = {
  textAlign: 'center',
  color: 'white',
  opacity: '0.8',
  fontSize: '0.9rem',
  marginTop: '3rem',
  padding: '2rem 0',
};

const components = [
  { id: 1, title: 'Animal Facts', component: AnimalFactsApp, emoji: '🐾' },
  { id: 2, title: 'Color Picker', component: ColorPicker, emoji: '🎨' },
  { id: 3, title: 'Live Input', component: LiveInput, emoji: '⌨️' },
  { id: 4, title: 'Todo List', component: TodoList, emoji: '✅' },
  { id: 5, title: 'Fetch User', component: FetchUser, emoji: '👤' },
  { id: 6, title: 'Counter', component: Counter, emoji: '🔢' },
  { id: 7, title: 'Timer Prompt', component: TimerPrompt, emoji: '⏱️' },
];

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={appStyles}>
      <div style={containerStyles}>
        <header style={headerStyles}>
          <h1 style={titleStyles}>🧠 React Interview Gym</h1>
          <p style={subtitleStyles}>
            Master React concepts through hands-on practice and real interview scenarios
          </p>
        </header>

        <div style={gridStyles}>
          {components.map(({ id, title, component: Component, emoji }) => (
            <div
              key={id}
              style={{
                ...cardStyles,
                ...(hoveredCard === id ? cardHoverStyles : {}),
              }}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyles}>
                <div style={cardNumberStyles}>{id}</div>
                <h2 style={cardTitleStyles}>
                  {emoji} {title}
                </h2>
              </div>
              <Component />
            </div>
          ))}
        </div>

        <footer style={footerStyles}>
          <p>
            🚀 Built for React developers preparing for technical interviews
          </p>
          <p>
            Practice, learn, and master React concepts with real-world examples
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;