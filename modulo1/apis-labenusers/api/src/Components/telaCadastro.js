import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component{
    state={
        name: "",
        email: ""
    }

    mexendoNome = (event) => {
        this.setState({name: event.target.value})
    }
    
    mexendoEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazendoCadastro = () => {
     const body = {
        name: this.state.name,
        email: this.state.email
     }

     axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" ,body,{
        headers: {
            Authorization: "vinicius-peres-alves"
        }

     }).then((resposta) => {
        alert("Usuário(a) cadastrado com sucesso")
        this.setState({name: "", email: ""})
     })
     .catch((erro) => {
        alert(erro.response.data.message)
     })
    }

    render() {
        return (
            <div> 
          <button onClick={this.props.irParaLista}> Ir para lista de usuários</button>
          <h2> Cadastro </h2>  
          <input 
          placeholder={"Nome"}
          value={this.state.name}
          onChange={this.mexendoNome}/>    

          <input
           placeholder={"Email"}
           value={this.state.email}
           onChange={this.mexendoEmail}/>

          <button onClick={this.fazendoCadastro}> Cadastrar </button>    
           </div>
        )
    }
}