import { Skeleton, SkeletonList } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function ModsCompilationLoading() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Skeleton className="w-[200px] h-[40px]" />
				<Skeleton className="w-[150px] h-[40px]" />
			</div>
			<ul className={styles.mods}>
				<SkeletonList count={12} height={260} />
			</ul>
		</div>
	)
}
