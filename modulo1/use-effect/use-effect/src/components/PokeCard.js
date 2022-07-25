import axios from "axios";
import React,{useState, useEffect} from "react";

function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemons,setPokemons] = useState([])

  // Passo 4c
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };

  useEffect(()=> {
    pegaPokemon(props.pokeName)
  },[])

  // Passo 4c
  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokeName !== this.props.pokeName) {
  //     this.pegaPokemon(this.props.pokeName);
  //   };
  // };

  useEffect(()=>{
    pegaPokemon(props.pokeName)
  },[props.pokeName])

  // Passo 4c
  // pegaPokemon = (pokeName) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  //     .then((res) => {
  //       this.setState({ pokemon: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const pegaPokemon = (pokeName) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((resposta)=>{
       setPokemons(resposta.data)
    }).catch((erro)=>{
      console.log(erro)
    })
    }

  return (
    <figure>
      {/* Passo 4d */}
      <strong>{pokemons.name && pokemons.name.toUpperCase()}</strong>
      {/* Passo 4d */
       pegaPokemon}
      <p>Peso: {pokemons.weight} KG</p>
      {/* Passo 4d */}
      <p>Tipo: {pokemons.types && pokemons.types[0].type.name}</p>
      {/* Passo 4d */}
      {pokemons.sprites && (
        <img src={pokemons.sprites.front_default} alt={pokemons.name} />
      )}
    </figure>
  );
};

export default PokeCard;
