import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post
        nomeUsuario={"joaquina"}
        fotoUsuario={"https://www.i-cac.fr/upload/medias/mugnie-franck/0886d7d3b1adb7e4d7ddaaaf4de6539fe5f760d6.JPG"}
        fotoPost={"https://th.bing.com/th/id/OIF.8tdjzqK2uXdk0gzXpmL3Bw?pid=ImgDet&rs=1"}
      />
      <Post
        nomeUsuario={"patrick"}
        fotoUsuario={"https://www.docz.cz/i/obraz-fifty50-signale-50x50-cm_12531.jpg"}
        fotoPost={"https://th.bing.com/th/id/OIP.5ayHBJHM3QS1nHwf85NLxQHaG_?pid=ImgDet&rs=1"}
      />
    </MainContainer>
  );
}

export default App;
