'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

type Props = {
	indicatorColor?: string
}

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & Props
>(({ className, value, max, indicatorColor = 'hsl(var(--primary))', ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}
		style={{ border: `1px solid ${indicatorColor}` }}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="h-full w-full flex-1 bg-primary transition-all duration-500"
			style={{
				transform: `translateX(-${100 - ((value || 0) / (max || 0)) * 100}%)`,
				backgroundColor: indicatorColor,
			}}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
