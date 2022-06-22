import axios from 'axios';
import { Pokemon } from '../interfaces/Pokemon';

// pull a random pokemon and set it as a state.
export const fetchPokemon = async (
  setPokemon: Function,
  setSprite: Function,
  amount: number
): Promise<void> => {
  const id = Math.floor(Math.random() * (amount - 1) + 1);

  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );

    const fetched: Pokemon = {
      name: data.name,
      id: data.id,
      sprites: [data.sprites.front_default, data.sprites.back_default],
      weight: data.weight,
      game: data.game_indices[0].version.name,
    };
    setPokemon(fetched);
    setSprite(fetched.sprites[0]);
  } catch (error) {
    fetchPokemon(setPokemon, setSprite, amount);
  }
};

export const rotate = (
  pokemon: Pokemon,
  sprite: string,
  setSprite: Function
) => {
  const current = pokemon.sprites.indexOf(sprite);
  const next = pokemon.sprites[current + 1]
    ? pokemon.sprites[current + 1]
    : pokemon.sprites[0];
  setSprite(next);
};
