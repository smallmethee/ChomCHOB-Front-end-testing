'use client'

import OrderSummary from '@/core/pocket/order-summary'
import PocketDetail from '@/core/pocket/pocket-detail'
import { useActions, useTypedSelector } from '@/hooks'

const PocketPage = () => {
  const { pocket } = useTypedSelector((state) => state.general)
  const { setPocket } = useActions()

  if (pocket.length === 0) {
    return <div>no data</div>
  }

  return (
    <div className="pt-[54px]">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-[44px] ">
        <div className="bg-white flex-grow h-fit rounded-lg py-4">
          <p className="pl-6 text-base font-bold">
            Pocket list ({pocket.length})
          </p>
          <div className="py-6 flex flex-col gap-[10px] divide-y">
            <div className="flex px-6">
              <p className="text-sm font-bold min-w-[144px] flex-grow">
                Product name
              </p>
              <p className="text-sm font-bold min-w-[144px] text-center">
                Quantity
              </p>
              <p className="text-sm font-bold min-w-[144px]" />
            </div>
            {pocket.map((value, index) => (
              <PocketDetail
                {...value}
                key={index}
                onDelete={() => setPocket(pocket.filter((_, i) => i !== index))}
              />
            ))}
          </div>
        </div>

        <OrderSummary />
      </div>
    </div>
  )
}

export default PocketPage
