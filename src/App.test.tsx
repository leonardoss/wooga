import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders title', () => {
    render(<App />);
    expect(screen.getByText('Wooga - Frontend engineer technical test')).toBeInTheDocument();
  });
});
