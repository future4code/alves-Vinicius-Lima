import React from "react";
import {Email,Endereco} from './styled'

export function CardPequeno(props) {
    return (
        <div>
            <Email>
                <h4> Email: </h4> <p> {props.email} </p>
            </Email>
            <Endereco>
                <h4> Endereço: </h4><p>{props.endereco}</p>
            </Endereco>
            

        </div>
    )
}