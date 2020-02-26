import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>Heute ist {new Date().getDay() === 1 ? 'Montag' : 'nicht Montag'}</span>
        <ul>
          {['Tim', 'Struppi'].map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <input type="range" min={0} max={100} />



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
