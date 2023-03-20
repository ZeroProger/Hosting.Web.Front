import { FC } from 'react'

import ServerActivePlayers from '@/components/server-active-players/ServerActivePlayers'
import ServerCurrentUsage from '@/components/server-current-usage/ServerCurrentUsage'
import ServerMainInfo from '@/components/server-main-info/ServerMainInfo'
import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'

import styles from './ServerOverview.module.scss'

interface IServerOverview {}

const ServerOverview: FC<IServerOverview> = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.column}>
					<ServerMainInfo />
					<ServerActivePlayers />
				</div>
				<div className={styles.column}>
					<ServerMiniConsole />
					<ServerCurrentUsage />
				</div>
			</div>
		</>
	)
}

export default ServerOverview
