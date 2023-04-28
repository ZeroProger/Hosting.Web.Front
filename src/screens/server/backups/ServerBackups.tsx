import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './ServerBackups.module.scss'

interface IServerBackups {}

const ServerBackups: FC<IServerBackups> = () => {
	return (
		<Meta title="Восстановление сервера">
			<div className={styles.container}>ServerBackups</div>
		</Meta>
	)
}

export default ServerBackups
