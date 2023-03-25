import { FC } from 'react'

import styles from './ServerModFiles.module.scss'

interface IServerModFiles {}

const ServerModFiles: FC<IServerModFiles> = () => {
	return <div className={styles.container}>ServerModFiles</div>
}

export default ServerModFiles
