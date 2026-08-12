// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewIndex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewIndex/i);
    expect(titleElement).toBeInTheDocument();
});
