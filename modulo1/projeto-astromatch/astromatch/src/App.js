import React from "react";
import Header from "./components/Header";
import TelaMatches from "./components/TelaMatches";
import TelaPrincipal from "./components/TelaPrincipal";


class App extends React.Component {

  state = {
    telaInicial: "home"
  }

  changePagina = (nomePagina)=> {
     this.setState({telaInicial: nomePagina})
  }

  esolherTela = () => {
    switch (this.state.telaInicial) {
      case "home":
        return <TelaPrincipal />
      case "matches":
        return <TelaMatches />
      default:
        return <TelaPrincipal />
    }
  }

  render() {
    return (
      <div>
        <Header changePagina={this.changePagina}/>
        {this.esolherTela()}
      </div>
    )
  }
}

export default App;
