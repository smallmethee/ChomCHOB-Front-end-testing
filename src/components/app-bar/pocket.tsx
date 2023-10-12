'use client'
import { useTypedSelector } from '@/hooks'
import BadeIcon, { BadeCountComponent } from '../badge/bade-icon'

const Pocket = () => {
  const { pocket } = useTypedSelector((state) => state.general)
  return (
    <BadeIcon
      componentValue={
        pocket.length > 0 ? (
          <BadeCountComponent value={pocket.length.toString()} />
        ) : null
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#FFCB05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 014.94 4.48v1.38M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22z"
        ></path>
        <path
          stroke="#FFCB05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.495 12h.01M8.495 12h.008"
        ></path>
      </svg>
    </BadeIcon>
  )
}

export default Pocket
