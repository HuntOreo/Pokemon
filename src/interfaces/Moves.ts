export interface AvailableMoves {
  accuracy: number | undefined;
  ailment: AilmentSkeleton | undefined;
  crit_chance: number | undefined;
  damage_class:
    | {
        name: string | undefined;
        url: string | undefined;
      }
    | undefined;
  effect_chance: number | undefined;
  flinch_chance: number | undefined;
  healing: number | undefined;
  id: number | undefined;
  name: string | undefined;
  power: number | undefined;
  pp: number | undefined;
  type: string | undefined;
}

interface AilmentSkeleton {
  name: string | undefined;
  url: string | undefined;
  chance: number | undefined;
}
