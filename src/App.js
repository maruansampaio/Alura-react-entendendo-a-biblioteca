import React, { Component } from 'react';
import ListaNotas from './components/ListaNotas';
import FormCadastro from './components/FormCadastro';

import './assets/App.css'
import './assets/index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cards:[]
    };
  }
  criarCard(titulo, texto) {
    const novoCard = {titulo, texto};
    const NovoArrayCards = [...this.state.cards,novoCard]
    const novoState = {
      cards:NovoArrayCards
    }
    this.setState(novoState);
  }

  render() {
    return (
      <section className="conteudo">
        <FormCadastro criarCard={this.criarCard.bind(this)} />
        <ListaNotas cards={this.state.cards} />
      </section>
    );
  }
}

export default App;
