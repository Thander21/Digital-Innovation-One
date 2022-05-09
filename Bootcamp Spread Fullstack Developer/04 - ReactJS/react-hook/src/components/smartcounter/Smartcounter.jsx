import { useState } from 'react';

export function SmartCounter() {
  //useState retorna um vetor [variavel stateful e uma função amaarada a essa varivel que atualiza ]
  const [counter, increment] = useState(1);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => increment(counter + 1)}>Aumentar</button>
    </>
  );
}
