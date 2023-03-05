import { FC } from 'react'

import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'

import styles from './ServerConsole.module.scss'

interface IServerConsole {}

const ServerConsole: FC<IServerConsole> = () => {
	return (
		<div className={styles.container}>
			<ServerMiniConsole fullConsole />
		</div>
	)
}

export default ServerConsole
