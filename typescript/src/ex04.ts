//Crie uma classe para representar uma Calculadora. Esta classe deve conter um atributo que servirá para armazenar o histórico das operações e seus respectivos resultados.
//a. Esta classe deve conter as operações de somar, multiplicar, dividir e diminuir;
//b. Esta classe deve iniciar com o histórico vazio;
//c. Esta classe deve conter uma ação para visualizar o histórico.

class Calculadora {
  private historico: { operacao: string; resultado: number }[];

  constructor() {
    this.historico = [];
  }

  public somar(a: number, b: number): number {
    const resultado = a + b;
    this.historico.push({ operacao: `${a} + ${b}`, resultado });
    return resultado;
  }

  public subtrair(a: number, b: number): number {
    const resultado = a - b;
    this.historico.push({ operacao: `${a} - ${b}`, resultado });
    return resultado;
  }

  public multiplicar(a: number, b: number): number {
    const resultado = a * b;
    this.historico.push({ operacao: `${a} * ${b}`, resultado });
    return resultado;
  }

  public dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Não divisível por zero.");
    }
    const resultado = a / b;
    this.historico.push({ operacao: `${a} / ${b}`, resultado });
    return resultado;
  }

  public verHistorico(): void {
    if (this.historico.length === 0) {
      console.log("O histórico está vazio.");
    } else {
      console.log("Histórico das operações:");
      for (const item of this.historico) {
        console.log(`${item.operacao} = ${item.resultado}`);
      }
    }
  }
}

const calculadora = new Calculadora();
console.log(calculadora.somar(1, 2));
console.log(calculadora.subtrair(3, 2));
console.log(calculadora.multiplicar(5, 2));
console.log(calculadora.dividir(6, 2));
calculadora.verHistorico();