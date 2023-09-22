import { SkeletonList } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function ServersListLoading() {
	return (
		<div className={styles.servers}>
			<SkeletonList count={6} height={150} />
		</div>
	)
}
