import '../../styles/stage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from '../../interfaces/Pokemon';
import Card from './Card';

const Stage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [amount, setAmount] = useState(1);

  const fetchPokemon = async (): Promise<void> => {
    const id = Math.floor(Math.random() * (amount - 1) + 1);

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );

      const fetched: Pokemon = {
        name: data.name,
        id: data.id,
        sprite: data.sprites.front_default,
        weight: data.weight,
        game: data.game_indices[0].version.name
      };
      setPokemon(fetched);
      
    } catch (error) {
      fetchPokemon()
    } 
    
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => response.data)
      .then(data => setAmount(data.count))

      fetchPokemon();
    
  }, []);

  return (
    <div className='stage'>
      <div className='focused'>
        <img onClick={fetchPokemon} src={pokemon?.sprite && pokemon.sprite} width='100%' />
      </div>
      <Card pokemon={pokemon} />
    </div>
  );
};

export default Stage;
