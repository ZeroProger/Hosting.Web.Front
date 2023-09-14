import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './Help.module.scss'

interface IHelp {}

const Help: FC<IHelp> = () => {
	return (
		<Meta title="Помощь">
			<div className={styles.container}>Help</div>
		</Meta>
	)
}

export default Help
