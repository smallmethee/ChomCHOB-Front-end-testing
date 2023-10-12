'use client'

type ButtonQtyProps = {
  onDecrement(): void
  onIncrement(): void
  value: number
  min?: number
  max?: number
}
const ButtonQty = ({
  onDecrement,
  min,
  max,
  onIncrement,
  value,
}: ButtonQtyProps) => {
  return (
    <div className="flex border border-black rounded-lg bg-[#F5F5F5] min-h-[36px] w-[128px] overflow-hidden">
      <button
        className="w-9 gird place-content-center text-lg font-medium bg-white"
        onClick={() => {
          if (typeof min === 'number') {
            if (value > min) onDecrement()
          } else onDecrement()
        }}
      >
        -
      </button>
      <div className="flex-1 text-lg font-medium flex-shrink flex items-center justify-center">
        {value}
      </div>
      <button
        className="w-9 gird place-content-center text-lg font-medium bg-white"
        onClick={() => {
          if (typeof max === 'number') {
            if (value < max) onIncrement()
          } else onIncrement()
        }}
      >
        +
      </button>
    </div>
  )
}

export default ButtonQty
