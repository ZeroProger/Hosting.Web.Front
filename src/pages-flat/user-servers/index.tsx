'use client'

import { useStore } from 'effector-react'

import { ServersList } from '@/entities/server/ui'

import { Heading } from '@/shared/ui/heading'

import { $pendingUserServers, $userServers } from '@/widgets/header'

import styles from './styles.module.scss'

export function UserServers() {
	const userServers = useStore($userServers)
	const isLoading = useStore($pendingUserServers)

	return (
		<div className={styles.container}>
			<Heading>Мои сервера</Heading>
			<ServersList servers={userServers} isLoading={isLoading} />
		</div>
	)
}
