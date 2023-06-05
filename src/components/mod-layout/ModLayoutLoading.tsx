import clsx from 'clsx'
import { FC } from 'react'

import SkeletonLoaderList from '../ui/skeleton-loader/SkeletonLoaderList'

import styles from './ModLayout.module.scss'

const ModLayoutLoading: FC = () => {
	return (
		<>
			<div className={styles.search}>
				<SkeletonLoaderList count={1} height={52} />
			</div>
			<nav className={styles.breadcrumbs}>
			<div className="w-[400px]">
				<SkeletonLoaderList count={1} height={24} />
			</div>
			</nav>
			<div className={styles.modHeader}>
				<div className={clsx(styles.modImage, 'w-[80px]', 'h-[80px]')}>
					<SkeletonLoaderList count={1} height={80} />
				</div>
				<h1 className={clsx(styles.modName, 'w-[200px]')}>
					<SkeletonLoaderList count={1} height={35} />
				</h1>
				<ul className={styles.modDetails}>
					<li className="w-[100px]">
						<SkeletonLoaderList count={1} height={24} />
					</li>
					<li className="w-[70px]">
						<SkeletonLoaderList count={1} height={24} />
					</li>
					<li className="w-[70px]">
						<SkeletonLoaderList count={1} height={24} />
					</li>
				</ul>
				<div className={styles.modActions}>
					<div className="w-[50px]">
						<SkeletonLoaderList count={1} height={50} />
					</div>
					<div className="w-[150px]">
						<SkeletonLoaderList count={1} height={50} />
					</div>
				</div>
			</div>
			<div style={{ gridArea: 'aside' }}>
				<SkeletonLoaderList count={1} height={600} />
			</div>
			<ul className={styles.tabs}>
				<div className="flex flex-row gap-3 items-center">
					<div className="w-[120px]">
						<SkeletonLoaderList count={1} height={30} />
					</div>
					<div className="w-[120px]">
						<SkeletonLoaderList count={1} height={30} />
					</div>
					<div className="w-[120px]">
						<SkeletonLoaderList count={1} height={30} />
					</div>
				</div>
			</ul>
			<section className={styles.tabContent}>
				<SkeletonLoaderList count={1} height={1000} />
			</section>
		</>
	)
}

export default ModLayoutLoading
