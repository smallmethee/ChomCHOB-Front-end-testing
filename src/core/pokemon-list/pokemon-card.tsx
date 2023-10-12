'use client'

import { usePokemonByIdQuery } from '@/store/services/pokemonService'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { memo } from 'react'
import BadgeLabel from '../../components/badge/badge-label'
import Button from '../../components/button/button'

type PokemonCardProps = {
  name: string
  errorFullScene?: boolean
}

const PokemonCard = ({ name, errorFullScene }: PokemonCardProps) => {
  const { data, isLoading, isError } = usePokemonByIdQuery({ name })
  const searchParams = useSearchParams()
  const q = searchParams.get('q')

  if (isLoading) {
    return (
      <div className="pokemon-card flex items-center justify-center">...</div>
    )
  }

  if (isError) {
    if (errorFullScene) {
      return (
        <div className="absolute left-0 right-0 text-center gap-3 h-20 flex m-4 flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 36 36"
          >
            <g
              stroke="#373737"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.188"
              opacity="0.4"
            >
              <path d="M14.985 14.985l5.156 5.156M14.985 20.141l5.156-5.156"></path>
            </g>
            <path
              stroke="#373737"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.188"
              d="M17.27 31.125c7.652 0 13.855-6.203 13.855-13.854 0-7.652-6.203-13.854-13.854-13.854-7.652 0-13.855 6.202-13.855 13.854 0 7.651 6.203 13.854 13.855 13.854z"
            ></path>
            <path
              stroke="#373737"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.188"
              d="M32.583 32.583l-2.916-2.916"
              opacity="0.4"
            ></path>
          </svg>
          <div className="text-[#909090]">
            Oops! Nothing was found for “ {q} ” Please try to search for
            something else.
          </div>
        </div>
      )
    }

    return (
      <div className="pokemon-card flex items-center justify-center">error</div>
    )
  }

  if (!data) {
    return (
      <div className="pokemon-card flex items-center justify-center">
        no data
      </div>
    )
  }

  const official = data.sprites.other?.['official-artwork'].front_default

  return (
    <div className={cn('pokemon-card flex')}>
      <div
        className={cn(
          'relative',
          'group-aria-[orientation=vertical]:flex-1',
          'group-aria-[orientation=horizontal]:w-20 group-aria-[orientation=horizontal]:h-20'
        )}
      >
        {official && (
          <Image
            className="object-contain aspect-auto"
            src={official}
            alt={data.species.name}
            sizes="200px, 200px"
            fill
          />
        )}
      </div>
      <div className={cn('flex flex-col gap-2 pokemon-footer')}>
        <div className="flex flex-col gap-2 w-fit">
          <div className="flex-1 text-base font-bold text-black capitalize">
            {data.name}
          </div>
          <div className="flex gap-1 flex-wrap">
            {data.types.map(({ type }, index) => (
              <BadgeLabel key={index} className="capitalize">
                {type.name}
              </BadgeLabel>
            ))}
          </div>
        </div>
        <div
          className={cn(
            'text-dark-gray text-xs',
            'group-aria-[orientation=vertical]:hidden',
            'group-aria-[orientation=horizontal]:block'
          )}
        >
          Abilities:
          {data.abilities.map(({ ability }) => ability.name).join(', ')}
        </div>
        <Link
          className={cn(
            'mt-auto',
            'group-aria-[orientation=vertical]:block',
            'group-aria-[orientation=horizontal]:hidden'
          )}
          href={`/pokemon-detail/${data.id}`}
        >
          <Button>detail</Button>
        </Link>
      </div>
    </div>
  )
}

export default memo(PokemonCard)
