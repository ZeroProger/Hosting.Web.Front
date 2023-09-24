import { useStore } from 'effector-react'

import { PlayerDataList } from '@/entities/player/ui/player-data-list'

import { $server } from '@/shared/store'

import { useBannedPlayers } from '../lib/use-banned-players'

export function BannedPlayers() {
	const server = useStore($server)
	const { bannedPlayers } = useBannedPlayers(server?.gameServerHash!)

	return (
		<PlayerDataList
			title="операторы"
			items={bannedPlayers!}
			addDataPlaceholder={'никнейм или ip адрес игрока'}
		/>
	)
}
