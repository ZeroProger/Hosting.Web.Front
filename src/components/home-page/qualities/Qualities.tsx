import { FC } from 'react'

import styles from './Qualities.module.scss'

interface IQualities {}

const Qualities: FC<IQualities> = () => {
	return <div className={styles.container}>Qualities</div>
}

export default Qualities
