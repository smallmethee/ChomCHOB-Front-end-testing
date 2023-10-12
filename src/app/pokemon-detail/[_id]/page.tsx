import BadgeLabel from '@/components/badge/badge-label'
import CardPokemonDetail from '@/core/pokemon-detail/card-pokemon-detail'
import { PokemonListIDData } from '@/store/services/types/pokemon-by-id.type'
import Image from 'next/image'
import Link from 'next/link'

async function getPokemonById({ _id }: { _id: string }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${_id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const projects = await res.json()

  return projects as PokemonListIDData
}

const PokemonDetail = async ({ params }: { params: { _id: string } }) => {
  const data = await getPokemonById({ _id: params._id })
  const official = data.sprites.other?.['official-artwork'].front_default
  return (
    <div className="px-4">
      <div className="pt-[44px] pb-6">
        <Link
          href="/"
          className="flex items-center text-base font-semibold w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
            className="mr-1"
          >
            <path
              stroke="#373737"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M11.25 14.94l-4.89-4.89a1.49 1.49 0 010-2.1l4.89-4.89"
            ></path>
          </svg>
          Back
        </Link>
      </div>

      <div className="bg-white rounded-2xl px-[14px] py-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid gap-[100px]">
        {official && (
          <Image
            src={official}
            alt={data.name}
            priority
            width={353}
            height={353}
          />
        )}
        <div className="flex flex-col">
          <div className="text-base font-bold capitalize pb-2">{data.name}</div>
          <div className="flex flex-col gap-[14px]">
            <div className="flex gap-1">
              {data.types.map(({ type }, index) => (
                <BadgeLabel key={index} className="capitalize">
                  {type.name}
                </BadgeLabel>
              ))}
            </div>
            <div className="text-sm">
              Stats:
              <div className="inline pl-[13px]">
                {data.stats.map(({ stat }) => stat.name).join(', ')}
              </div>
            </div>
            <div className="text-sm">
              Abilities:
              <div className="inline pl-[13px]">
                {data.abilities.map(({ ability }) => ability.name).join(', ')}
              </div>
            </div>
          </div>
          <CardPokemonDetail data={data} />
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
