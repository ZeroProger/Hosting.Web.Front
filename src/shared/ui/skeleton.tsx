import { useId } from 'react'

import { cn } from '@/shared/lib/utils'

type SkeletonListProps = {
	count: number
	height: number
}

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}

function SkeletonList({
	className,
	count,
	height,
	...props
}: React.HTMLAttributes<HTMLDivElement> & SkeletonListProps) {
	const arr = new Array(count).fill(1)
	const id = useId()

	return (
		<>
			{arr.map((_, idx) => (
				<Skeleton
					key={`${id}-skeleton-list-item-${idx}`}
					className={cn(className, `h-[${height}px]`)}
				/>
			))}
		</>
	)
}

export { Skeleton, SkeletonList }
