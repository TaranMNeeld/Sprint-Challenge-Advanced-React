import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import ColorToggle from './components/ColorToggle';

function App() {
  return (
    <div className='App'>
      <ColorToggle/>
      <PlayerList/>
    </div>
  );
}

export default App;
