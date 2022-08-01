import styled from "styled-components";

export const Container = styled.div`
display: grid;
justify-content: center;
align-items: center;
`
export const Botao = styled.button`
width: 200px;
position: relative;
left: 120px;
color: white;
background-color: red;
border-radius: 10px;
transition: 0.8s;
:hover{
    color: red;
    background-color:white ;
}:active{
    transition: 0.2s;
    color:white;
    background-color: black;
}
`

export const Texto = styled.p`
font-size: medium;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`