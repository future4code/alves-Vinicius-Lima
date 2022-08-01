import React from "react";
import {Container, Botao,Texto} from './styled'

function PrimeiraPagina(props) {
    return (
        <Container>
            <h3>
                ETAPA 1 - DADOS GERAIS
            </h3>
            <Texto>
                1- Qual o seu nome?
            </Texto>
            <input/>
            <Texto>
                2- Qual sua idade?
            </Texto>
            <input/>
            <Texto>
                3- Qual seu email?
            </Texto>
            <input/>
            <Texto>
                4- Qual a sua escolaridade?
            </Texto>
            <select>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </select>
            <br/>
            <br/>
            <Botao onClick={()=>props.mudandoTela(1)}>Próxima etapa</Botao>  
        </Container>
    );
};

export default PrimeiraPagina