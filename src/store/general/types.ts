import { PokemonListIDData } from '../services/types/pokemon-by-id.type'

export type PocketData = {
  qty: number
} & Pick<PokemonListIDData, 'id'>
