import { Skeleton, SkeletonList } from '@/shared/ui/skeleton'
import { popularRequestPageSize } from '../config'

import styles from './styles.module.scss'

export function ModCardsCompilationLoading() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Skeleton className="w-[220px] h-[36px]" />
				<Skeleton className="w-[150px] h-[36px]" />
			</div>
			<ul className={styles.mods}>
				<SkeletonList count={popularRequestPageSize} height={278} />
			</ul>
		</div>
	)
}
