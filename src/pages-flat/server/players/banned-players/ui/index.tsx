'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $server } from '@/shared/store'

import { useBannedPlayers } from '../lib/use-banned-players'

export function BannedPlayers() {
	const server = useStore($server)
	const { bannedPlayers, isLoading } = useBannedPlayers(server?.gameServerHash!)

	return (
		<PlayersList
			title="Заблокированные игроки"
			isLoading={isLoading}
			players={bannedPlayers}
			addDataPlaceholder={'Введите никнейм игрока'}
		/>
	)
}
