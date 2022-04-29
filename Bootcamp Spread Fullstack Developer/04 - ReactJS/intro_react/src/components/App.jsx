import '../styles/App.css';

const buttonB = <button>Limpar</button>;
const renderAddCustomer = <button>Cadastrar Cliente</button>;
const custumer = 'Rahman Brussolo';
const hasCustomer = true;

const listCustomers = [
  {
    id: 1,
    name: 'Miguel Yusef',
  },
  {
    id: 2,
    name: 'Milla Ohana',
  },
  {
    id: 3,
    name: 'Ana Jessica',
  },
  {
    id: 4,
    name: 'Arthur Marinho',
  },
  {
    id: 5,
    name: 'Telma Lima',
  },
  {
    id: 6,
    name: 'Antonio',
  },
];

const showCustomer = () => {
  if (!hasCustomer) return null;
  return <h3>Nome do Cliente: {custumer}</h3>;
};

function renderShowHistory() {
  return <button>Historioco do cliente</button>;
}

const renderCustomers = (customer, index) => {
  return (
    <li key={index}>
      0{index} - {customer.name}
    </li>
  );
};

//funçção principal que renderiza os components na pagina
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Meu primeiro app React By Rahman Brussolo</p>
        {showCustomer()}
        <div className='butons'>
          {hasCustomer ? renderShowHistory() : renderAddCustomer}
          {hasCustomer && buttonB}
        </div>
        <ul>{listCustomers.map(renderCustomers)}</ul>
      </header>
    </div>
  );
}

export default App;
