import { render, screen } from '@testing-library/react';
import App from './App';

// jest -> react-testing-library
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});