'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $serverHash } from '@/shared/store'

import { useWhitelist } from '../queries'

export function ServerWhiteList() {
	const serverHash = useStore($serverHash)

	const { whitelist, isLoading } = useWhitelist(serverHash!)

	return (
		<PlayersList
			title="Белый список"
			isLoading={isLoading}
			players={whitelist}
			addDataPlaceholder={'Введите никнейм игрока'}
		/>
	)
}
