import { fireEvent, render, screen } from '@testing-library/react';
import App from './pages/App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const response = { speaker: 'speaker', quote: 'teste quote' };

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx)) => {
      return res(ctx.json(response));
  }
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(()=> server.close())


test('renders learn react link', () => {
  render(<App />);

  const textEl = screen.getByText(/frases/);
  const imageEl = screen.getByRole('img');
  const buttonEl = screen.getByRole('button');

  expect(textEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});

test('calls API on button click ande update its text', async () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  const quoteEl = await screen.findAllByAltText.getByText(response.quote)

  expect(quoteEl).toBeInTheDocument();

});
