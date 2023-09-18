import { cn } from '../lib/utils'

export function Heading({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h1 className={cn('text-foreground font-semibold text-3xl mb-3', className)}>{children}</h1>
	)
}

export function SubHeading({
	children,
	className,
	level = 3,
}: {
	children: React.ReactNode
	className?: string
	level?: 2 | 3 | 4 | 5
}) {
	const classname = cn('text-lg font-light text-foreground text-opacity-60 mb-3', className)

	const subheading =
		level === 2 ? (
			<h2 className={classname}>{children}</h2>
		) : level === 3 ? (
			<h3 className={classname}>{children}</h3>
		) : level === 4 ? (
			<h4 className={classname}>{children}</h4>
		) : level === 5 ? (
			<h5 className={classname}>{children}</h5>
		) : null

	return <>{subheading}</>
}
