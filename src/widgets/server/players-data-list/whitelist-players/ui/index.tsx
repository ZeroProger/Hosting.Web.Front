import { useStore } from 'effector-react'

import { PlayerDataList } from '@/entities/player/ui/player-data-list'

import { $server } from '@/shared/store'

import { useWhitelistPlayers } from '../lib/use-whitelist-players'

export function WhiteList() {
	const server = useStore($server)
	const { whitelistPlayers } = useWhitelistPlayers(server?.gameServerHash!)

	return (
		<PlayerDataList
			title="whitelist"
			items={whitelistPlayers!}
			addDataPlaceholder={'никнейм или ip адрес игрока'}
		/>
	)
}
