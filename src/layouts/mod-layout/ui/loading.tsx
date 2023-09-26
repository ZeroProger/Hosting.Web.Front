import clsx from 'clsx'

import { SkeletonList } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function ModLayoutLoading() {
	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<SkeletonList count={1} height={52} />
			</div>
			<div className={styles.modHeader}>
				<div className={clsx(styles.modImage, 'w-[80px]', 'h-[80px]')}>
					<SkeletonList count={1} height={80} />
				</div>
				<h1 className={clsx(styles.modName, 'w-[200px]')}>
					<SkeletonList count={1} height={35} />
				</h1>
				<ul className={styles.modDetails}>
					<li className="w-[100px]">
						<SkeletonList count={1} height={24} />
					</li>
					<li className="w-[70px]">
						<SkeletonList count={1} height={24} />
					</li>
					<li className="w-[70px]">
						<SkeletonList count={1} height={24} />
					</li>
				</ul>
				<div className={styles.modActions}>
					<div className="w-[50px]">
						<SkeletonList count={1} height={50} />
					</div>
					<div className="w-[150px]">
						<SkeletonList count={1} height={50} />
					</div>
				</div>
			</div>
			<div style={{ gridArea: 'aside' }}>
				<SkeletonList count={1} height={600} />
			</div>
			<ul className={styles.tabs}>
				<div className="flex flex-row gap-3 items-center">
					<div className="w-[120px]">
						<SkeletonList count={1} height={30} />
					</div>
					<div className="w-[120px]">
						<SkeletonList count={1} height={30} />
					</div>
					<div className="w-[120px]">
						<SkeletonList count={1} height={30} />
					</div>
				</div>
			</ul>
			<section className={clsx(styles.tabContent, 'flex flex-col gap-4')}>
				<SkeletonList count={1} height={100} />
				<SkeletonList count={1} height={150} />
				<SkeletonList count={1} height={50} />
				<SkeletonList count={1} height={100} />
				<SkeletonList count={1} height={75} />
			</section>
		</div>
	)
}
