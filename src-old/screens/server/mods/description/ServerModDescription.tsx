import { useRouter } from 'next/router'
import { FC } from 'react'

import { useModData } from '@/components/mod-layout/useModData'

import Meta from '@/utils/meta/Meta'

import styles from './ServerModDescription.module.scss'
import { useModDescription } from './useModDescription'

const ServerModDescription: FC = () => {
	const router = useRouter()
	const id = Number.parseInt(String(router.query.id!))
	const { data: description } = useModDescription(id)
	const { data: mod } = useModData(id)

	return (
		<Meta title={`Мод ${mod?.name}`}>
			{description && (
				<div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
			)}
		</Meta>
	)
}

export default ServerModDescription
