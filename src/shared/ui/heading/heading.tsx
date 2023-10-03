import { cn } from '../../lib/utils'

export function Heading({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h1 className={cn('text-foreground font-semibold text-2xl lg:text-3xl mb-3', className)}>
			{children}
		</h1>
	)
}