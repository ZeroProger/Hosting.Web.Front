'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $serverHash } from '@/shared/store'

import { useBannedPlayers } from '../queries'

export function ServerBannedPlayers() {
	const serverHash = useStore($serverHash)

	const { bannedPlayers, isLoading } = useBannedPlayers(serverHash!)

	return (
		<PlayersList
			title="Заблокированные игроки"
			isLoading={isLoading}
			players={bannedPlayers}
			addDataPlaceholder={'Введите никнейм игрока'}
		/>
	)
}
