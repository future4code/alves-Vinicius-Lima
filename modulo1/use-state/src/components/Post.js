import {useState} from "react"

function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
const curtido = false
const numeroCurtida = 0
const comentando = false
const numeroComentario = 0
const comentario = []
const inputValue= ""


const onClickButton =()=>{
  alert("Enviado")
}
const [comentarioValue, setComentarioValue] = useState([""])
const onChangeComentarioEnviar = (event)=>{
  setComentarioValue(event.target.value)
}


  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
  };

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
  };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
    
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
    
  };

  {/* Passo6 */}
  const caixaDeComentario = true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={""}
        value={comentarioValue}
        onChange={setComentarioValue}
      />
      {/* Passo4 */}
      
      <button onClick={onClickButton}>Enviar</button>
     
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={"https://i.picsum.photos/id/282/50/50.jpg?hmac=NhhELZOWbdZR_PuImUgtYqXtbhZKE8lYDxTUTY0zTEg"} alt={'Imagem do usuario'} />
          <span>Cascudinho da Play</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={"https://i.picsum.photos/id/863/200/150.jpg?hmac=p2H_T-EwOIltbQoM81CwQqn4Lx88kivr9EK5XjJiJaw"} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: 0</span>
          {/* Passo4 */}
          <button >
            {/* Passo6 */}
            {true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: 0</span>
          {/* Passo4 */}
          <button >
            {/* Passo6 */}
            {false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;