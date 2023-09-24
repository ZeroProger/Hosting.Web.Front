'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $server } from '@/shared/store'

import { useBannedPlayers } from '../lib/use-banned-players'

export function BannedPlayers() {
	const server = useStore($server)
	const { bannedPlayers } = useBannedPlayers(server?.gameServerHash!)

	return (
		<PlayersList
			title="операторы"
			players={bannedPlayers!}
			addDataPlaceholder={'никнейм или ip адрес игрока'}
		/>
	)
}
