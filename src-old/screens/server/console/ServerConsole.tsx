import { FC } from 'react'

import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'

import Meta from '@/utils/meta/Meta'

import styles from './ServerConsole.module.scss'

interface IServerConsole {}

const ServerConsole: FC<IServerConsole> = () => {
	return (
		<Meta title="Консоль сервера">
			<div className={styles.container}>
				<ServerMiniConsole fullConsole />
			</div>
		</Meta>
	)
}

export default ServerConsole
