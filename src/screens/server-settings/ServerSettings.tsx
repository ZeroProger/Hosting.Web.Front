import { FC } from 'react'

import styles from './ServerSettings.module.scss'

interface IServerSettings {}

const ServerSettings: FC<IServerSettings> = () => {
	return <div className={styles.container}>ServerSettings</div>
}

export default ServerSettings
