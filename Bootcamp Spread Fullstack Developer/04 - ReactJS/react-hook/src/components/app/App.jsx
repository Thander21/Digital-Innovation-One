import './App.css';
import { AddQuantity } from '../addquantity/Addquantity';
//import { SmartCounter } from '../smartcounter/Smartcounter';
//import { Counter } from '../counter/Counter';

function App() {
  return (
    <div>
      <h4>Selecion a Quantidade do Item</h4>;
      {/* <Counter />
      <SmartCounter /> */}
      <AddQuantity />
    </div>
  );
}

export default App;
