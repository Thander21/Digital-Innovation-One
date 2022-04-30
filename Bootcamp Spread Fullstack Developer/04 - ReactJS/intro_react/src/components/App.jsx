import listCustomers from '../components/listCustomers';
import '../styles/App.css';

let hasCustomer = false;

const buttonClean = <button>Limpar</button>;

const custumer = 'Rahman Brussolo';

const showCustomer = () => {
  if (!hasCustomer) return null;
  return <h3>Nome do Cliente: {custumer}</h3>;
};

function renderShowHistory() {
  return <button>Historioco do cliente</button>;
}

const renderShowCustomer = () => {
  hasCustomer = true;
};

const buttonShowCustomer = (
  <button onClick={renderShowCustomer}>Mostar Cliente</button>
);

const renderCustomers = customer => {
  return (
    <li key={`customer${customer.id}`}>
      0{customer.id} - {customer.name}⚡{customer.skils.map(renderSkils)}
    </li>
  );
};

const renderSkils = (skils, index) => {
  return <div id='skils'>- {skils}</div>;
};

//funçção principal que renderiza os components na pagina
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Meu primeiro app React By Rahman Brussolo</p>
        {showCustomer()}
        <div className='butons'>
          {hasCustomer ? renderShowHistory() : buttonShowCustomer}
          {hasCustomer && buttonClean}
        </div>
        <ul>{listCustomers.map(renderCustomers)}</ul>
      </header>
    </div>
  );
}

export default App;
