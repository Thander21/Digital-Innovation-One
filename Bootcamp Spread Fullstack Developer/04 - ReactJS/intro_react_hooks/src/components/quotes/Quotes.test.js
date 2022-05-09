import { fireEvent, render, screen } from '@testing-library/react';
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

test('calls a callback when a buttun is pressed', () => {
  const callback = jest.fn();

  render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  expect(callback).toHaveBeenCalledTimes(1);
});
