import React, { Component } from 'react'



export default class Mensagem extends Component {

    state = {

        escrita: [
            {
                usuario: "Adm",
                mensagem: "Bem-vindos"
            }
        ],

        valorInputUsuario: "",
        valorInputMensagem: ""
    };

    adicionarMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        };

        const novasMensagens = [...this.state.escrita, novaMensagem];

        this.setState({ escrita: novasMensagens });
    }

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };

    render() {

        const listaMensagens = this.state.escrita.map((msg) => {

            return (
                <p>
                    {msg.usuario}:  {msg.mensagem}
                </p>
            );
        });


        return (
            <div >
                <input 
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder={"Nome Usuário"}></input>
                
                    <input
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        placeholder={"Digite a mensagem"}></input>

                    <button onClick={this.adicionarMensagem}> Enviar </button>

                    <div> {listaMensagens}</div>
                
            </div>
        )
    }
}
