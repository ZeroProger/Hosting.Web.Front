import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './PublicServers.module.scss'

interface IPublicServers {}

const PublicServers: FC<IPublicServers> = () => {
	return (
		<Meta title="Публичные сервера" description="Публичные сервера">
			<div className={styles.container}>Публичные сервера</div>
		</Meta>
	)
}

export default PublicServers
