import React from "react";
import axios from "axios";


export default class TelaNovaPlaylist extends React.Component{

    state = {
        name: ""
    }
    
       mexendoNome = (event) => {
        this.setState({name: event.target.value})
       }
    
       criandoPlaylist = () => {
        const body = {
            name: this.state.name
        }
         
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,{
            headers:{
                Authorization: "vinicius-peres-alves"
            }
        }).then((resposta)=>{
            alert("Playlist cadastrada com sucesso")
            this.setState({name: ""})
        }).catch((erro)=>{
            alert(erro.response.data.message)
        })
    }

       
  render(){
    return (
        <div>
            <button onClick={this.props.irParaListaPlaylist}> Ir para lista de playlist </button>
            <h2> Nova Playlist </h2>
            <input 
            placeholder={"Nome"}
            value={this.state.name}
            onChange={this.mexendoNome}/>

            <button onClick={this.criandoPlaylist}> Criar </button>
        </div>
    )
  }
}