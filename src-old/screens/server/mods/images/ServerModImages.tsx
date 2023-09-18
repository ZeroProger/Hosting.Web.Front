import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './ServerModImages.module.scss'

interface IServerModImages {}

const ServerModImages: FC<IServerModImages> = () => {
	return (
		<Meta title="Изображения мода">
			<div className={styles.container}>ServerModImages</div>
		</Meta>
	)
}

export default ServerModImages
