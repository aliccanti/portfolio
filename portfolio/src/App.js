import React from 'react';

import './styles/global.css';
import './styles/styles.css';

import curriculo from './docs/AliceCavalcanti-Curriculo.pdf';
import linkedinIcon from './docs/linkedin.svg';
import aliceIcon from './docs/alice-icon.jpeg';
import jsIcon from './docs/js.svg';
import cssIcon from './docs/css.svg';

function App() {
  return (
    <div className="App">
      <header className="header-info">
        <a className="btn-linkedin" href="https://www.linkedin.com/in/alicecavalcanti/">
          <img src={linkedinIcon} alt="LinkedIn"></img>Meu 
        </a>
      </header>

      <main className="main-container">

        <section className="dados-container">
          <h1>Oi! Eu sou a Alice</h1>
          <p>Sou uma programadora e estudante de Front-End. Evangelizadora do mobile first e 
            apaixonada por animações, procuro sempre ajudar quem tá, assim como eu,
             iniciando nesse mundão da programação.</p>

          <a class="button" href={curriculo}
           download="ALICE MARIA DA HORA CAVALCANTI - CV.pdf" 
           className="btn-curriculo">Meu currículo</a>
          <a href="https://github.com/aliccanti" className="btn-github">Ir para o meu GitHub</a>
        </section>

        <section className="linguagens-container">
          <img src={aliceIcon} alt="imagem de alice" className="icon-alice">
          </img>
          <a href="https://github.com/aliccanti/reactCounter"
           className="js-icon"><img src={jsIcon} alt="javascript logo"></img>
          </a>


          <a href="https://github.com/aliccanti/error404"
           className="css-icon"><img src={cssIcon} alt="html e css logo logo"></img>
          </a>
        </section>

      </main>
     
    </div>
  );
}

export default App;
