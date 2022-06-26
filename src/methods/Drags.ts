import React from 'react';
import { Pokemon } from '../interfaces/Pokemon';
import { swapSideBoxPokemon } from './Methods';

export const handleDragStart = (
  event: React.DragEvent<HTMLImageElement | HTMLDivElement>,
  pokemon: Pokemon,
  setDragged: Function,
  setSwappingDiv?: Function,
  setSwappingPokemon?: Function
): void => {
  if (setSwappingDiv && setSwappingPokemon) {
    const target = event.target as HTMLElement;
    setSwappingPokemon && setSwappingPokemon(pokemon);
    setSwappingDiv && setSwappingDiv(target.parentElement);
  } else {
    pokemon.slot = 0;
    setDragged(pokemon);
  }
};

export const handleDragOver = (
  event: React.DragEvent<HTMLImageElement> | React.DragEvent<HTMLDivElement>
): void => {
  event.preventDefault();
};

export const handleDrop = (
  event: React.DragEvent<HTMLDivElement>,
  dragged: Pokemon,
  team: Pokemon[],
  setTeam: Function,
  teamSlots: Element[],
  swapDiv?: HTMLElement,
  setSwappingDiv?: Function,
  swapPokemon?: Pokemon
): void => {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const parent = target.parentElement;
  const newTeam = [...team];

  if (parent) {
    const currentIndex = teamSlots.indexOf(parent);
    const currentPokemon = newTeam[currentIndex];

    if (swapDiv && swapPokemon) {
      swapSideBoxPokemon(
        parent,
        newTeam,
        setTeam,
        teamSlots,
        swapDiv,
        setSwappingDiv,
        swapPokemon
      );
    } else if (currentPokemon && currentPokemon.name !== '') {
      const replacement: Pokemon = { ...dragged };
      replacement.slot = currentIndex + 1;
      newTeam[currentIndex] = replacement;
      setTeam(newTeam);
    } else {
      const index = teamSlots.indexOf(target);
      const placedPokemon: Pokemon = { ...dragged };

      const newTeam = [...team];
      placedPokemon.slot = index + 1;

      newTeam[index] = placedPokemon;
      setTeam(newTeam);
    }
  }
};
