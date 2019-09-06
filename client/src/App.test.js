import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  render(<App />);
});

test('renders PlayerCards', async () => {
  let { getByText } = render(<App/>);
  getByText(/[name]/i)
  getByText(/[country]/i)
})

test('renders PlayerList component', () => {
  render(document.querySelector('PlayerList'));
 })