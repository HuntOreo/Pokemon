import { Pokemon } from '../interfaces/Pokemon';

export const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
  console.log('grabbed');
};

export const handleDragOver = (event: React.DragEvent<HTMLImageElement>) => {
  event.preventDefault();
};

export const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  console.log('dropped');
};
