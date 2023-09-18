import clsx from 'clsx'
import { FC } from 'react'

interface ISubHeading {
	text: string
	className?: string
}

const SubHeading: FC<ISubHeading> = ({ text, className = '' }) => {
	return <div className={clsx('font-bold text-gray-200 mb-2', { [className]: true })}>{text}</div>
}

export default SubHeading
