import clsx from 'clsx'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...props }) => {
	return (
		<Skeleton
			{...props}
			baseColor="#383838"
			highlightColor="#292A2E"
			className={clsx('rounded-lg', className)}
	/>
	)
}

export default SkeletonLoader
