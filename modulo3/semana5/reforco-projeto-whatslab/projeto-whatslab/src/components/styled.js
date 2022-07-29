import styled from "styled-components";

export const Container = styled.div`
 border: 1px black solid;
 align-items: center;
 display: flex;
 width: 29%;
 height: 520px;
 position: relative;
 left:400px;
 max-width: 50%;
 max-height: 520px;
 flex: 1 1 0%;
 flex-direction: column;
 justify-content: flex-end;
 padding:50px;
background-color: gray;
border-radius: 5px;
`

export const InputUsuario = styled.input`
   font-weight: bold;
   font-size: medium;
   width: 100px;
   position: relative;
   top: 90px;
   right: 180px;
   border-radius: 5px;
`

export const InputMensagem = styled.input`
   font-size: medium;
   width: 200px;
   padding-right: 80px;
   position: relative;
   top: 66px;
   left: 20px;
   border-radius: 5px;
`
export const Mensagem = styled.div`
display: grid;
grid-column: initial;
position: relative;
right: 200px;
top: 90px;
font-weight: bold;
color: white;
`

export const Botao = styled.button`
display: flex;
position: relative;
top: 42px;
left: 200px;
width: 70px;
justify-content: center;
padding-top: 3px;
padding-bottom: 2px;
border-radius: 10px;
background-color: white;
color: black;
:hover{
    background-color: black;
    color: white;
}:active{
    background-color: red;
}
`