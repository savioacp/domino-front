import React, { useState } from "react";

import { Container } from "./styles";
import RoomCard from "../../Components/RoomCard";

import { FaSearch } from 'react-icons/fa';

export default function Salas() {
    const [searchQuery, setSearchQuery] = useState("");

    const [rooms, setRooms] = useState([{
        id: 1,
        name: "Sala 01",
        players: [{
            id: 1,
            nickname: "pessoa01"
        },
        {
            id: 2,
            nickname: "pessoa02"
        },
        {
            id: 3,
            nickname: "pessoa03"
        }]
    },
    {
        id: 2,
        name: "Sala 02",
        players: [{
            id: 4,
            nickname: "pessoa04"
        },
        {
            id: 5,
            nickname: "pessoa05"
        },
        {
            id: 6,
            nickname: "pessoa06"
        },
        {
            id: 7,
            nickname: "pessoa07"
        }]
    },
    {
        id: 1,
        name: "Sala 01",
        players: [{
            id: 1,
            nickname: "pessoa01"
        },
        {
            id: 2,
            nickname: "pessoa02"
        },
        {
            id: 3,
            nickname: "pessoa03"
        }]
    },
    {
        id: 1,
        name: "Sala 01",
        players: [{
            id: 1,
            nickname: "pessoa01"
        },
        {
            id: 2,
            nickname: "pessoa02"
        },
        {
            id: 3,
            nickname: "pessoa03"
        }]
    },
    {
        id: 1,
        name: "Sala 01",
        players: [{
            id: 1,
            nickname: "pessoa01"
        },
        {
            id: 2,
            nickname: "pessoa02"
        },
        {
            id: 3,
            nickname: "pessoa03"
        }]
    },
    {
        id: 1,
        name: "Sala 01",
        players: [{
            id: 1,
            nickname: "pessoa01"
        },
        {
            id: 2,
            nickname: "pessoa02"
        },
        {
            id: 3,
            nickname: "pessoa03"
        }]
    },
{
    id: 1,
    name: "Sala 01",
    players: [{
        id: 1,
        nickname: "pessoa01"
    },
    {
        id: 2,
        nickname: "pessoa02"
    },
    {
        id: 3,
        nickname: "pessoa03"
    }]
},
{
    id: 1,
    name: "Sala 01",
    players: [{
        id: 1,
        nickname: "pessoa01"
    },
    {
        id: 2,
        nickname: "pessoa02"
    },
    {
        id: 3,
        nickname: "pessoa03"
    }]
},
{
    id: 1,
    name: "Sala 01",
    players: [{
        id: 1,
        nickname: "pessoa01"
    },
    {
        id: 2,
        nickname: "pessoa02"
    },
    {
        id: 3,
        nickname: "pessoa03"
    }]
},
{
    id: 1,
    name: "Sala 01",
    players: [{
        id: 1,
        nickname: "pessoa01"
    },
    {
        id: 2,
        nickname: "pessoa02"
    },
    {
        id: 3,
        nickname: "pessoa03"
    }]
},
]);

    function handleSearchChange(e) {
        setSearchQuery(e.target.value);
    }
  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <div className="salas-container">
        <div className="search-container">
            <input type="text" placeholder="Procurar por nome ou número" onChange={handleSearchChange} />
            <button type="submit" onClick={handleSearch}><FaSearch/></button>
        </div>

        <div className="results-container">
            {rooms.map(room => (
                <RoomCard key={room.id} room={room}/>
            ))}
        </div>
      </div>
    </Container>
  );
}
