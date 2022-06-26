export interface PokemonSkeleton {
  sprites: {
    front: string;
    back: string;
  };
  weight: number;
  game: string;
  type: string[];
}

export interface Pokemon {
  name: string;
  id: number;
  slot?: number;
  specifics?: PokemonSkeleton;
}
