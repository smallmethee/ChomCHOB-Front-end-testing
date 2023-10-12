/* eslint-disable no-unused-vars */
import { useLocalStorage } from 'react-use'

export enum PokemonLayoutVal {
  rtl = 'rtl',
  ltr = 'ltr',
}

export const usePokemonLayout = () => {
  return useLocalStorage<PokemonLayoutVal>(
    'pokemon-layout',
    PokemonLayoutVal.ltr
  )
}
