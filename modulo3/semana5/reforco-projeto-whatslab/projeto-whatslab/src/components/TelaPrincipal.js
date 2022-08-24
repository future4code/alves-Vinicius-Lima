import React, { useState } from "react";
import {Container,InputUsuario,InputMensagem,Mensagem,Botao} from './styled'

function TelaPrincipal() {
    const [mensagem, setMensagem] = useState([]);
    const [valorInputMensagem, setInputValorMensagem] = useState('')
    const [valorInputNomeUsuario, setValorInputNomeUsuario] = useState('')


    const adicionarMensagem = () => {
        const msg = {
            nomeUsuario: valorInputNomeUsuario,
            frase: valorInputMensagem
        };

        const novasMsg = [...mensagem, msg]

        setMensagem(novasMsg)
        setInputValorMensagem('')
        // setValorInputNomeUsuario('') se caso precisar de limpar o input algum dia.
    };

    const onChangeInputMensagem = (event) => {
        setInputValorMensagem(event.target.value)
    };

    const onChangeInputNomeUsuario = (event) => {
        setValorInputNomeUsuario(event.target.value)
    };

    const renderizar = mensagem.map((item) => {
        return <p key={item.nomeUsuario}>{item.nomeUsuario}: {item.frase}</p>
    })
    return (
        <Container>
            <Mensagem>
                {renderizar}
            </Mensagem>
           
            <InputUsuario
                value={valorInputNomeUsuario}
                onChange={onChangeInputNomeUsuario}
                placeholder={"Usuário"}
            />
            <InputMensagem
                value={valorInputMensagem}
                onChange={onChangeInputMensagem}
                placeholder={"Digite sua mensagem..."}
            />
           
            <Botao onClick={adicionarMensagem}>Enviar</Botao>
        </Container>
    );
}

export default TelaPrincipal