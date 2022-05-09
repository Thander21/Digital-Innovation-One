import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../button/Button';

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <p>"frases aleatorias pegas por api"</p>
      <Quote>{quote}</Quote>
      <Speaker>{speaker}</Speaker>
      <Button onClick={onUpdate}>Frase No Jutsu</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func,
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
`;

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`;
