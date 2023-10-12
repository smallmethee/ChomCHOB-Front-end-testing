import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'

const badgeLableVariants = cva('rounded-lg text-xs font-bold py-1 px-2 w-fit', {
  variants: {
    color: {
      yellow: 'bg-yellow-100 text-yellow-900',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
})

type BadgeLabelProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  VariantProps<typeof badgeLableVariants>

const BadgeLabel = forwardRef<HTMLDivElement, BadgeLabelProps>(
  ({ color, className, children, ...others }, ref) => {
    return (
      <div
        {...others}
        className={cn(badgeLableVariants({ color }), className)}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

BadgeLabel.displayName = 'BadgeLabel'

export default BadgeLabel
