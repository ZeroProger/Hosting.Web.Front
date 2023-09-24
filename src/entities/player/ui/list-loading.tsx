import { SkeletonList } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function DataListLoading() {
	return (
		<div className={styles.container}>
			<SkeletonList count={1} height={40} className="w-[300px] mb-4" />
			<div className={styles.table}>
				<SkeletonList count={6} height={56} className="w-full" />
			</div>
		</div>
	)
}
