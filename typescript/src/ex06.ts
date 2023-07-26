//Implemente uma classe chamada Carro com as seguintes propriedades:
//a. Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
//b. O consumo é especificado no construtor e o nível de combustível inicial é 0.
//c. Forneça um método andar() que simula o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
//d. Forneça um método obterGasolina(), que retorna o nível atual de combustível e forneça um método adicionarGasolina(), para abastecer o tanque.

class Carro {
    private consumoKmLitro: number;
    private qteCombustivel: number;

    constructor(consumoKmLitro: number){
        this.consumoKmLitro = consumoKmLitro;
        this.qteCombustivel = 0;
    }

    public andar(distanciaKm: number){
        const consumoTotal = this.consumoKmLitro * distanciaKm;

        if (consumoTotal > this.qteCombustivel) {
            throw new Error("Não há combustível para esse trajeto");
        }
        this.qteCombustivel -= consumoTotal;
    }

    public obterGasolina(): number {
        return this.qteCombustivel
    }

    public adicionarGasolina(qteLitros: number){
        this.qteCombustivel += qteLitros;
    }
}

const meuFusca = new Carro(15);

meuFusca.adicionarGasolina(20);
console.log(meuFusca.obterGasolina());

meuFusca.andar(100);
console.log(meuFusca.obterGasolina());