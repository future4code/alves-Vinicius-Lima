// Na aula, vimos que os arquivos escritos em Typescript, 
// com sua extensão `.ts` passam por um processo de conversão 
// de typescript para Javascript para que possam ser lidos e executados. 
// Este processo é chamado de **transpilação**. 

// Com a biblioteca `typescript` instalada, temos acesso ao 
// comando `tsc` no terminal. O `tsc` é o comando responsável
// por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript.

// a) Crie um arquivo chamado exercicio-4.ts,
// cole o código abaixo e use comentários para responder as questões.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//--------------------------------------------------------------------------------------------------------------------------------------------------

// b) Como você faria, já com a extensão instalada, 
// para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// R. Usaria o comando TSC ou ia no package.json, criaria um script "start": "tsc && node build/exercicio-4/index.js".

//--------------------------------------------------------------------------------------------------------------------------------------------------

// c) E se este arquivo estivesse dentro de uma pasta chamada src.
//    O processo seria diferente? Se sim, descreva as diferenças.

// No caso teria que ver porque sempre que roda o TSC ele cria uma pasta (build), então se o arquivo
// ainda estivesse na pasta src significa que não funcionou o TSC e então teria que ver o erro que 
// possivelmente poderia está dando.

//--------------------------------------------------------------------------------------------------------------------------------------------------

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só?
//    Caso conheça, explique como fazer.

// R. Existe sim. Se rodasse apenas o TSC sozinho ele já fazia a transpilação de todos os arquivos .ts
//    porém se quisesse fazer um script para isso, é só colocar o caminho do arquivo.

console.log("Exercício 4 finalizado!")