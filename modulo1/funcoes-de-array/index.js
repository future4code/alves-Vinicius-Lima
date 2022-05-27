<<<<<<< HEAD
=======
//Exercícios de interpretação de código

// 1 - Leia o código abaixo


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


//   A) O que vai ser impresso no console?

//R- Irá aparecer o nome da pessoa e o apelido (item), 
//   Irá aparecer qual o indice de cada nome (index),
//   Irá aparecer o array completo novamente (array).


// 2 - Leia o código abaixo


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)


//   A) O que vai ser impresso no console?

//R- Irá aparecer "Amanda Rangel"/ "Laís Petra"/ "Letícia Chijo".


// 3 - Leia o código abaixo


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)


//   A) O que vai ser impresso no console?

//R- Irá aparecer "Mandi"/ "Laura".

//###################################################################################################################################################

// Exercícios de escrita de código

// 1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// //  a) Crie um novo array que contenha apenas o nome dos doguinhos


// const nomePets = pets.map((pets) => {
//     return pets.nome
// })

// console.log(nomePets)


// // b) Crie um novo array apenas com os cachorros salsicha

// const racaPets = pets.filter((pets) => {
// return pets.raca.toLowerCase() === "salsicha"
// })

// console.log(racaPets)

// // c) Crie um novo array que possuirá mensagens para enviar para
// //  todos os clientes que são poodles. A mensagem deve ser:
// //   "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


// const racaPoodle = pets.filter((pets) => {
//     return pets.raca.toLowerCase() === "poodle"
// })

// const mensagemTosa = racaPoodle.map((pets) => {
//     return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)
// })


// // 1 - Dado o seguinte array de produtos, 
// // realize as operações pedidas nos itens abaixo utilizando as
// //  funções de array map e filter:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// //  a) Crie um novo array que contenha apenas o nome de cada item

//   const itens = produtos.map((produtos) =>{
//       return produtos.nome
//   })

// console.log(itens)


// //  b) Crie um novo array que contenha um objeto com o nome e o 
// //  preço de cada item, aplicando 5% de desconto em todos eles


// //  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas


// const bebidasEx = produtos.filter((produtos) => {
//     return produtos.categoria.toLowerCase() === "bebidas"

// })
// console.log(bebidasEx)


// //  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
 
// const ype = produtos.filter((produtos) => {
//     return produtos.nome.includes("Ypê")
// })
//      console.log(ype)
 
// //  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// //  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


// const fraseYpe = produtos.filter((produtos) => {
//     return produtos.nome.includes("Ypê")
// })

// const mensagem = fraseYpe.map((produtos) => {
//     return console.log(`Compre ${produtos.nome} por R$ ${produtos.preco}`)
// })





























































>>>>>>> 9bdbaac5e7fd7765436d3a4f8e4efccc5d094264




<<<<<<< HEAD
function checaNumeroPrimo(n) {
    let divisores = 0
    
    for (let i = 1; i <= n; i++)
    if (n % i == 0) {
    divisores++;
    }
    
    if (divisores == 2){
    return 'É primo';
    } else {
    return 'Não é primo';
    }
    }

checaNumeroPrimo()
=======

>>>>>>> 9bdbaac5e7fd7765436d3a4f8e4efccc5d094264






