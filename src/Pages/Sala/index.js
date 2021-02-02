import React from 'react';

import { Container } from './styles';

export default function Sala({ match }) {
    const id = match.params.roomId;

  return (
    <Container>
        <div className="room-header">
            <h1>Título da Sala</h1>
            <h3>#1</h3>
            <h2>3/4</h2>
        </div>

        <div className="room-container">
            <ul className="players-container">
                <li>Jogador1</li>
                <li>Jogador2</li>
                <li>Jogador3</li>
            </ul>
        </div>
    </Container>
  );
}
