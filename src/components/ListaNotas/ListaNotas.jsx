import React, { Component } from 'react';
import CardNota from '../CardNota';

import './styles.css';

class ListaNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.cards.map((card, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota titulo={card.titulo} texto={card.texto} />
                        </li>
                    );
                })}
          </ul>
        );
    }
}

export default ListaNotas;