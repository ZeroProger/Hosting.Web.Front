import { FC } from 'react'

import styles from './ServerMods.module.scss'

interface IServerMods {}

const ServerMods: FC<IServerMods> = () => {
	return <div className={styles.container}>ServerMods</div>
}

export default ServerMods
