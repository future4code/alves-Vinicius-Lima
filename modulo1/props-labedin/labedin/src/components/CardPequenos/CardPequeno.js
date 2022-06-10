import React from 'react';


function CardPequeno (props) {
    return (
        <div>
            <img scr={props.imagem} />
        <div> 
            <h3>{props.nome}</h3>
            <p> {props.descricao}</p>
        </div>
        </div>
    )
}

export default CardPequeno
