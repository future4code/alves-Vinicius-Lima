import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import InfoUsuarios from './components/InfoUsuarios/InfoUsuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <>
      <AdicionarUsuario/>
      </>
    );
  }
}

export default App;
