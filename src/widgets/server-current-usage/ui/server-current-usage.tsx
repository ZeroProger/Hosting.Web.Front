'use client'

import { useStore } from 'effector-react'
import { Info } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { Progress } from '@/shared/ui/progress'
import { Skeleton } from '@/shared/ui/skeleton'

import { useFetchServerCurrentUsage } from '../queries'

import styles from './styles.module.scss'

export function ServerCurrentUsage() {
	const serverHash = useStore($serverHash)

	const { data: server } = useFetchServer(serverHash)
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
						<div
							key={item.label}
							className={cn(styles.line, { 'opacity-100': server && !server.isOnline })}
						>
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
				{/* {server && !server.isOnline && (
					<div className={styles.offline}>
						<span className="flex items-center gap-2 text-xl font-medium">
							<Info size={24} strokeWidth={3} />
							Нет процесса
						</span>
					</div>
				)} */}
			</div>
		</div>
	)
}
