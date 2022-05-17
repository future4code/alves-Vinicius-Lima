
// Exercícios de interpretação de código

// QUESTÃO 1
// Leia o código abaixo

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


//A)
// R- Pede para o usuário inserir um número, e após o usuário inserir o número
//    as condições que o código passa é que se o número inserido for divisível
//    por 2 e o resto desse número for 0 ai esse usuário passou no teste, caso
//    contrário o usuário não passou no teste.

//B)
// R- Para números PARES

//C)
// R- Para números ÍMPARES



//QUESTÃO 2
//O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//A)
// R- Para ler a fruta que o usuário colocou e se tiver essa fruta 
//    no código acima, ai aparece uma mensagem dizendo o valor da 
//    fruta, e se caso não tiver a fruta, ai qualquer fruta que o
//    usuário colocar vai ter o valor de R$ 5,00.

//B)
// R- "O preço da fruta Maçã é de R$ 2.25"

//C)
// R- "O preço da fruta Pêra é de R$ 5"



//QUESTÃO 3
// Leia o código abaixo:


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


//A)
// R- Está pedindo para o usuário digitar um primeiro número.

//B)
// R- "Esse número passou no teste"
//    Iria dar erro, porque o console.log(menssagem) não está
//    conseguindo chamar a variável mensagem, no caso teria que
//    coloccar o console.log(mensagem) dentro dos colchetes, ai
//    se colocasse 10 apareceria as duas mensagens citadas, e se
//    colocasse -10 não apareceria nada.

//C)
// R- Essa eu respondi na (Letra B).

// ############################################################################################################

// Exercícios de escrita de código

//QUESTÃO 1
// 1. Faça um programa que pergunta ao usuário qual a idade dele
// e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
// a) Faça um `prompt` para receber a idade do 
// usuário e guarde em uma variável.
    
// b) Garanta que essa variável é do tipo `Number`,
//  você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima
//  que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`,
//   caso contrário, imprima `"Você não pode dirigir."`


// let idadeUser = + prompt("Qual sua idade?")

// function verificarIdade (idade) {
    
//     if(idade >= 18){
//         console.log("Você pode dirigir.");
    
//     } else {
//         console.log("Você não pode dirigir.")

//     }    
// }
// verificarIdade(idadeUser)


//QUESTÃO 2
// 2.Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco if/else


// alert ('Informações: \n Digite M para (Matutino) \n Digite V para (Vespertino) \n Digite N para (Noturno)')
// console.log(alert)

//   const periodo = String (prompt("Qual período do dia você estuda?")).toUpperCase()

//       function verificarPeriodo (resposta){
           
//         if(resposta === 'M'){
//             console.log("Bom Dia!");
//         } if(resposta === 'V'){
//             console.log("Boa Tarde!");
//         } if (resposta === 'N'){
//             console.log("Boa Noite!");
//         }
//       }

// verificarPeriodo(periodo)

//QUESTÃO 3
//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.



// alert ('Informações: \n Digite M para (Matutino) \n Digite V para (Vespertino) \n Digite N para (Noturno)')
// console.log(alert)

//   const periodo = String (prompt("Qual período do dia você estuda?")).toUpperCase()

//       function verificarPeriodo (resposta){
        
//         switch(resposta){
//             case 'M':
//                 console.log('Bom Dia!')
//                 break
//             case 'V':
//                 console.log('Boa Tarde!')
//                 break    
//             case 'N':
//                 console.log('Boa Noite!')
//                 break    
//         }
    
//     }

// verificarPeriodo(periodo)


//QUESTÃO 4
//Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero 
// fantasia e se o ingresso está abaixo de 15 reais. Faça um código que 
// pergunta ao usuário qual o gênero de filme que vão assistir e outra 
// pergunta sobre o preço do ingresso, então verifique se seu amigo ou 
// amiga vai topar assistir o filme. Caso positivo, imprima no console 
// a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


// const generoDoFilme = prompt('Qual gênero do filme que você vai assistir?').toLowerCase()
// const precoDoIngresso = + prompt('Qual o valor do ingresso?')

// function verificaFilme (genero,preco){
       
//     if((genero === 'fantasia') && (preco < 15)){
//         console.log('Bom filme!')

//     } else {
//         console.log('Escolha outro filme.')
//     }

// }

// verificaFilme(generoDoFilme,precoDoIngresso)

//################################################################################################################
 
//DESAFIO 1
//Modifique o código do exercício 4 de escrita de código para, 
// antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, 
// pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) 
// e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
// trocando [LANCHINHO] pelo que o usuário colocou no input.


// const generoDoFilme = prompt('Qual gênero do filme que você vai assistir?').toLowerCase()
// const precoDoIngresso = + prompt('Qual o valor do ingresso?')


// function verificaFilme (genero,preco){
       
//     if((genero === 'fantasia') && (preco < 15)){
//         console.log('Bom filme!')
        

//     } else {
//         console.log('Escolha outro filme.')
//     }

// }

// verificaFilme(generoDoFilme,precoDoIngresso)

// const lanchinho = prompt('Qual lanche vai comprar para ver o filme?')
// console.log(`Aproveite sua ${lanchinho}!`)


















































