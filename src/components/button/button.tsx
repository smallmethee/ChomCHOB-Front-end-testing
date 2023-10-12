import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  PropsWithChildren,
} from 'react'

const buttonVariants = cva('w-full truncate capitalize', {
  variants: {
    variant: {
      outline: 'bg-transparent',
      standard: 'bg-black text-white',
      secondary: 'bg-yellow text-black',
      error: 'bg-red text-white',
    },
    size: {
      base: 'text-sm font-bold py-2 px-6',
      lg: 'py-4 font-bold text-sm leading-4',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'standard',
  },
})

type ButtonProps = PropsWithChildren &
  VariantProps<typeof buttonVariants> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, size, ...others }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          'rounded-lg',
          className
        )}
        {...others}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'button'

export default Button
