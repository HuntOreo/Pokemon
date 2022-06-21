import '../styles/stage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  sprite: string;
  weight: number;
}

const Stage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async (): Promise<void> => {
      const id = Math.floor(Math.random() * (11 - 1) + 1);
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );

      const fetched: Pokemon = {
        name: data.name,
        sprite: data.sprites.front_default,
        weight: data.weight,
      };
      setPokemon(fetched);
    };

    fetchPokemon();
  }, []);

  return (
    <div className='stage'>
      <div className='focused'>
        <img src={pokemon?.sprite && pokemon.sprite} width='100%' />
      </div>
      <div className='stats'>
        <p>weight: {pokemon?.weight && pokemon.weight}</p>
      </div>
    </div>
  );
};

export default Stage;
