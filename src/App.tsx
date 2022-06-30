import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Battle from './components/battle/Battle';
import Stage from './components/stage/Stage';
import SideBox from './components/sideBox/SideBox';

import { Pokemon } from './interfaces/Pokemon';
import { SideBoxProps, StageProps, BattleProps } from './interfaces/Props';
import { Team } from './interfaces/misc/Team';

import { fetchPokemon } from './methods/general';
import './styles/main.css';

const App: React.FC = () => {
  const [focusedPokemon, setFocusedPokemon] = useState<Pokemon>();
  const [focusedSprite, setFocusedSprite] = useState<string>();
  const [amount, setAmount] = useState(1);
  const [dragged, setDragged] = useState<Pokemon>();
  const [teamSlots, setTeamSlots] = useState<Element[]>();
  const [team, setTeam] = useState<Pokemon[]>(Team);

  useEffect(() => {
    const elementCollection = document.getElementsByClassName('teamSlot');
    const slots = Array.from(elementCollection);
    setTeamSlots(slots);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.data)
      .then((data) => setAmount(data.count));

    fetchPokemon(setFocusedPokemon, setFocusedSprite, amount);
  }, []);

  const battleProps: BattleProps = {
    team: team,
    opponent: focusedPokemon,
  };

  const stageProps: StageProps = {
    amount: amount,
    dragged: dragged,
    setDragged: setDragged,
    focusedPokemon: focusedPokemon,
    setFocusedPokemon: setFocusedPokemon,
    focusedSprite: focusedSprite,
    setFocusedSprite: setFocusedSprite,
  };

  const sideBoxProps: SideBoxProps = {
    dragged: dragged,
    setDragged: setDragged,
    teamSlots: teamSlots,
    setFocusedPokemon: setFocusedPokemon,
    setFocusedSprite: setFocusedSprite,
    team: team,
    setTeam: setTeam,
  };

  return (
    <React.StrictMode>
      <div className='container-main'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Stage {...stageProps} />} />
            <Route path='/battle' element={<Battle {...battleProps} />} />
          </Routes>
        </BrowserRouter>
        <SideBox {...sideBoxProps} />
      </div>
    </React.StrictMode>
  );
};

export default App;
