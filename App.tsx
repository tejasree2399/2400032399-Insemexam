import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import './styles/globals.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Welcome to the Student Theme App</h1>
            <ThemeToggle />
        </div>
    );
};

export default App;