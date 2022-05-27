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


const valorMedida = (num1,num2) {
         let resultado= num1 * num2
        console.log("A área tem",resultado,"cm")
}

valorMedida(5*2)

















