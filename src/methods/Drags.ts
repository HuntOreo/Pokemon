import React from 'react';
import { Pokemon } from '../interfaces/Pokemon';

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

  if (swapDiv && swapPokemon && parent) {
    const divAIndex = teamSlots.indexOf(swapDiv);
    const divBIndex = teamSlots.indexOf(parent);
    const newTeam = [...team];
    const pokeA = swapPokemon;
    const pokeB = newTeam[divBIndex];

    if (!pokeB) {
      setSwappingDiv && setSwappingDiv(undefined);
      return;
    }

    const slotA = pokeA.slot;
    const slotB = pokeB.slot;

    pokeA.slot = slotB;
    pokeB.slot = slotA;

    newTeam[divAIndex] = pokeB;
    newTeam[divBIndex] = pokeA;

    setTeam(newTeam);
    setSwappingDiv && setSwappingDiv(undefined);
  } else {
    const index = teamSlots.indexOf(target);
    const placedPokemon: Pokemon = { ...dragged };

    const newTeam = [...team];
    placedPokemon.slot = index + 1;

    newTeam[index] = placedPokemon;
    setTeam(newTeam);
  }
};
