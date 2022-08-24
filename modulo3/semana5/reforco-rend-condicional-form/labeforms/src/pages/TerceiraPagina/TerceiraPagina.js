import React from "react";
import {Container,Botao,Texto} from './styled'

function TerceiraPagina (props) {
    return(
        <Container>
           <h3>
            ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
           </h3>
           <Texto>
            7- Por que você não terminou um curso de graduação?
           </Texto>
           <input/>
           <Texto>
            8- Você fez algum curso complementar?
           </Texto>
           <select>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
           </select>
           <br/>
           <br/>
           <Botao onClick={()=> props.mudandoTela()}>Proxima etapa</Botao>
           
        </Container>
    )
}

export default TerceiraPagina