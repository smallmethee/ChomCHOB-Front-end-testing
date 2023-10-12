'use client'

import { cn } from '@/utils'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { usePokemonsListQuery } from '../../store/services/pokemonService'
import PokemonCard from './pokemon-card'

const PokemonList = () => {
  const [rtl, setRtl] = useState(true)
  const { data, isLoading } = usePokemonsListQuery({})
  const searchParams = useSearchParams()
  const name = searchParams.get('q')

  return (
    <div className="pt-[44px]">
      <div className="pb-[32px] flex justify-between">
        <div className="text-base font-semibold">
          Products
          {data?.count && <div className="inline pl-1">({data.count})</div>}
        </div>
        <div className="flex rounded-md overflow-hidden">
          <button
            onClick={() => {
              setRtl(true)
            }}
            className={cn('p-2', {
              'bg-yellow': rtl,
              'bg-gray-50': !rtl,
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="#373737"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.667 5.68V2.653c0-.94-.427-1.32-1.487-1.32h-2.693c-1.06 0-1.487.38-1.487 1.32v3.02c0 .947.427 1.32 1.487 1.32h2.693c1.06.007 1.487-.373 1.487-1.313zM14.667 13.18v-2.693C14.667 9.427 14.24 9 13.18 9h-2.693C9.427 9 9 9.427 9 10.487v2.693c0 1.06.427 1.487 1.487 1.487h2.693c1.06 0 1.487-.427 1.487-1.487zM7 5.68V2.653c0-.94-.426-1.32-1.487-1.32H2.82c-1.06 0-1.486.38-1.486 1.32v3.02c0 .947.426 1.32 1.486 1.32h2.693C6.573 7 7 6.62 7 5.68zM7 13.18v-2.693C7 9.427 6.574 9 5.513 9H2.82c-1.06 0-1.486.427-1.486 1.487v2.693c0 1.06.426 1.487 1.486 1.487h2.693C6.573 14.667 7 14.24 7 13.18z"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => setRtl(false)}
            className={cn('p-2', {
              'bg-yellow': !rtl,
              'bg-gray-50': rtl,
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="#373737"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.267 9H2.733c-1 0-1.4.427-1.4 1.487v2.693c0 1.06.4 1.487 1.4 1.487h10.534c1 0 1.4-.427 1.4-1.487v-2.693c0-1.06-.4-1.487-1.4-1.487zM13.267 1.333H2.733c-1 0-1.4.427-1.4 1.487v2.693c0 1.06.4 1.487 1.4 1.487h10.534c1 0 1.4-.427 1.4-1.487V2.82c0-1.06-.4-1.487-1.4-1.487z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="h-screen grid place-content-center">...loading</div>
      ) : (
        <div
          aria-orientation={rtl ? 'vertical' : 'horizontal'}
          className={cn('grid group group-pokemon relative')}
        >
          {name ? (
            <PokemonCard name={name} errorFullScene />
          ) : (
            Array(100)
              .fill(0)
              .map((_, index) => {
                return <PokemonCard key={index} name={(index + 1).toString()} />
              })
          )}
        </div>
      )}
    </div>
  )
}

export default PokemonList
