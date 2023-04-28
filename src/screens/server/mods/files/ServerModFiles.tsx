import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './ServerModFiles.module.scss'

interface IServerModFiles {}

const ServerModFiles: FC<IServerModFiles> = () => {
	return (
		<Meta title="Файлы мода">
			<div className={styles.container}>ServerModFiles</div>
		</Meta>
	)
}

export default ServerModFiles
