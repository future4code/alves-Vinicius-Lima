import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
        nomeUsuario={'marcelo'}
        fotoUsuario={'https://www.albumdunyasi.com/application/uploads/2019/06/50x50-1-700x700.jpg'}
        fotoPost={'https://i.redd.it/6ihl9vurecz01.png'}/>
        <Post
        nomeUsuario={'felipe'}
        fotoUsuario={'https://www.fotodeky.cz/files/catalog-item/2003/2003324/catalog-item_2003324_img_15043899324935.jpg'}
        fotoPost={'https://www.mall.cz/i/42535317/550/550'}/>
      </MainContainer>
    );
  }
}

export default App;
