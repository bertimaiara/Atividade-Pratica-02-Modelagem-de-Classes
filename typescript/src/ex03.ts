//Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes atributos:
//a. Número da conta
//b. Nome do correntista
//c. Saldo
//Os métodos são os seguintes:
//a) Alterar nome
//b) Deposito
//c) Saque
//No construtor, o saldo é opcional, com valor padrão zero e os demais atributos são obrigatórios. A conta não pode ficar com saldo negativo.

class ContaCorrente {
    public numeroConta: number;
    public nomeCorrentista: string;
    public saldo: number;

    constructor (numeroConta: number, nomeCorrentista: string, saldo?: number){
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = 0;
    }

    public alterarNome(nome: string){
        this.nomeCorrentista = nome;
    }

    public depositar(valor: number){
        this.saldo += valor;
        this.saldo =+ this.saldo;
    }

    public sacar(valor: number){
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.saldo += this.saldo;
        } else {
            throw new Error("Saldo insuficiente");
        }
    }
}

const conta = new ContaCorrente(1, 'Maiara', 100);
console.log(conta);
conta.alterarNome('Alice');
console.log(conta);
conta.depositar(200);
console.log(conta);
conta.sacar(200);
console.log(conta);
conta.sacar(300);
console.log(conta);