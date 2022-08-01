import React, { useState } from "react";
import PrimeiraPagina from "./pages/PrimeiraPagina/PrimeiraPagina";
import QuartaPagina from "./pages/QuartaPagina/QuartaPagina";
import SegundaPagina from "./pages/SegundaPagina/SegundaPagina";
import TerceiraPagina from "./pages/TerceiraPagina/TerceiraPagina";

function App() {
  const [etapa,setEtapa]=useState(1)

  const renderizaPagina = ()=>{
    switch(etapa){
      case 1:
        return <PrimeiraPagina mudandoTela={irParaProximaPagina}/>
      case 2:
        return <SegundaPagina mudandoTela={irParaProximaPagina}/>
        case 3:
          return <TerceiraPagina mudandoTela={irParaProximaPagina}/>
          case 4:
            return <QuartaPagina/>
            default:
              return "Ocorreu um erro!" 
    }
  }

  const irParaProximaPagina = () =>{

    setEtapa(etapa + 1)
  }
  return (
    <div>
      {renderizaPagina()}
    </div>
  );
}

export default App;
