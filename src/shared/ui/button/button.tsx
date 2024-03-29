import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-button text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline:
					'border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
				ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-2 py-2',
				sm: 'h-8 px-2',
				lg: 'h-12 px-4',
				icon: 'h-auto w-auto px-2 py-2',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, type = 'button', asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				type={type}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
