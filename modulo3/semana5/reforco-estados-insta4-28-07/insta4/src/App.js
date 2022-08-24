import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [valorInputNome, setValorInputNome]= useState("")
  const [valorInputFotoPerfil,setValorInputFotoPerfil] = useState("")
  const [valorInputFotoPost,setValorInputFotoPost] = useState("")
  const [post, setPost] = useState(
    [
      {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"joaquina",
        fotoUsuario:"https://www.i-cac.fr/upload/medias/mugnie-franck/0886d7d3b1adb7e4d7ddaaaf4de6539fe5f760d6.JPG",
        fotoPost:"https://th.bing.com/th/id/OIF.8tdjzqK2uXdk0gzXpmL3Bw?pid=ImgDet&rs=1"
      },
      {
        nomeUsuario:"patrick",
        fotoUsuario:"https://www.docz.cz/i/obraz-fifty50-signale-50x50-cm_12531.jpg",
        fotoPost:"https://th.bing.com/th/id/OIP.5ayHBJHM3QS1nHwf85NLxQHaG_?pid=ImgDet&rs=1"
      }
    ]
  )

  const adicionarPost = () => {
    const dados = {
    nomeDoUsuario: valorInputNome,
    fotoPerfil: valorInputFotoPerfil,
    fotoPost: valorInputFotoPost
  };
      const novosDados = [...post, dados]

      setPost(novosDados)
};

const onChangeInputNome = (event) => {
    setValorInputNome(event.target.value)
};

const onChangeInputFotoPerfil = (event) => {
  setValorInputFotoPerfil(event.target.value)
};

const onChangeInputFotoPost = (event) => {
  setValorInputFotoPost(event.target.value)
};



  const listaDeComponentes = post.map((posts,index)=>{
    return <Post 
    key={index}
    nameUser={posts.nomeUsuario}
    fotoUser={posts.fotoUsuario}
    fotoPost={posts.fotoPost}
    />
  });
  
  return (
    <MainContainer>
      <input
      value={valorInputNome}
      onChange={onChangeInputNome}
      placeholder="Insira o nome"
      />
      <input
      value={valorInputFotoPerfil}
      onChange={onChangeInputFotoPerfil}
      placeholder="URL perfil"
      />
      <input
      value={valorInputFotoPost}
      onChange={onChangeInputFotoPost}
      placeholder="URL post"
      />

      <button onClick={adicionarPost}>Postar</button>
    {listaDeComponentes}
    </MainContainer>
  );
}

export default App;
