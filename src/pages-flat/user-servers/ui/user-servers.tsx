'use client'

import { ServersList } from '@/entities/server/ui'

import { useFetchUserServers } from '@/shared/queries/server'
import { Heading } from '@/shared/ui/heading'

import styles from './styles.module.scss'

export function UserServers() {
	const { data: userServers, isLoading } = useFetchUserServers()

	return (
		<div className={styles.container}>
			<Heading>Мои сервера</Heading>
			<ServersList servers={userServers} isLoading={isLoading} />
		</div>
	)
}
