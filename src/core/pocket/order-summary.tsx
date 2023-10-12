import Button from '@/components/button/button'

const OrderSummary = () => {
  return (
    <div className="min-w-[282px] shadow-[0px_0px_10px_0px_rgba(58,58,58,0.05)] bg-white h-fit rounded-lg overflow-hidden">
      <div className="bg-[#FFF9E3] p-[10px] h-[44px]">
        <p className="text-base font-bold">Order Summary</p>
      </div>
      <div className="h-[240px] px-3 pt-[14px] pb-5 flex flex-col">
        <div className="flex-grow flex flex-col gap-[14px]">
          <div className="flex">
            <p className="text-sm flex-grow">Subtotal</p>
            <p className="text-sm font-bold">2 Product</p>
          </div>
          <div className="flex">
            <p className="text-sm flex-grow">Quantity</p>
            <p className="text-sm font-bold">2 Quantity</p>
          </div>
        </div>
        <Button variant="error" size="lg">
          Proceed to checkout
        </Button>
      </div>
    </div>
  )
}

export default OrderSummary
