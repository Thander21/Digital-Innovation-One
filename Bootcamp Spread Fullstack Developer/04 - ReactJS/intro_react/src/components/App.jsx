import '../styles/App.css';

const buttonB = <button>Limpar</button>;
const renderAddCustomer = <button>Cadastrar Cliente</button>;
const custumer = 'Rahman Brussolo';
const hasCustomer = true;

const listCustomers = [
  {
    id: 11,
    name: 'Miguel Yusef',
    skils: ['pt', 'xbox', 'roblox'],
  },
  {
    id: 43,
    name: 'Milla Ohana',
    skils: ['kids'],
  },
  {
    id: 78,
    name: 'Ana Jessica',
    skils: ['venda', 'atendimento'],
  },
  {
    id: 39,
    name: 'Arthur Marinho',
    skils: ['xbox', 'fala'],
  },
  {
    id: 99,
    name: 'Telma Lima',
    skils: ['fastfood', 'casa'],
  },
  {
    id: 29,
    name: 'Antonio',
    skils: ['pesca', 'vizinhaça'],
  },
];

const showCustomer = () => {
  if (!hasCustomer) return null;
  return <h3>Nome do Cliente: {custumer}</h3>;
};

function renderShowHistory() {
  return <button>Historioco do cliente</button>;
}

const renderCustomers = customer => {
  return (
    <li key={`customer${customer.id}`}>
      0{customer.id} - {customer.name}⚡{customer.skils.map(renderSkils)}
    </li>
  );
};

const renderSkils = (skils, index) => {
  return (
    <div id='skils' key={`skils.${index}`}>
      {skils}
    </div>
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
