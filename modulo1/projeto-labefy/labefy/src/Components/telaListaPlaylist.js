import React from "react";
import axios from "axios"
import styled from "styled-components";

const Container = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
:hover{
    cursor: pointer;
    background-color: red;
}
`

export default class TelaListaPlaylist extends React.Component {

    state = {
        playlist: [],
        detalhes: []
      //  musicas: []
    }

    componentDidMount() {
        this.pegarDetalhes()
    }

    pegarDetalhes = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks", {
            headers: {
                Authorization: "vinicius-peres-alves"
            }
        }).then((resposta) => {
            this.setState({ pegarDetalhes: resposta.data})
        }).catch((erro) => {
            alert("Deu ruim.")
        })
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "vinicius-peres-alves"
            }
        }).then((resposta) => {
            this.setState({ playlist: resposta.data.result.list })
        }).catch((erro) => {
            alert("Problema detectado, tente novamente.")
        })
    }

    //componentDidMount(){
  //      this.adicionarMusica()
  //  }

    deletarPlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "vinicius-peres-alves"
            }
        }).then((resposta) => {
            alert("Playlist deletada com sucesso")
            this.pegarPlaylist()
        }).catch((erro) => {
            alert("erro detectado, tente novamente.")
        })
    }

   // adicionarMusica = (id) => {
   //     const body = {
     //       name: "ss",
      //      artist: "aa",
    //        url:"asas"
     //   }
//        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`, body , {
//            headers: {
  //              Authorization: "vinicius-peres-alves"
    //        }
      //  }).then((resposta) => {
       //     console.log(resposta)
     //   }).catch((erro) => {
       //     console.log(erro.response)
       // })
    //}

    render() {
        console.log(this.state.playlist)

        const listaPlaylist = this.state.playlist.map((name) => {
            return (
                <Container key={name.id}>
                    {name.name}
                    <button onClick={() => this.deletarPlaylist(name.id)}> Excluir </button>
                </Container>
            )
        })

      //  const adicionarMsc = this.state.musicas.map((playlist) => {
       //     return <div key={playlist.name}>
        //        {playlist.name}
         //       <button onClick={() => this.adicionarMusica(playlist.name)}> Adicionar Musica </button>
         //   </div>
      //  })

        const detalhes = this.state.detalhes.map((playlist) => {
            return (
                <p key={playlist.url}
                    onClick={() => this.props.irParaDetalhes(playlist.url)}>
                    {playlist.name}
                </p>
            )
        })
        return (
            <div>
                <button onClick={this.props.irParaNovaPlaylist}> Ir para cadastro </button>
                <h2> Playlist Cadastradas </h2>
                {listaPlaylist}
                {detalhes}
            </div>
        )

    }



}

