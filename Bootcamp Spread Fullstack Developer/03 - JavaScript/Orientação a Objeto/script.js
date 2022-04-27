/*
Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

//muitos erros estudar e aprofundar em clasess

class BankAccount {
  constructor(agency, number, type) {
    this.agency = agency;
    this.number = number;
    this.type = type;
    this._balance = 0;

    // get balance(){
    //     return this._balance
    // }

    // set balance(currentBalance) {
    //   return this._balance = currentBalance
    // }

    function withdraw(withdrawAmount) {
      return this._balance - withdrawAmount;
    }

    function deposit(depositAmount) {
      return this._balance + depositAmount;
    }
  }
}

class CheckingAccount extends BankAccount {
  constructor(agency, number, balance, creditCard) {
    super(agency, number, balance);
    this.tipo = 'Conta Corrente';
    this.creditCard = creditCard;
  }

  // get creditCard(){

  // }
  // set creditCard(){

  // }
}

class SavingsAccount extends BankAccount {
  constructor(agency, number) {
    super(agency, number);
    this.tipo = 'Conta Poupança';
  }
}

class UniversityAccount extends BankAccount {
  constructor(agency, number) {
    super(agency, number);
    this.tipo = 'Conata Universitária';
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > 500) {
      return 'Saque não Permitido, limite excedido';
    } else {
      return this._balance - withdrawAmount;
    }
  }
}
