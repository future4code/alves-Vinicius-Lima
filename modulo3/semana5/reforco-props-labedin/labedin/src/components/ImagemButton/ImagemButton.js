import React from 'react';
import {Container,Imagem} from './styled'

function ImagemButton(props) {
    return (
        <Container>
            <Imagem src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Container>

    )
}

export default ImagemButton;