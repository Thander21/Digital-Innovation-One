import { render, screen } from '@testing-library/react';
import App from './pages/App';

test('renders learn react link', () => {
  render(<App />);

  const textEl = screen.getByText(/frases/);
  const imageEl = screen.getByRole('img');
  const buttonEl = screen.getByRole('button');

  expect(textEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});
