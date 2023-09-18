import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './ServerModRelations.module.scss'

interface IServerModRelations {}

const ServerModRelations: FC<IServerModRelations> = () => {
	return (
		<Meta title="Зависимости мода">
			<div className={styles.container}>ServerModRelations</div>
		</Meta>
	)
}

export default ServerModRelations
