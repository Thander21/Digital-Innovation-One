import { useState, useEffect } from 'react';
import styled from 'styled-components';

export function AddQuantity() {
  const [quantity, setValue] = useState(0);
  const [buttonZero, setButtonZero] = useState('#a8a8a876');
  const coin = 0;

  useEffect(() => {
    document.getElementById('coin').innerHTML = 2.5 * quantity;
  }, [quantity]);

  const ButtonMinus = styled.button`
    padding: 0 20px;
    background: none;
    border: none;
    font-weight: 700;
    font-size: 30px;
    cursor: pointer;
    color: ${buttonZero};
  `;

  function decrease() {
    if (quantity > 0) {
      setValue(quantity - 1);
    }

    if (quantity < 2) {
      setButtonZero('#a8a8a876');
    }
  }

  function increase() {
    setValue(quantity + 1);
    setButtonZero('red');
  }

  return (
    <>
      <Content>
        <ButtonMinus onClick={decrease}>-</ButtonMinus>
        <p>{quantity}</p>
        <ButtonAdd onClick={increase}>+</ButtonAdd>
      </Content>
      <StyledCoin>
        <p>Valor R$ </p>
        <p id='coin'>${coin}</p>
        <ButtonAdd onClick={() => setButtonZero(0)}>Limpar</ButtonAdd>
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

const ButtonAdd = styled.button`
  padding: 0 20px;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
  color: blue;
`;

const StyledCoin = styled.div`
  display: flex;
`;
