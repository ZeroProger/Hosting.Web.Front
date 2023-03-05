import { FC } from 'react'
import styles from './ServerFiles.module.scss'

interface IServerFiles {}

const ServerFiles: FC<IServerFiles> = () => {
	return <div className={styles.container}>ServerFiles</div>
}

export default ServerFiles