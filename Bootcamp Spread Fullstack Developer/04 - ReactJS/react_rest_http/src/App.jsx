import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TopicoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid #cecece;
`;

export default function App() {
  const [cientist, setCientist] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras'
    )
      .then(response => response.json())
      .then(data => {
        setCientist(data);
      })
      .catch(e => {
        alert('erro a seguir:' + e);
      });
  }, []);

  return (
    <TopicoBlock>
      <h1>Cienteistas Brasileiras</h1>
      <ul>
        {cientist.map((cientist, index) => {
          <Item key={index}>
            <div>
              <b>{cientist.name}</b>
            </div>
            <div>
              <b>{cientist.area}</b>
            </div>
          </Item>;
        })}
      </ul>
    </TopicoBlock>
  );
}
