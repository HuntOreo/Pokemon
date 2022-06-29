import axios from 'axios';
import { MoveSkeleton, Pokemon, PokeStats } from '../interfaces/Pokemon';

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
    const stats: Array<any> = data.stats;

    const pokeStats: PokeStats[] = stats.map((item) => {
      return {
        name: item.stat.name,
        baseStat: item.base_stat,
      };
    });

    getMoves(data.moves);

    const fetched: Pokemon = {
      name: data.name,
      id: data.id,
      specifics: {
        sprites: {
          front: data.sprites.front_default,
          back: data.sprites.back_default,
        },
        weight: data.weight,
        game: data.game_indices[0].version.name,
        type: getTypes(data.types),
        stats: pokeStats,
        moves: getMoves(data.moves),
      },
    };

    setPokemon(fetched);
    if (fetched.specifics?.sprites) setSprite(fetched.specifics.sprites.front);
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
  currentSide: string,
  setSprite: Function
): void => {
  if (pokemon.specifics?.sprites) {
    if (pokemon.specifics.sprites.front === currentSide) {
      setSprite(pokemon.specifics.sprites.back);
    } else {
      setSprite(pokemon.specifics.sprites.front);
    }
  }
};

export const swapSideBoxPokemon = (
  parent: HTMLElement,
  team: Pokemon[],
  setTeam: Function,
  teamSlots: Element[],
  swapDiv?: HTMLElement,
  setSwappingDiv?: Function,
  swapPokemon?: Pokemon
): void => {
  if (swapDiv && swapPokemon && parent) {
    const divAIndex = teamSlots.indexOf(swapDiv);
    const divBIndex = teamSlots.indexOf(parent);
    const pokeA = swapPokemon;
    const pokeB = team[divBIndex];

    if (!pokeB) {
      setSwappingDiv && setSwappingDiv(undefined);
      return;
    }

    const slotA = pokeA.slot;
    const slotB = pokeB.slot;

    pokeA.slot = slotB;
    pokeB.slot = slotA;

    team[divAIndex] = pokeB;
    team[divBIndex] = pokeA;

    setTeam(team);
    setSwappingDiv && setSwappingDiv(undefined);
  }
};

const getTypes = (obj: any): string[] => {
  const types: string[] = obj.map((item: any) => {
    return item.type.name;
  });

  return types;
};

const getMoves = (moves: any[]): MoveSkeleton[] => {
  const result: MoveSkeleton[] = moves.map((item) => {
    console.log(item);
    return {
      name: item.move.name,
      url: item.move.url,
      level: item.version_group_details[0].level_learned_at,
    };
  });

  return result;
};
