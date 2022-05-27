<<<<<<< HEAD
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]

 
const limpeza = produtos.filter((produtos) => {
   return produtos.categoria.toLowerCase() === "limpeza"
}) 

const nomesLimpeza = limpeza.map((produtos) => {
    return produtos.nome
})
console.log(nomesLimpeza)
=======
// Exercícios de interpretação de código

// QUESTÃO 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console?


// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)


// R- Está rodando o código e fazendo a soma dos números até o 5.
//    10.


//QUESTÃO 2
// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


// a) O que vai ser impresso no console?

// R- 19,21,23,25,27,30.

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
//  o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0
// for (let numero of lista) {
//   if (numero[i] > 18) {
// 		console.log(numero)
// 	}
// }

//QUESTÃO 3
// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?


// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// R-

// *
// ​ **
// ​ ***
// ​ ****


// ##################################################################################################################################################

//Exercícios de escrita de código

//QUESTÃO 1

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
     
//     c) Por fim, imprima o array com os nomes dos bichinhos no console


// let bichinhosUsuario = Number(prompt("Quantos bichinhos você tem?"))
// let valor = 0
// let nome = ""


// function verificarUser (zero){
//         if(zero === 0){
//             console.log('Que pena! Você pode adotar um pet!')
//         }else
//            while(zero >= valor ){
//              let nomeAnimalUser = prompt("Insira o nome do seu bicho.")
//             console.log(nomeAnimalUser)
//             valor++
//            }

// }
// verificarUser(bichinhosUsuario)


//QUESTÃO 2
//2. Considere que você tenha acesso a um `array`  
// (chamado de 'array original') que é composto somente de números. 
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
// realizando as operações pedidas:

    // const numeros = [22,25,31,37,42,46,50]

// // a) Escreva um programa que **imprime** cada um dos valores
//  do array original.
    
//    function exercicioA(array){
//       for(let exemplo1 of numeros){
//           console.log(exemplo1)
//       }
//    }
// exercicioA(numeros)


// // b) Escreva um programa que **imprime** cada um dos valores
//  do array original divididos por 10

// function exercicioB(array){
//     for(let exemplo2 of numeros){
//     console.log(exemplo2 / 10)
//     }
// }

// exercicioB(numeros)

// // c) Escreva um programa que **crie** um novo array contendo,
//  somente, os números pares do array original e **imprima** esse 
// novo array

// function exercicioC(array){
//     let novaArray = []
//     for(let i = 0; i<array.length; i++){
//         if(array[i] % 2 === 0){
//             novaArray[i] = array[i]
//         }
//     }
// }
// exercicioC(numeros)



// // d) Escreva um programa que **crie** um novo array contendo strings,
//  da seguinte forma: "O elemento do índex `i` é: `numero`". 
//  Depois, **imprima** este novo array.


// function exercicioD(array){
//     let novaArray = []
//     for(let i =0; i < array.length; i++){
//         novaArray[i] = `O elemento do index ${i} é ${array[i]}`
//     } 
//     for(let experimento of novaArray ){
//         console.log(experimento)
//     }
// }
// exercicioD(numeros)

// // e) Escreva um programa que imprima no console o maior e
//  o menor números contidos no array original

// function exercicioE(array){
//     let maior = 0
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > maior){
//             maior = array[i]
//         }
//     }
//     let menor = Infinity
//     for(let i = 0; i < array.length; i++){
//         if(array[i] < menor){
//             menor = array[i]

//         }
//     }
//     console.log(`O maior número é ${maior} e o menor número é ${menor}`)
// }
// exercicioE(numeros)





















>>>>>>> 9bdbaac5e7fd7765436d3a4f8e4efccc5d094264















