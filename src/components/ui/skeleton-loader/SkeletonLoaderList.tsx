import { FC } from 'react'

import SkeletonLoader from './SkeletonLoader'

interface ISkeletonLoaderList {
	count: number
	height: number
	className?: string
}

const SkeletonLoaderList: FC<ISkeletonLoaderList> = ({ count, height, className }) => {
	const arr = new Array(count).fill(1)
	return (
		<>
			{arr.map((item, index) => (
				<SkeletonLoader
					key={`skeleton-${index}`}
					style={{
						height: `${height}px`,
					}}
					className={className}
				></SkeletonLoader>
			))}
		</>
	)
}

export default SkeletonLoaderList
