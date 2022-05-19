//Exercícios de interpretação de código

//QUESTÃO 01

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//A)
// "Matheus Nachtergaele"
// "Virginia Cavendish"
// "Globo", "14h"

//QUESTÃO 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//A)
// nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"

// nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"

// nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"

//B) 
// Ele fez a copia do objeto citado logo após os três pontos.


//QUESTÃO 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//A)
// false
// undefined

//B)
// Porque ele queria saber se a pessoa era backender e a altura da pessoa
// e backender tem a informação, mas a altura não, por isso deu false e undefined.



// Exercícios de escrita de código

// QUESTÃO 1


//A)

// const informacoes = {
//     nome: "João Pedro",
//     apelidos: ["Joaozinho","Jão Pedro","João Predrin"]

// }

// function dados(informacoes) {
            
//     const procedimento = {
//         nome: "João Pedro",
//         apelidos: ["Joaozinho","Jão Pedro","João Predrin"]
//     }


//     console.log(`Eu sou ${procedimento.nome}, mas pode me chamar de: ${procedimento.apelidos[0]}, ${procedimento.apelidos[1]} ou ${procedimento.apelidos[2]}.`)


// }

// dados()

// //B)

// const novosApelidos = {
//     ...informacoes,
//     apelidos2: ["Bochechudo","Gordinho","Gelado"]
// }

// console.log(novosApelidos)

// console.log(`Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos2[0]},${novosApelidos.apelidos2[1]} ou ${novosApelidos.apelidos2[2]}.`)


// QUESTÃO 2

//A)

// const pessoa1 = {
//     nome: "Leovando",
//     idade: 41,
//     profissao: "Autônomo"
// }

// const pessoa2 = {
//     nome: "Patricia",
//     idade: 26,
//     profissao: "Bancária"
// }

// //B)

// function informacoes(parametro){
// parametro = String (`${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissao}, ${pessoa1.profissao.length}`)
// return parametro 
// }
// let primeiro = informacoes(pessoa1)
// console.log(primeiro)

// function informacoes2(parametro2){
// parametro2 = String (`${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}`)
// return parametro2
// }
// let segundo = informacoes2(pessoa2)
// console.log(segundo)


// QUESTÃO 3

//A)
 
//    { let carrinho = []
     
//      const sacolao = {
//      frutas1: {nome: "Banana", disponibilidade: true},
//      frutas2: {nome: "Maçã", disponibilidade: true},
//      frutas3: {nome: "Goiaba", disponibilidade: true}
//    }
//      console.log(carrinho)
//      console.log(sacolao)

// carrinho.push({nome: "Banana", disponibilidade: true}, {nome: "Maçã", disponibilidade: true}, {nome: "Goiaba", disponibilidade: true})
// console.log(carrinho)

// }



// DESAFIO 
 // QUESTÃO 1 

//  const usuario = ()=>{
//     const nome = prompt("Digite seu nome.")
//     const idade =  prompt("Digite sua idade.")
//     const profissao = prompt("Qual sua profissão?") 

//      let resposta = `Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}`
//      console.log(resposta)
// }

// usuario()


// QUESTÃO 2

// let filmes = () => {

//      let filme1 = {
//         filme: {anoLancamento: 2020, nome: "Velosos e Furiosos 9"}}

//      let filme2 = {   
//         filme: {anoLancamento: 2013, nome: "Gente Grande 2"}
//     }

//     let resposta1 = `O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento > filme2.anoLancamento}` 
//     console.log(resposta1)

//     const resposta2 = `O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento !== filme2.anoLancamento}`
//     console.log(resposta2)
// }

// filmes()




















