import { Skeleton } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function ServerOverviewLoading() {
	return (
		<section className={styles.container}>
			<div className={styles.column}>
				<div className="main-info">
					<Skeleton className="w-full h-[350px]" />
				</div>
				<div className="active-players">
					<Skeleton className="w-full h-[300px]" />
				</div>
			</div>
			<div className={styles.column}>
				<div className="mini-console">
					<Skeleton className="w-full h-[375px]" />
				</div>
				<div className="current-usage">
					<Skeleton className="w-full h-[220px]" />
				</div>
			</div>
		</section>
	)
}
