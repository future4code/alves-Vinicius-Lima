// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(n1,n2) {
  // implemente sua lógica aqui
  return n1 + n2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem.")
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 

 let mensagem1 = Number(prompt("Digite um número."))
 let mensagem2 = Number(prompt("Digite outro número."))
let area = mensagem1 * mensagem2
console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano que você nasceu"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

let mensagemAno = Number(prompt("Insira o ano atual."))
let mensagemNascimento = Number(prompt("Insira o ano que você nasceu."))

console.log("Idade:", imprimeIdade(mensagemAno , mensagemNascimento), "anos")



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    const imc = peso / (altura * altura)
    return imc


}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 
  const nome = string = prompt("Qual seu nome?")
  const idade = Number = prompt("Qual sua idade?")
  const email = string = prompt("Qual seu email?")
 
  console.log("Meu nome é " + nome + ", tenho "+ idade + " anos, e o meu email é "+ email +".")

}





// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = string = prompt("Digite uma cor.")
  const cor2 = string = prompt("Digite uma outra cor.")
  const cor3 = string = prompt("Digite mais uma cor.")
  
  console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const mensagem = string = prompt("Digite uma palavra")
return (mensagem.toUpperCase())

}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

const valorFinal = custo / valorIngresso

return valorFinal

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const final = string1 >= string2
return final
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
   
   return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
retornaUltimoElemento = array[array.length-1]
return retornaUltimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const final = string1.toUpperCase() === string2.toUpperCase()
  return final

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}