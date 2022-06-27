export interface PokemonSkeleton {
  sprites: {
    front: string;
    back: string;
  };
  weight: number;
  game: string;
  type: string[];
  stats: PokeStats[];
}

export interface Pokemon {
  name: string;
  id: number;
  slot?: number;
  specifics?: PokemonSkeleton;
}

export interface PokeStats {
  name: string;
  baseStat: number;
}
