// import { Progress } from '@nextui-org/react'
import { FC, useEffect, useState } from 'react'

import { useServer } from '@/entities/server/model'
import { ServerService } from '@/entities/server/service'
import { ServerCurrentUsageItem } from '@/entities/server/types'

import styles from './ServerCurrentUsage.module.scss'

const ServerCurrentUsage: FC = () => {
	const { server } = useServer()
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
							<div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.color }} />
							<div className={styles.label}>{item.label}</div>
							<div className={styles.value}>
								{item.isPercent
									? `${item.value} %`
									: `${item.value} / ${item.maxValue} ${item.valueUnit}`}
							</div>

							<h1>TODO Progress</h1>
							{/* <Progress
								value={item.value}
								max={item.maxValue}
								className={styles.progress}
								css={{
									'& .nextui-progress-wrapper-enter': {
										backgroundColor: item.color,
									},
								}}
							/> */}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ServerCurrentUsage