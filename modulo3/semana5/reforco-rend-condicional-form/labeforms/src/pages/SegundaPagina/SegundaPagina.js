import React from "react";
import {Container,Botao,Texto} from './styled'

function SegundaPagina (props){
    return(
        <Container>
            <h3>
                ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
            </h3>
            <Texto>
                5- Qual o curso?
            </Texto>
            <input/>
            <Texto>
                6- Qual a unidade de ensino?
            </Texto>
            <input/>
            <br/>
            <br/>
           <Botao onClick={()=>props.mudandoTela()}>Proxima etapa</Botao>
            
        </Container>
    )
}

export default SegundaPagina