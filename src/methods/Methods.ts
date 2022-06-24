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
    if (fetched.sprites) setSprite(fetched.sprites[0]);
  } catch (error) {
    fetchPokemon(setPokemon, setSprite, amount);
  }
};

export const removeFromTeam = (
  targeted: Pokemon,
  team: Pokemon[],
  setTeam: Function
): void => {
  let newTeam = [...team];
  const targetedIndex = team.indexOf(targeted);
  newTeam[targetedIndex] = {
    name: '',
    id: 0,
    slot: targetedIndex + 1,
  };

  const temp: Pokemon[] = newTeam.filter((member) => member.name !== '');
  for (let i = 0; i < newTeam.length; i++) {
    if (temp[i]) {
      temp[i].slot = i + 1;
      newTeam[i] = temp[i];
    } else {
      newTeam[i] = {
        name: '',
        id: 0,
        slot: i + 1,
      };
    }
  }

  setTeam(newTeam);
};

export const rotate = (
  pokemon: Pokemon,
  sprite: string,
  setSprite: Function
): void => {
  if (pokemon.sprites) {
    const current = pokemon.sprites.indexOf(sprite);
    const next = pokemon.sprites[current + 1]
      ? pokemon.sprites[current + 1]
      : pokemon.sprites[0];
    setSprite(next);
  }
};
