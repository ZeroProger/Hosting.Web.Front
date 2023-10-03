import { cn } from '@/shared/lib/utils'

export function SubHeading({
	children,
	className,
	level = 3,
}: {
	children: React.ReactNode
	className?: string
	level?: 2 | 3 | 4 | 5
}) {
	const classname = cn('text-lg font-normal text-foreground text-opacity-60 mb-3', {
		'text-xl': level === 2,
    'text-lg': level === 3,
    'text-md': level === 4,
    'text-sm': level === 5,
	}, className)

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
