import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
 border: 1px solid red;
 padding: 10px;
 margin: 10px;
 width: 300px;
 display: flex;
 justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component {

    state={
      usuarios: []
    }

    componentDidMount() {
       this.pegarUsuario()
    }

    pegarUsuario = () => {
        axios.get ("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" , {
            headers: {
            Authorization: "vinicius-peres-alves"
        }
        })
        .then((resposta) => {
          this.setState({usuarios: resposta.data})
        }).catch((erro => {
            alert ("Problema detectado, tente novamente.")
        }))

    }

    deletarUsuario = (id) => {
       axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
        headers:{
            Authorization: "vinicius-peres-alves"
        }
       }).then((resposta) => {
            alert("Usuário(a) deletado com sucesso")
            this.pegarUsuario()
       }).catch((erro)=>{
            alert("Erro detectado, tente novamente.")        
    })
    }

    render() {
        console.log(this.state.usuarios)  

        const listaUsuario = this.state.usuarios.map((user) => {
          return (
          <Container key={user.id}>
            {user.name}
            <button onClick={()=>this.deletarUsuario(user.id)}>Excluir</button>
            </Container>
            )
        })


        return (
            <div>
                <button onClick={this.props.irParaCadastro}> Ir para cadastro </button>
                <h2>Usuários Cadastrados </h2>
                {listaUsuario}
            </div>
        )
    }
}