'use client'

import { useStore } from 'effector-react'
import { useEffect } from 'react'

import { $pendingPublicServers, $publicServers, getPublicServersFx } from '@/entities/server/model'
import { ServersList } from '@/entities/server/ui'

import { Heading } from '@/shared/ui/heading'

import styles from './styles.module.scss'

export function PublicServers() {
	const publicServers = useStore($publicServers)
	const isLoading = useStore($pendingPublicServers)

	useEffect(() => {
		getPublicServersFx()
	}, [])

	return (
		<div className={styles.container}>
			<Heading>Публичные сервера</Heading>
			<ServersList servers={publicServers} isLoading={isLoading} isPublic />
		</div>
	)
}
