import { popularRequestPageSize } from '@/shared/config/mods'
import { Skeleton, SkeletonList } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function ModsCompilationLoading() {
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
