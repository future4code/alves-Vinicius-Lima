import React from "react";
import axios from "axios";
import styled from "styled-components";

const Tela = styled.div`
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230008ff' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
display:grid;
justify-content: center;
border: 2px solid black;
border-radius: 10px;
width: 400px;
padding-bottom: 50px;
margin-top: 30vh;
justify-items: center;
margin-left: 35vw;
`
const Button = styled.button`
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

const Input = styled.input`
color: blue;
background-color: white;
border: 2px solid black;
border-radius:5px;
padding: 5px;
margin-top: 3px;
`

const Button2 = styled.button`
color: blue;
background: white;
margin-top: 7px;
padding: 4px;
padding-left: 10px;
padding-right: 10px;
border-radius: 5px;
:hover{
    color: white;
    background-color: blue;
}`

const H2 = styled.h2`
color: white;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export default class TelaCadastro extends React.Component {
    state = {
        name: "",
        email: ""
    }

    mexendoNome = (event) => {
        this.setState({ name: event.target.value })
    }

    mexendoEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazendoCadastro = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "vinicius-peres-alves"
            }

        }).then((resposta) => {
            alert("Usuário(a) cadastrado com sucesso")
            this.setState({ name: "", email: "" })
        })
            .catch((erro) => {
                alert(erro.response.data.message)
            })
    }

    render() {
        return (
            <div>
                <Button onClick={this.props.irParaLista}> Ir para lista de usuários</Button>
                <Tela>
                    <H2> Cadastro </H2>
                    <Input
                        placeholder={"Nome"}
                        value={this.state.name}
                        onChange={this.mexendoNome} />

                    <Input
                        placeholder={"Email"}
                        value={this.state.email}
                        onChange={this.mexendoEmail} />

                    <Button2 onClick={this.fazendoCadastro}> Cadastrar </Button2>
                </Tela>
            </div>
        )
    }
}