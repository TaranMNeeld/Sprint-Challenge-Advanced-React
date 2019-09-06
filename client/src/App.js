import React from 'react';
import './App.scss';
import PlayerList from './components/PlayerList';
import {useInvertedColors} from './hooks/useInvertColors';

function App() {

  const [invert, setInvert] = useInvertedColors(false);

    const toggle = e => {
        e.preventDefault();
        setInvert(!invert);
    }

  return (
    <div className='App'>
      <button className='toggle-btn' onClick={toggle}>Invert Colors</button>
      <PlayerList/>
    </div>
  );
}

export default App;
