// TODO: Melhorar o app criando um objeto para enviar dentro da função, trabalhando melhor o conceito de obj
// adicionar o compo tempo de permanecia
//Funçãp para cadastrar os veiculos e fazer toda movimentação no DOM
(function () {
    var _a;
    //variavel com codigo para chamar o query selector do input com  o ID # $ poderia se chamar htmlID
    const $ = (query) => document.querySelector(query);
    //função que calcula o tempo de permanecia do veiculo
    function calcTime(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor(mil % 60000) / 1000;
        return `${min}m : ${sec}s`;
    }
    //funcção para conxão no local storage e as sub funções para salver, excluir, ler e rendereizar
    function courtyard() {
        function read() {
            return localStorage.courtyard ? JSON.parse(localStorage.courtyard) : [];
        }
        //salva no local storage
        function save(vehicle) {
            localStorage.setItem('courtyard', JSON.stringify(vehicle));
        }
        //adiciona uma linha com os dados do veiculo e salva
        function add(vehicle, salver) {
            var _a, _b;
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${vehicle.model}</td>
        <td>${vehicle.plate}</td>
        <td>${vehicle.entry}</td>
        <td>
        <button class="delete" data-placa="${vehicle.plate}">X</button>
        </td>
        `;
            (_a = row.querySelector('.delete')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                remove(this.dataset.plate);
            });
            (_b = $('#courtyard')) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salver)
                save([...read(), vehicle]);
        }
        //remove uma linha e salva
        function remove(plate) {
            const { entry, model } = read().find(alemente => alemente.plate === plate);
            const time = calcTime(new Date().getTime() - new Date(entry).getTime());
            if (!confirm(`O veiculo ${model} e ${plate} permaneceu por ${time}.
      Deseja Encerrar?`))
                return;
            save(read().filter(alemente => alemente.plate !== plate));
            render();
        }
        //renderiza na tela os dados do local storage
        function render() {
            $('#courtyard').innerHTML = '';
            const courtyard = read();
            if (courtyard.length) {
                courtyard.forEach(veiculo => add(veiculo));
            }
        }
        return { read, add, remove, save, render };
    }
    courtyard().render();
    (_a = $('#register')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const model = (_a = $('#model')) === null || _a === void 0 ? void 0 : _a.value;
        const plate = (_b = $('#plate')) === null || _b === void 0 ? void 0 : _b.value;
        if (!model || !plate) {
            alert('Modelo e Placa são obrigatórios');
            return;
        }
        courtyard().add({ model, plate, entry: new Date().toISOString() }, true);
    });
})();
