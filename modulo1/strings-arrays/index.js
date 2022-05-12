// /*1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.*/

// /*let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// /* Irá aparecer o 10 e o 5 */

// /*2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.*/
    
// /*let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// /* Irá aparecer o 10, o 10, e o 10.*/

// /*3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.*/
    
// /*let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

// let p = prompt("Horas trabalhadas por dia?")
// let t = prompt ("Valor do seu salário por dia?")
// alert("voce recebe ${t/p} por hora")*/

// let nome = "Vinicius"
// console.log(nome)
// let idade = 19 
// console.log(idade)
// console.log(typeof nome, idade)

// /* Foi impresso (undefined) pelo fato das variáveis não ter valor.*/

// console.log (prompt("Digite seu nome")) 
// console.log (prompt("Digite sua idade!"))

// /* Foi impresso o nome e a idade certinho pelo fato de ter atribuído valor as variáveis, e também apareceu (string, 19)*/

// console.log("Olá,", nome, "você tem,", idade, "anos!")

// let estáUsandoSapatoAgora = true
// let vaiViajarEsseFimDeSemana = false
// let estáComFrio = false

// let a = 10 
// let b = 25
// c = a 
// a = b 
// b = c   

// console.log(a , b)

// /*let x = prompt("Qual valor do cacho banana?")
// let y = prompt("Qual a quantidade de bananas no cacho?")
// alert(`Voce paga ${x*y} por banana!`)*/

// let x1 = prompt("Qual valor do cacho banana?")
// let y1 = prompt("Qual a quantidade de bananas no cacho?")
// alert(`Voce gastará ${x+y} no cacho!`)
// ###################################################################################################################################


//    AULA 10/05/2022

    // Questão 01

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// R = false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// R = false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// R = true

// console.log("d. ", typeof resultado)

// R = Booleano

//    Questão 02


// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// R = Fiz a alteração, mas fiz depois que vi exemplo de aluno no discord, até então não tinha conseguido achar o erro.

// Exercícios de escrita de código
 
//  Questão 01 - 

// let idadeUsuario =Number(prompt("Digite sua idade!"))
// let idadeDoMelhorAmigo = Number(prompt("Digite a idade do seu melhor amigo(a)!"))

// const resposta = "Sua idade é maior que a do seu melho amigo?"
// console.log(resposta)

// let resultado = idadeUsuario > idadeDoMelhorAmigo
// console.log(resultado)

// const diferente = "A diferença de idade é de:"
// console.log(diferente)

// let diferença = idadeUsuario - idadeDoMelhorAmigo
// console.log(diferença)
 
// Questão 02 - 

// let numeroPar = Number (prompt("Digite um número par!"))

// const restoDaDivisao = numeroPar % 2 
// console.log(restoDaDivisao)

// O padrão foi 0 pelo fato de todo número par ser multiplo de 2.
// O padrão da letra D foi 1, porque todo número impar que for dividido por 2 vai sobrar 1.

// Questão 03 -

// let idade = Number (prompt("Qual sua idade?"))

// const idadeEmMeses = "Idade do usuário em meses: "
// console.log(idadeEmMeses)

// const resposta = idade * 12
// console.log(resposta)  

// const idadeEmDias = "Idade do usuário em dias: "
// console.log(idadeEmDias)

// const resultado = idade * 365
// console.log(resultado)

// const idadeEmHoras = "Idade do usuário em horas: "
// console.log(idadeEmHoras)

// const final = idade * 8760
// console.log(final)

// Questão 04 - 

// let n1 = Number(prompt("Digite aqui um número"))
// let n2 = Number(prompt("Digite aqui outro número!"))

// let resultado = n1 > n2 
// console.log(resultado)

// let igual = n1 === n2
// console.log(igual)

// let divisivel = n1 % n2 ==0
// console.log(divisivel)

// let divisivel2 = n2 % n1 ==0
// console.log(divisivel2)

//##############################################################################################################################################

// AULA 11/05/2022

// QUESTÃO 01-  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa


// let array
// console.log('a. ', array)

// // R = Aparece (a. undefined) porque não nenhum valor atribuido ao array.

// array = null
// console.log('b. ', array)

// // R = Aparece (b. null) porque o valor atribuido ao array é (null).

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// // R = Aparece (c. 3,4,5,6,7,8,9,10,11,12,13) e a quantidade de elementos que tem no array que é (11).

// let i = 0
// console.log('d. ', array[i])

// // R = Aparece (d. 3) porque ele está me indicando qual o elemento que está no indice 0. (Consegui entender após executar o código).

// array[i+1] = 19
// console.log('e. ', array)

// // R = Aparece (e. [3,19,5,6,7,8,9,10,11,12,13]) porque o código está programado para tirar o numero que esta na frente do índice 0 (3) e colocar o 19 no lugar do indice 1 (4).

// const valor = array[i+6]
// console.log('f. ', valor)

// // R = Aparece (f. 9) porque está falando para somar o indice 0 (3) mais 6 que da o resultado de 9.





// QUESTÃO 02- Leia o código abaixo com atenção



// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS  27



// Exercícios de escrita de código

// QUESTÃO 01- 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
             //   Em seguida, Imprima no console a seguinte mensagem:
    
    // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


// const nomeDoUsuario = prompt("Digite seu nome!")
// const emailDoUsuario = prompt("Digite seu email!")
// console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)



//  QUESTÃO 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
// Em seguida, siga os passos:
    
// a) Imprima no console o array completo
    
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
// seguida por cada uma das comidas, **uma embaixo da outra**.

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista


// let arrayDeComida = (`salada, feijão, arroz, strogonoff, macarrão`)
// console.log(arrayDeComida)
// let arrayComidaPreferida = ('Essas são minhas comidas preferidas:\nsalada\nfeijão\narroz\nstrogonoff\nmacarrão')
// console.log(arrayComidaPreferida)
// let perguntaUsuario = prompt("Qual sua comida preferida?")
// let respostaDoUsuario = (arrayDeComida[1] , perguntaUsuario) 

// console.log(respostaDoUsuario)

// Nessa questão 2 eu não consegui fazer a troca do alimento do usuario para o meu, tentei varios comandos e não consegui, e foi a única que não consegui resolver, infelizmente.





// QUESTÃO 3. Faça um programa, seguindo os passos:
    
    // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    // c) Imprima o array no console
    
    // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    // e) Remova da lista o item de índice que o usuário escolheu.
    
    // f) Imprima o array no console
    
   
// let listaDeTarefas = []
// let pergunta1 = prompt("Insira uma tarefa diária")
// let pergunta2 = prompt("Insira mais uma tarefa diária")
// let pergunta3 = prompt("Insira outra tarefa diária")
// listaDeTarefas = [pergunta1, pergunta2, pergunta3]
// console.log(listaDeTarefas)
// let escolhaUsuario = prompt("Escolha a tarefa 1, 2 ou 3")
// listaDeTarefas.splice(escolhaUsuario -1, 1)
// console.log(listaDeTarefas)








