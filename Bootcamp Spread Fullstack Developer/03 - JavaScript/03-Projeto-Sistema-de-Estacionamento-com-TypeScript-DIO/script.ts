//typescript interface
interface Vehicle {
  model: string;
  plate: string;
  entry: Date | string;
}

//Funçãp para cadastrar os veiculos e fazer toda movimentação no DOM
(function () {
  //variavel com codigo para chamar o query selector do input com  o ID # $ poderia se chamar htmlID
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  //função que calcula o tempo de permanecia do veiculo
  function calcTime(mil: number) {
    const min = Math.floor(mil / 60000);
    const sec = Math.floor(mil % 60000) / 1000;

    return `${min}m : ${sec}s`;
  }

  //funcção para conxão no local storage e as sub funções para salver, excluir, ler e rendereizar
  function courtyard() {
    function read(): Vehicle[] {
      return localStorage.courtyard ? JSON.parse(localStorage.courtyard) : [];
    }

    //salva no local storage
    function save(vehicle: Vehicle[]) {
      localStorage.setItem('courtyard', JSON.stringify(vehicle));
    }

    //adiciona uma linha com os dados do veiculo e salva
    function add(vehicle: Vehicle, salver?: boolean) {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${vehicle.model}</td>
        <td>${vehicle.plate}</td>
        <td>${vehicle.entry}</td>
        <td>
        <button class="delete" data-placa="${vehicle.plate}">X</button>
        </td>
        `;

      row.querySelector('.delete')?.addEventListener('click', function () {
        remove(this.dataset.plate);
      });

      $('#courtyard')?.appendChild(row);

      if (salver) save([...read(), vehicle]);
    }

    //remove uma linha e salva
    function remove(plate: string) {
      const { entry, model } = read().find(vehicle => vehicle.plate === plate);

      const time = calcTime(new Date().getTime() - new Date(entry).getTime());

      if (
        !confirm(`O veiculo ${model} e ${plate} permaneceu por ${time}.
      Deseja Encerrar?`)
      )
        return;

      save(read().filter(vehicle => vehicle.plate !== plate));
      render();
    }

    //renderiza na tela os dados do local storage
    function render() {
      $('#courtyard')!.innerHTML = '';
      const courtyard = read();

      if (courtyard.length) {
        courtyard.forEach(veiculo => add(veiculo));
      }
    }

    return { read, add, remove, save, render };
  }

  courtyard().render();

  $('#register')?.addEventListener('click', () => {
    const model = $('#model')?.value;
    const plate = $('#plate')?.value;

    if (!model || !plate) {
      alert('Modelo e Placa são obrigatórios');
      return;
    }

    courtyard().add({ model, plate, entry: new Date().toISOString() }, true);
  });
})();
