//Crie uma classe Contador, que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer métodos que devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Contador {
    private valor: number;

    constructor(){
        this.valor = 0;
    }

    public zerar(){
        this.valor = 0;
    }

    public incrementar(){
        this.valor++
    }

    public retornarValor(): number {
        return this.valor;
    }
}

const contador = new Contador();

contador.incrementar();
contador.incrementar();
console.log(contador.retornarValor());
contador.zerar();
console.log(contador.retornarValor());