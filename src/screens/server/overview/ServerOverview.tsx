import { FC } from 'react'

import ServerActivePlayers from '@/components/server-active-players/ServerActivePlayers'
import ServerCurrentUsage from '@/components/server-current-usage/ServerCurrentUsage'
import ServerMainInfo from '@/components/server-main-info/ServerMainInfo'
import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import Meta from '@/utils/meta/Meta'

import styles from './ServerOverview.module.scss'

interface IServerOverview {}

const ServerOverview: FC<IServerOverview> = () => {
	const server = useTypedSelector((state) => state.server.server)

	return (
		<Meta
			title={
				server
					? `Основная информация о сервере ${server.gameServerName}`
					: 'Основная информация о сервере'
			}
		>
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
		</Meta>
	)
}

export default ServerOverview
