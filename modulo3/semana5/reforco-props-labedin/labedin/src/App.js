import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import {CardPequeno} from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGizkCz50F6fQ/profile-displayphoto-shrink_800_800/0/1608233936635?e=1664409600&v=beta&t=6qWwO-IzpuqHZ1Hh8hAhKyLdOgrYeg5hCQdnd_Mmtw8" 
          nome="Vinicius Peres De Lima" 
          descricao="Olá, me chamo Vinicius, tenho 19 anos de idade, sou estudante de programação, gosto de jogar futebol, gosto de assistir vídeos sobre investimento e sou apaixonado por tecnologia!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/37/37770.png?w=740&t=st=1658844351~exp=1658844951~hmac=dd3a287c6f2f1aba45f87b7f154089976a72f027c6adc0341af34ea4ac5ec074" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        email="peresvncs@gmail.com"
        endereco="Av. Perimetral Norte, Condominio Alto Da Boa Vista"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png" 
          nome="Labenu" 
          descricao="Estudante de programação na Labenu!" 
        />
        
        <CardGrande 
          imagem="https://img2.freepng.es/20180509/clq/kisspng-nasa-insignia-logo-national-advisory-committee-for-5af2da39e26428.9819356315258650179273.jpg" 
          nome="NASA" 
          descricao="Trabalhos ocultos, secretos!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
