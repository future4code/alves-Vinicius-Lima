import axios from "axios";
import PokeCard from "./components/PokeCard";
import React , {useState, useEffect} from "react";

function App() {

  // Passo 3b
  // Implemente suas variáveis de estado aqui.
  const [pokeList,setPokeList] = useState([])
  const [pokeName,setPokename] = useState("")

  // Passo 3c
  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then((resposta)=>{
       setPokeList(resposta.data.results)
    }).catch((erro)=>{
      console.log(erro)
    })
    
  })

  // componentDidMount = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  //     .then((res) => {
  //       this.setState({ pokeList: res.data.results });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Passo 3a
  const changePokeName = (event) => {
    setPokename(event.target.value)
    // Passo 3d
    // Implementa a função aqui.
  };
const pokeOptions = pokeList.map(pokemon=>{
  return(
    <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
  )
})
  // Passo 3e
  // const pokeOptions = this.state.pokeList.map(pokemon => {
  //   return (
  //     <option key={pokemon.name} value={pokemon.name}>
  //       {pokemon.name}
  //     </option>
  //   );
  // });

  // Passo 4a
const pokemons = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
        {/* Passo 3a */}
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
          {pokeOptions}
          {/* {pokeOptions} */}
        </select>
      </nav>
      <main>
        {pokemons}
      </main>
    </>
  );
};

export default App;
