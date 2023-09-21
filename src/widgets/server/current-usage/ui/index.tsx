'use client';

import { FC, useEffect, useState } from 'react';
import { ServerService } from 'services-temp/server-service'

import { $server } from '@/entities/server/store'
//#TODO: избавиться от сервисов внутри widgets и entities и features, вынести логику в store
import { ServerCurrentUsageItem } from '@/entities/server/types'

import { Progress } from '@/shared/ui/progress'

import styles from './styles.module.scss'

const ServerCurrentUsage: FC = () => {
	const { server } = $server.getState()
	const [currentUsage, setCurrentUsage] = useState<ServerCurrentUsageItem[]>([])

	useEffect(() => {
		if (server) {
			const data = ServerService.currentUsage({
				gameServerHash: server.gameServerHash,
			})

			setCurrentUsage(data)
		}
	}, [server])

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

export default ServerCurrentUsage