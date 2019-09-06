import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerList, {apiData} from './components/PlayerList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('gets an array from api', () => {
  expect(typeof apiData).toBe('Array');
});