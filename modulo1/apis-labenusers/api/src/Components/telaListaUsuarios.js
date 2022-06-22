import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
color: white;
 border: 3px solid white;
 border-radius: 50px;
 padding: 10px;
 margin: 10px;
 width: 300px;
 display: flex;
 justify-content: space-between;
`

const Tudo = styled.div`
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230008ff' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
display:grid;
justify-content: center;
border: 2px solid white;
border-radius: 10px;
width: 400px;
padding-bottom: 50px;
margin-top: 15vh;
justify-items: center;
margin-left: 35vw;
`

const H2 = styled.h2`
color: white;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const ButtonDelete = styled.button`
color: red;
background-color: white;
border-radius: 20px;
:hover{
    background-color: red;
    color: white;
}`

const ButtonAtalho = styled.button`
display: grid;
color: white;
background-color: red;
border: 1px solid black;
border-radius: 5px;
width: 20vw;
margin-top: 3vh;
margin-left: 3vw;
padding: 4px;
:hover{
    background-color: white;
    color: red;
}
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
            <ButtonDelete onClick={()=>this.deletarUsuario(user.id)}>Excluir</ButtonDelete>
            </Container>
            )
        })


        return (
            <div>
                <ButtonAtalho onClick={this.props.irParaCadastro}> Ir para cadastro </ButtonAtalho>
                <Tudo> 
                <H2>Usuários Cadastrados </H2>
                {listaUsuario}
            </Tudo>
            </div>
            
        )
    }
}