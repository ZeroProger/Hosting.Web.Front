import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './ServerModDescription.module.scss'
import { useModDescription } from './useModDescription'

const ServerModDescription: FC = () => {
	const router = useRouter()
	const id = Number.parseInt(String(router.query.id!))
	const { data: description, isLoading, error } = useModDescription(id)

	//#TODO: Заменить
	if (isLoading) return <div>Загрузка...</div>
	if (!description || error) return <div>Ошибка</div>

	return (
		<div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
	)
}

export default ServerModDescription
