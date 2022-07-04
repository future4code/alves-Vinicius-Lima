import React from "react";
import TelaNovaPlaylist from "./Components/telaNovaPlaylist";
import TelaListaPlaylist from "./Components/telaListaPlaylist";
import TelaDetalhes from "./Components/telaDetalhes";


export default class App extends React.Component{
    
    state={
      telaAtual: "Nova Playlist",
      clickDetalhesUrl: "" 
    }

    irParaDetahes = (url) => {
          this.setState({telaAtual:"Lista de Detalhes", clickDetalhesUrl: url})
    }

    voltarParaPlaylist = () => {
      this.setState({telaAtual:"Nova Playlist", clickDetalhesUrl:""})

    }
    
    escolherTela = () => {
      switch(this.state.telaAtual){
        case "Nova Playlist":
          return <TelaNovaPlaylist irParaListaPlaylist={this.irParaListaPlaylist}/>
        case "Lista de Playlist":
          return <TelaListaPlaylist irParaNovaPlaylist={this.irParaNovaPlaylist} url={this.state.clickDetalhesUrl}  irParaDetahes={this.irParaDetahes}/>
        case "Lista de Detalhes":
          return <TelaDetalhes voltarParaPlaylist={this.voltarParaPlaylist}/>  
        default:
              <div> Erro. Página não encontrada :(</div>
      }
    }

    irParaNovaPlaylist = () => {
      this.setState({telaAtual: "Nova Playlist"})
    }

    irParaListaPlaylist = () => {
      this.setState({telaAtual: "Lista de Playlist"})
    }

    
  render() {
    return (
      <div>
         {this.escolherTela()}
         
      </div>
    )
  }
}


