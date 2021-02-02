import React from "react";

import { useHistory } from 'react-router-dom';

import { Container } from "./styles";

import { FaAngleRight } from "react-icons/fa";

export default function RoomCard({ room }) {
  const { name, id, players } = room;
  const history = useHistory();

  function OnClick(e) {
    history.push("/salas/" + id);
  }
 
  return (
    <Container onClick={OnClick}>
      <div className="roomcard-header">
        <strong>{name}</strong>
        <FaAngleRight />
      </div>
      <p className="room-id">#{id}</p>
      <div className="players-container">
        {players.map(player => (
          <p key={player.id}>{player.nickname}</p>
        ))}
      </div>
    </Container>
  );
}
