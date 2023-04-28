import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './CreateServer.module.scss'

interface ICreateServer {}

const CreateServer: FC<ICreateServer> = () => {
	return (
		<Meta
			title="Создание сервера"
			description="Создайте сервер прямо сейчас! Низкие цены, удобный сайт, стабильные сервера и множество других деталей делают нас одним из лучших хостингов!"
		>
			<div className={styles.container}>CreateServer</div>
		</Meta>
	)
}

export default CreateServer
