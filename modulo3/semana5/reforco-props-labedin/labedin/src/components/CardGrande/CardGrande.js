import React from 'react';
import {Container,Imagem,H4,MiniContainer} from './styled'

function CardGrande(props) {
    return (
        <Container>
            <Imagem src={ props.imagem } />
            <MiniContainer>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
            </MiniContainer>
        </Container>
    )
}

export default CardGrande;