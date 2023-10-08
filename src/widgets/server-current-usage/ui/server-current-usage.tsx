'use client'

import { Progress } from '@/shared/ui/progress'
import { Skeleton } from '@/shared/ui/skeleton'

import { useFetchServerCurrentUsage } from '../queries'

import styles from './styles.module.scss'

export function ServerCurrentUsage() {
	const { data: currentUsage, isLoading } = useFetchServerCurrentUsage()

	if (isLoading) return <Skeleton className="w-full h-[220px]" />

	if (!currentUsage) return null

	return (
		<div className={styles.card}>
			<div className={styles.header}>Использование ресурсов</div>
			<div className={styles.hr}></div>
			<div className={styles.body}>
				<div className={styles.lines}>
					{currentUsage.map((item) => (
						<div key={item.label} className={styles.line}>
							<div className={styles.progress}>
								<div className={styles.label}>
									<span className={styles.dot} style={{ backgroundColor: item.color }} />
									<span>{item.label}</span>
								</div>
								<div className={styles.value}>
									{item.isPercent
										? `${item.value} %`
										: `${item.value} / ${item.maxValue} ${item.valueUnit}`}
								</div>
							</div>
							<Progress value={item.value} max={item.maxValue} indicatorColor={item.color} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
