import BadgeLabel from '@/components/badge/badge-label'
import { PocketData } from '@/store/general/types'
import { usePokemonByIdQuery } from '@/store/services/pokemonService'
import Image from 'next/image'

type PocketDetailProps = {
  onDelete(): void
} & PocketData
const PocketDetail = ({ qty, id, onDelete }: PocketDetailProps) => {
  const { data } = usePokemonByIdQuery({
    name: id.toString(),
  })
  if (!data) return <div>no data</div>

  const official = data.sprites.other?.['official-artwork'].front_default
  return (
    <div className="px-6 pt-4 flex">
      <div className="flex gap-4 items-center flex-grow">
        {official && (
          <Image src={official} width={80} height={80} alt={data.name} />
        )}
        <div className="flex flex-col gap-2 w-fit">
          <div className="text-base font-bold text-black capitalize">
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
      </div>
      <div className="min-w-[144px] grid place-content-center text-lg font-medium">
        {qty}
      </div>
      <div className="min-w-[144px] grid place-content-center">
        <button onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#666"
              d="M6.667 12a.667.667 0 00.666-.667v-4a.667.667 0 10-1.333 0v4a.667.667 0 00.667.667zm6.666-8h-2.666v-.667a2 2 0 00-2-2H7.333a2 2 0 00-2 2V4H2.667a.667.667 0 000 1.333h.666v7.334a2 2 0 002 2h5.334a2 2 0 002-2V5.333h.666a.667.667 0 100-1.333zm-6.666-.667a.667.667 0 01.666-.666h1.334a.667.667 0 01.666.666V4H6.667v-.667zm4.666 9.334a.667.667 0 01-.666.666H5.333a.667.667 0 01-.666-.666V5.333h6.666v7.334zm-2-.667a.667.667 0 00.667-.667v-4a.667.667 0 00-1.333 0v4a.667.667 0 00.666.667z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PocketDetail
