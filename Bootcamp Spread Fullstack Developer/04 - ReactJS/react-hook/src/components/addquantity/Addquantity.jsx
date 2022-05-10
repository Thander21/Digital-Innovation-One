import { useState, useEffect } from 'react';
import styled from 'styled-components';

export function AddQuantity() {
  const [quantity, setQuantity] = useState(0);
  const [buttonZero, setButtonZero] = useState('#a8a8a876');
  const coin = 0;

  useEffect(() => {
    document.getElementById('coin').innerHTML = 2.5 * quantity;
  }, [quantity]);

  const ButtonMinus = styled(Button)`
    color: ${buttonZero};
  `;

  function decrease() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }

    if (quantity < 2) {
      setButtonZero('#a8a8a876');
    }
  }

  function increase() {
    setQuantity(quantity + 1);
    setButtonZero('red');
  }

  return (
    <>
      <Content>
        <ButtonMinus onClick={decrease}>-</ButtonMinus>
        <p>{quantity}</p>
        <ButtonAdd onClick={increase}>+</ButtonAdd>
        <Button onClick={() => setQuantity(0)}>Limpar</Button>
      </Content>
      <StyledCoin>
        <p>Valor R$ </p>
        <p id='coin'>${coin}</p>
      </StyledCoin>
    </>
  );
}

const Content = styled.div`
  margin: 20px;
  max-width: 150px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  border: 3px solid #a8a8a876;
`;

const Button = styled.button`
  padding: 0 20px;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
`;

const ButtonAdd = styled(Button)`
  color: blue;
`;

const StyledCoin = styled.div`
  display: flex;
`;
