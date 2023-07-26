//Crie uma classe que modele uma bola:
//a. Atributos
//  i. Cor
//  ii. Circunferência
//  iii. Material
//b. Métodos
//  i. Trocar Cor
//  ii. Mostrar cor

class Bola {
    public cor: string;
    public circunferencia: number;
    public material: string;

    constructor(cor: string, circunferencia: number, material: string){
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    public trocaCor(): string{
        return this.cor = 'verde';
    }

    public mostraCor(): string{
        return this.cor;
    }
}

const bola = new Bola ('amarelo', 5, 'borracha');
console.log(bola);
console.log(bola.trocaCor());
console.log(bola);
console.log(bola.mostraCor());