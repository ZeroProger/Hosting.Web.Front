import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
	capitalize?: boolean
}

const Heading: FC<IHeading> = ({ title, className, capitalize }) => {
	return (
		<h1 className={`text-white font-semibold mb-4 text-3xl ${capitalize ? 'capitalize' : ''}`}>
			{title}
		</h1>
	)
}

export default Heading
