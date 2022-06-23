import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pokemon } from '../../interfaces/Pokemon';
import { CardProps, FocusedProps, StageProps } from '../../interfaces/Props';
import { fetchPokemon } from '../../methods/Methods';
import Card from './Card';
import Focused from './Focused';
import '../../styles/stage.css';

const Stage: React.FC<StageProps> = ({ dragged, setDragged }) => {
  const [focusedPokemon, setFocusedPokemon] = useState<Pokemon>();
  const [focusedSprite, setFocusedSprite] = useState<string>();
  const [amount, setAmount] = useState(1);

  const focusedProps: FocusedProps = {
    focusedPokemon: focusedPokemon,
    setFocusedPokemon: setFocusedPokemon,
    setFocusedSprite: setFocusedSprite,
    focusedSprite: focusedSprite,
    setDragged: setDragged,
    dragged: dragged,
    amount: amount,
  };

  const cardProps: CardProps = {
    pokemon: focusedPokemon,
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.data)
      .then((data) => setAmount(data.count));

    fetchPokemon(setFocusedPokemon, setFocusedSprite, amount);
  }, []);

  return (
    <div className='stage'>
      <Focused {...focusedProps} />
      <Card {...cardProps} />
    </div>
  );
};

export default Stage;
