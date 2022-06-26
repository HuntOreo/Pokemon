import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stage from './components/Stage/Stage';
import SideBox from './components/SideBox';
import { Pokemon } from './interfaces/Pokemon';
import { fetchPokemon } from './methods/Methods';
import { SideBoxProps, StageProps } from './interfaces/Props';
import './styles/main.css';

const App: React.FC = () => {
  const [focusedPokemon, setFocusedPokemon] = useState<Pokemon>();
  const [focusedSprite, setFocusedSprite] = useState<string>();
  const [amount, setAmount] = useState(1);
  const [dragged, setDragged] = useState<Pokemon>();
  const [teamSlots, setTeamSlots] = useState<Element[]>();

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
  };

  return (
    <React.StrictMode>
      <div className='container-main'>
        <Stage {...stageProps} />
        <SideBox {...sideBoxProps} />
      </div>
    </React.StrictMode>
  );
};

export default App;
