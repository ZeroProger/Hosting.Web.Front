import { FC } from 'react'
import styles from './ServerMod.module.scss'

interface IServerMod {}

const ServerMod: FC<IServerMod> = () => {
	return <div className={styles.container}>ServerMod</div>
}

export default ServerMod