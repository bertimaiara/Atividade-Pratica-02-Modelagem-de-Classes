//Faça um programa completo utilizando classes e métodos que:
//a. Possua uma classe chamada BombaCombustivel, com no mínimo esses atributos:
//  i. tipoCombustivel;
//  ii. valorLitro;
//  iii. quantidadeCombustivel;
//b. Possua no mínimo esses métodos:
//  i. abastecerPorValor() – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo.
//  ii. abastecerPorLitro() – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
//  iii. alterarValor() – altera o valor do litro do combustível.
//  iv. alterarCombustivel() – altera o tipo do combustível.
//  v. alterarQuantidadeCombustivel() – altera a quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. Não deve ser possível abastecer se não tiver gasolina suficiente na bomba.

class BombaCombustivel {
    private tipoCombustivel: string;
    private valorLitro: number;
    private quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number){
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    //método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
    public abastecerPorValor(valor: number): number{
        const quantidadeLitros = valor / this.valorLitro;

        if (quantidadeLitros > this.quantidadeCombustivel) {
            throw new Error("Combustível insuficiente na bomba");
        }
        this.quantidadeCombustivel -= quantidadeLitros;
        return quantidadeLitros;
    }
    
    //método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
    public abastecerPorLitro(litros: number): number{
        const valorAPagar = litros * this.valorLitro;
        if (litros > this.quantidadeCombustivel) {
            throw new Error("Combustível insuficiente na bomba");   
        }
        this.quantidadeCombustivel -= litros;
        return valorAPagar;
    }

    //altera o valor do litro do combustível.
    public alterarValor(novoValor: number){
        this.valorLitro = novoValor;
    }

    //altera o tipo do combustível.
    public alterarCombustivel(novoTipoDeCombustivel: string){
        this.tipoCombustivel = novoTipoDeCombustivel;
    }

    //altera a quantidade de combustível restante na bomba.
    public alterarQuantidadeCombustivel(novaQuantidade: number){
        this.quantidadeCombustivel = novaQuantidade;
    }
}

const bomba = new BombaCombustivel('Gasolina', 4, 500);

console.log(bomba);

console.log(bomba.abastecerPorValor(50));
console.log(bomba.abastecerPorLitro(32));

bomba.alterarCombustivel('Diesel');
bomba.alterarValor(5);
bomba.alterarQuantidadeCombustivel(300);
console.log(bomba);

console.log(bomba.abastecerPorValor(100));
console.log(bomba.abastecerPorLitro(25));