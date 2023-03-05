import { FC } from 'react'

import styles from './ServerBackups.module.scss'

interface IServerBackups {}

const ServerBackups: FC<IServerBackups> = () => {
	return <div className={styles.container}>ServerBackups</div>
}

export default ServerBackups
