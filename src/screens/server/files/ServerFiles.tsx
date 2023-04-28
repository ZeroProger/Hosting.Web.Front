import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './ServerFiles.module.scss'

interface IServerFiles {}

const ServerFiles: FC<IServerFiles> = () => {
	return (
		<Meta title="Файлы сервера">
			<div className={styles.container}>ServerFiles</div>
		</Meta>
	)
}

export default ServerFiles
