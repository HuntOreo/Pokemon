import { Pokemon } from './Pokemon';

export interface StageProps {
  dragged: Pokemon | undefined;
  setDragged: Function;
}

export interface SideBoxProps {
  dragged: Pokemon | undefined;
  setDragged: Function;
  teamSlots: Element[] | undefined;
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
