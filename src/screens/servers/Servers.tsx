import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './Servers.module.scss'

interface IServers {}

const Servers: FC<IServers> = () => {
	return (
		<Meta title="Мои сервера">
			<div className={styles.container}>Мои сервера</div>
		</Meta>
	)
}

export default Servers
