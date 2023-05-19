import { Progress } from '@nextui-org/react'
import { FC, useEffect, useState } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IServerCurrentUsageItem } from '@/shared/types/server.types'

import { ServerService } from '@/services/server.service'

import styles from './ServerCurrentUsage.module.scss'

const ServerCurrentUsage: FC = () => {
	const server = useTypedSelector((state) => state.server.server)
	const [currentUsage, setCurrentUsage] = useState<IServerCurrentUsageItem[]>([])

	useEffect(() => {
		if (server) {
			const data = ServerService.controller.getServerCurrentUsage({
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
							<div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.color }} />
							<div className={styles.label}>{item.label}</div>
							<div className={styles.value}>
								{item.isPercent
									? `${item.value} %`
									: `${item.value} / ${item.maxValue} ${item.valueUnit}`}
							</div>
							<Progress
								value={item.value}
								max={item.maxValue}
								className={styles.progress}
								css={{
									'& .nextui-progress-wrapper-enter': {
										backgroundColor: item.color,
									},
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ServerCurrentUsage
