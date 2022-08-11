// a) Crie uma variável minhaString do tipo string e atribua um valor a ela.
//    Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = ""

// R. Quando atruibui uma número dá erro, porque a variável é do tipo string.

//--------------------------------------------------------------------------------------------------------------------------------------------------

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
//    Como fazer para que essa variável também aceite strings?
//    Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 54

// R. Basta colocar um | para que aceite dois tipos de valor.

//--------------------------------------------------------------------------------------------------------------------------------------------------

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris.
//    Utilize um enum para isso.
 
enum Cores {
    VERMELHO = "vermelho",
    ROSA = "rosa",
    AZUL = "azul",
    AMARELO = "amarelo",
    VERDE = "verde",
    ROXO = "roxo"
}

//--------------------------------------------------------------------------------------------------------------------------------------------------

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// * `nome`, que é uma string;

// * `idade`, que é um número;

// * `corFavorita`, que é uma string.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}


// Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

const pessoa1 : Pessoa = {
    nome:"Vinicius",
    idade: 19,
    corFavorita: Cores.VERMELHO
}

const pessoa2 : Pessoa = {
    nome:"Marcela",
    idade: 28,
    corFavorita: Cores.ROSA
}

const pessoa3 : Pessoa = {
    nome:"Leonardo",
    idade: 45,
    corFavorita: Cores.VERDE
}
console.log(pessoa1,pessoa2,pessoa3)
console.log("Exercício 1 finalizado!")