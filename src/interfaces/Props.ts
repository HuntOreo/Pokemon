import { Pokemon } from './Pokemon';

export interface StageProps {
  amount: number;
  dragged: Pokemon | undefined;
  setDragged: Function;
  focusedPokemon: Pokemon | undefined;
  setFocusedPokemon: Function;
  focusedSprite: string | undefined;
  setFocusedSprite: Function;
}

export interface SideBoxProps {
  dragged: Pokemon | undefined;
  setDragged: Function;
  teamSlots: Element[] | undefined;
  setFocusedPokemon: Function;
  setFocusedSprite: Function;
}

export interface CardProps {
  pokemon: Pokemon | undefined;
}

export interface FocusedProps {
  focusedPokemon: Pokemon | undefined;
  setFocusedPokemon: Function;
  focusedSprite: string | undefined;
  setFocusedSprite: Function;
  dragged: Pokemon | undefined;
  setDragged: Function;
  amount: number;
}

export interface TypesProps {
  types: string[] | undefined;
}
