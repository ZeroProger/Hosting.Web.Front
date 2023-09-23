'use client'

import styles from './styles.module.scss'
import { useModDescription } from '@/layouts/mod-layout/model'

export function ModDescription({ modId }: { modId: number }) {
	const { data: modDescription, isLoading } = useModDescription(modId)

	if (isLoading) return null

	return (
		<>
			{modDescription && (
				<div className={styles.description} dangerouslySetInnerHTML={{ __html: modDescription }} />
			)}
		</>
	)
}
