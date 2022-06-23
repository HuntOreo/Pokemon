import { Pokemon } from '../interfaces/Pokemon';

export const handleDragStart = (
  event: React.DragEvent<HTMLImageElement>,
  pokemon: Pokemon,
  setDragged: Function
) => {
  setDragged(pokemon);
  console.log('grabbed');
};

export const handleDragOver = (event: React.DragEvent<HTMLImageElement>) => {
  event.preventDefault();
};

export const handleDrop = (
  event: React.DragEvent<HTMLDivElement>,
  dragged: Pokemon
) => {
  event.preventDefault();
  console.log(dragged);
};
