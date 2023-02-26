import clsx from 'clsx'
import { FC } from 'react'

interface ISubHeading {
	text: string
	className?: string
}

const SubHeading: FC<ISubHeading> = ({ text, className = '' }) => {
	return (
		<div className={clsx('text-lg font-light text-white text-opacity-60', className)}>{text}</div>
	)
}

export default SubHeading
