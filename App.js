import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const CadastroSucesso = ({ nome, idade, email }) => {
  return (
    <div>
      <h1>Dados do Usuário</h1>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Email: {email}</p>
    </div>
  );
};

function App() {
  const [dadosUsuario, setDadosUsuario] = useState(null);

  const cadastro = (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;

    // Atualiza o estado com os dados do usuário
    setDadosUsuario({ nome, idade, email });
  };

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={cadastro} id="form1" method="POST" className="form">
          <label>Informe seu nome: </label><br></br>
          <input type="text" placeholder="Seu nome" id="nome" name="nome" className="inputField"></input><br></br>
          <label>Informe sua idade: </label><br></br>
          <input type="number" placeholder="Sua idade" id="idade" name="idade" className="inputField"></input><br></br>
          <label>Informe seu email: </label><br></br>
          <input type="email" placeholder="Seu email" id="email" name="email" className="inputField"></input><br></br>
          <button type="submit" className="submitButton">Cadastrar</button><br></br>
        </form>

        {/* Renderiza os dados do usuário se existirem */}
        {dadosUsuario && (
          <CadastroSucesso
            nome={dadosUsuario.nome}
            idade={dadosUsuario.idade}
            email={dadosUsuario.email}
          />
        )}
      </header>
    </div>
  );
}

export default App;
