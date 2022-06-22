import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pokemon } from '../../interfaces/Pokemon';
import { fetchPokemon, rotate } from '../../methods/Methods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import '../../styles/stage.css';

const Stage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [amount, setAmount] = useState(1);
  const [focusedSprite, setFocusedSprite] = useState<string>();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.data)
      .then((data) => setAmount(data.count));

    fetchPokemon(setPokemon, setFocusedSprite, amount);
  }, []);

  return (
    <div className='stage'>
      <div className='focused'>
        <img
          onClick={() => fetchPokemon(setPokemon, setFocusedSprite, amount)}
          src={focusedSprite && focusedSprite}
          width='100%'
          alt='the pokemon being viewed.'
        />
        <FontAwesomeIcon
          onClick={() =>
            pokemon &&
            focusedSprite &&
            rotate(pokemon, focusedSprite, setFocusedSprite)
          }
          className='rotate'
          icon={faRotateRight}
        />
      </div>
      <Card pokemon={pokemon} />
    </div>
  );
};

export default Stage;
