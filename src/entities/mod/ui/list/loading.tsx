import { Skeleton, SkeletonList } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function ModListLoading() {
	return (
		<>
			<div className={styles.header}>
				<div className="w-[200px]">
					<Skeleton className="h-[40px]" />
				</div>
				<div className="w-[150px]">
					<Skeleton className="h-[40px]" />
				</div>
			</div>
			<ul className={styles.mods}>
				<SkeletonList count={12} height={260} />
			</ul>
		</>
	)
}
