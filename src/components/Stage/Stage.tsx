import axios from 'axios';
import { fetchPokemon, rotate } from '../../methods/Methods';
import { handleDragStart } from '../../methods/Drags';
import { useState, useEffect } from 'react';
import { Pokemon } from '../../interfaces/Pokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import '../../styles/stage.css';

const Stage: React.FC = () => {
  const [focusedPokemon, setFocusedPokemon] = useState<Pokemon>();
  const [focusedSprite, setFocusedSprite] = useState<string>();
  const [amount, setAmount] = useState(1);
  const [dragged, setDragged] = useState<Pokemon>();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.data)
      .then((data) => setAmount(data.count));

    fetchPokemon(setFocusedPokemon, setFocusedSprite, amount);
  }, []);

  return (
    <div className='stage'>
      <div className='focused' draggable='true'>
        <img
          id='current'
          draggable='true'
          onDragStart={handleDragStart}
          onClick={() =>
            fetchPokemon(setFocusedPokemon, setFocusedSprite, amount)
          }
          src={focusedSprite && focusedSprite}
          width='100%'
          alt='the pokemon being viewed.'
        />
        <FontAwesomeIcon
          onClick={() =>
            focusedPokemon &&
            focusedSprite &&
            rotate(focusedPokemon, focusedSprite, setFocusedSprite)
          }
          className='rotate'
          icon={faRotateRight}
        />
      </div>
      <Card pokemon={focusedPokemon} />
    </div>
  );
};

export default Stage;
