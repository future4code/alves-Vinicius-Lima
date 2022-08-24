// Observe a função a seguir, escrita em JavaScript:

function obterEstatisticas(numeros: any){

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

   type NumerosEstatistica = {
       maior: number,
       menor:number,
       media:number
    }
    const estatisticas:NumerosEstatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a) Quais são as entradas e saídas dessa função? 
//    Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// R. Entrada: (numeros) / Saída: (estatisticas)

//--------------------------------------------------------------------------------------------------------------------------------------------------

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// type NumerosEstatistica = {
//     maior: number,
//     menor:number,
//     media:number
//  }

//--------------------------------------------------------------------------------------------------------------------------------------------------

// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto
//    com as propriedades **numeros** e **obterEstatisticas**.
//    Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

// R. Abaixo:

type Amostra = {
    numeros: number[],
    obterEstatistica:(()=>{})
}

console.log("Exercício 2 finalizado!")