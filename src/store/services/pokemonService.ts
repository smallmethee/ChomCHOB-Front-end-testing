import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PokemonListIDData } from './types/pokemon-by-id.type'
import { PokemonListData } from './types/pokemon-list.type'

type PaginationOptions = {
  limit: number
  page: number
}

type PokemonsList = Partial<PaginationOptions>

export const pokemonService = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    pokemonsList: builder.query<PokemonListData, PokemonsList>({
      query: ({ limit = 20 }) =>
        `/pokemon/?${new URLSearchParams({
          limit: limit.toString(),
        }).toString()}`,
    }),
    pokemonById: builder.query<PokemonListIDData, { name: string }>({
      query: ({ name }) => `/pokemon/${name}`,
    }),
  }),
})

export const { usePokemonsListQuery, usePokemonByIdQuery } = pokemonService
