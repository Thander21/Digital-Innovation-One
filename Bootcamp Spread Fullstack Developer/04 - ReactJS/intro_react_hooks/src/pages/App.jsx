//import '../styles/App.css';
import styled from 'styled-components';
import narutoImg from '../images/naruto.png';
import { Quotes } from '../components/quotes/Quotes';
import backgroundImg from '../images/bg.jpeg';
import { getQuote } from '../services/quotesServices/QuotesServices';

function App() {
  const onUpdate = async () => {
    const quote = await getQuote();
  };

  return (
    <Content>
      <Quotes quote={'ok'} speaker={'Speaker'} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt='naruto com uma kunai' />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #282c34;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

export default App;
