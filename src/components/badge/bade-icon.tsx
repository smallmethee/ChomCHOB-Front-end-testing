import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react'

type BadeIconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  componentValue?: ReactNode
}

export const BadeCountComponent = ({ value }: { value: string }) => {
  return (
    <div className="bg-black h-4 w-4 rounded-full absolute top-0 -right-1">
      <div className="w-full flex items-center justify-center">
        <p className="text-white text-[10px] truncate">{value}</p>
      </div>
    </div>
  )
}

const BadeIcon = forwardRef<HTMLDivElement, BadeIconProps>(
  ({ children, componentValue }, ref) => {
    return (
      <div ref={ref} className="relative">
        {componentValue && componentValue}
        {children}
      </div>
    )
  }
)

BadeIcon.displayName = 'bade-icon'
export default BadeIcon
