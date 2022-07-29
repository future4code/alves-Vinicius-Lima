import React from "react";
import TelaPrincipal from "./components/TelaPrincipal";
import styled from "styled-components";

export const Container = styled.div`
 background-color: white;
`

function App() {
  return (
    <Container>
     <TelaPrincipal/>
    </Container>
  );
}

export default App;
