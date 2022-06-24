import { Pokemon } from '../interfaces/Pokemon';

export const handleDragStart = (
  event: React.DragEvent<HTMLImageElement>,
  pokemon: Pokemon,
  setDragged: Function
) => {
  pokemon.slot = 0;
  setDragged(pokemon);
};

export const handleDragOver = (event: React.DragEvent<HTMLImageElement>) => {
  event.preventDefault();
};

export const handleDrop = (
  event: React.DragEvent<HTMLDivElement>,
  dragged: Pokemon,
  team: Pokemon[],
  setTeam: Function,
  teamSlots: Element[]
) => {
  event.preventDefault();
  const target = event.target as Element;
  const index = teamSlots.indexOf(target);

  const placedPokemon: Pokemon = { ...dragged };

  const newTeam = [...team];
  placedPokemon.slot = index + 1;

  newTeam[index] = placedPokemon;
  setTeam(newTeam);
};
