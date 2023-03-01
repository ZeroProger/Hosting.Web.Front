import { FC } from 'react'
import styles from './Features.module.scss'

interface IFeatures {}

const Features: FC<IFeatures> = () => {
	return <div className={styles.container}>Features</div>
}

export default Features