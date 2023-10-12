'use client'

import Button from '@/components/button/button'
import ButtonQty from '@/components/button/button-qty'
import { useActions, useTypedSelector } from '@/hooks'
import { PokemonListIDData } from '@/store/services/types/pokemon-by-id.type'
import { useState } from 'react'

const CardPokemonDetail = ({ data }: { data: PokemonListIDData }) => {
  const { setPocket } = useActions()
  const { pocket } = useTypedSelector((state) => state.general)
  const [qty, setQty] = useState(1)
  console.log('data', data)
  return (
    <>
      <div className="flex gap-20 my-6">
        <p className="text-sm">Quantitiy:</p>
        <ButtonQty
          onDecrement={() => setQty(qty - 1)}
          onIncrement={() => setQty(qty + 1)}
          min={1}
          value={qty}
        />
      </div>
      <Button
        variant="error"
        size="lg"
        className="max-w-[254px] flex justify-center"
        onClick={() => {
          setPocket([
            ...pocket,
            {
              id: data.id,
              qty: qty,
            },
          ])
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 18 18"
          className="mr-2"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.125"
            d="M5.625 5.752v-.727c0-1.688 1.357-3.345 3.045-3.503a3.375 3.375 0 013.705 3.36v1.035M6.75 16.5h4.5c3.015 0 3.555-1.207 3.713-2.678l.562-4.5C15.728 7.492 15.203 6 12 6H6C2.798 6 2.273 7.492 2.475 9.322l.563 4.5c.157 1.47.697 2.678 3.712 2.678z"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11.622 9h.007M6.37 9h.008"
          ></path>
        </svg>
        Add to pocket
      </Button>
    </>
  )
}

export default CardPokemonDetail
