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
  weight: number;
  game: string;
  type: string[];
  stats: PokeStats[];
  moves: MoveSkeleton[];
}

export interface Pokemon {
  name: string;
  id: number;
  slot?: number;
  specifics?: PokemonSkeleton;
}
