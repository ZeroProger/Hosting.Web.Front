'use client'

import { ServersList } from '@/entities/server/ui'

import { Heading } from '@/shared/ui/heading'

import { useFetchPublicServers } from './model'
import styles from './styles.module.scss'

export function PublicServers() {
	const { data: publicServers, isLoading } = useFetchPublicServers()

	return (
		<div className={styles.container}>
			<Heading>Публичные сервера</Heading>
			<ServersList servers={publicServers} isLoading={isLoading} isPublic />
		</div>
	)
}
