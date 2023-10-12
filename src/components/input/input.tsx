import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

const inputVariants = cva(
  'text-sm text-black placeholder:text-dark-gray p-2 rounded-[10px] w-full',
  {
    variants: {
      variant: {
        standard:
          'bg-gray-100 text-dark focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1',
      },
      size: {
        base: 'text-sm py-2 px-4 h-[48px]',
      },
      space: {
        icon: 'pl-14',
      },
    },
    defaultVariants: {
      size: 'base',
      variant: 'standard',
    },
  }
)

type InputProps = {
  icon?: ReactNode
} & Omit<VariantProps<typeof inputVariants>, 'space'> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, variant, size, className, ...others }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 flex items-center pl-4">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            inputVariants({ space: icon ? 'icon' : undefined, variant, size }),
            className
          )}
          {...others}
        />
      </div>
    )
  }
)
Input.displayName = 'input'
export default Input
