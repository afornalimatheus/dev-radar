import React from 'react';

import './global.css';
import './App.css'
import './Sidebar.css'

// UsetState -> função usada pelo React para informar o estado.
// Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: informações que um componente pai passa para o componente filho.
// Estado: informações mantidas pelo componente (Lembrar: imutabilidade).

function App() {
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/23086440?v=4" alt="" />
              <div className="user-info">
                <strong>Matheus Afornali</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer passionate about vintage cars.</p>
            <a href="https://github.com/afornalimatheus">Acessar perfil no GitHub</a>
          </li>
        </ul> 
      </main>
    </div>
  );
}

export default App;
