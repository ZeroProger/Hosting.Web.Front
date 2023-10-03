import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

const badgeVariants = cva(
	'absolute -top-1.5 -right-1.5 min-w-[16px] px-0.5 h-4 inline-flex justify-center items-center rounded-full border text-xs leading-[normal] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {
	content: React.ReactNode
}

function Badge({ className, variant, content, children, ...props }: BadgeProps) {
	return (
		<>
			{children}
			<span className={cn(badgeVariants({ variant }), className)} {...props}>
				{content}
			</span>
		</>
	)
}

export { Badge, badgeVariants }
