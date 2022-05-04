import { render, screen } from '@testing-library/react';
import { Quotes } from './Quotes';

const quote = 'test quote';
const speaker = 'random speaker';

test('render received quote, speaker anda a button', () => {
  render(<Quotes quote={quote} speaker={speaker} />);

  const quoteEL = screen.getByText(quote);
  const speakerEL = screen.getByText(speaker);
  const buttonEl = screen.getByRole('button');

  expect(quoteEL).toBeInTheDocument();
  expect(speakerEL).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});
