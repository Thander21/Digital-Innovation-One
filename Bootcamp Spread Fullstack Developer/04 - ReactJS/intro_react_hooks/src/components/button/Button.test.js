import { render, screen } from '@testing-library/react';
import Button from './Button';

test('render button with text', () => {
  render(<Button>Frase No Jutsu</Button>);

  const textEl = screen.getByText('Frase No Jutsu');

  expect(textEl).toBeInTheDocument();
});
