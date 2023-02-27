import clsx from 'clsx'
import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1
			className={clsx(
				{ 'text-white font-semibold mb-4': true },
				{ 'text-3xl': !className?.includes('xl') },
				{ [className || '']: true }
			)}
		>
			{title}
		</h1>
	)
}

export default Heading
