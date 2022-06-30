import { AvailableMoves } from './Moves';

export interface PokeStats {
  name: string;
  baseStat: number;
}

export interface MoveSkeleton {
  name: string;
  url: string;
  level: number;
}

export interface PokemonSkeleton {
  sprites: {
    front: string;
    back: string;
  };
  xp: {
    currentLevel: number;
    currentXp: number;
    needed: number;
  };
  currentHealth: number;
  weight: number;
  game: string;
  type: string[];
  stats: PokeStats[];
  availableMoves: AvailableMoves[];
  movesList: MoveSkeleton[];
}

export interface Pokemon {
  name: string;
  id: number;
  slot?: number;
  specifics?: PokemonSkeleton;
}
