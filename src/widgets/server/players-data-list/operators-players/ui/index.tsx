import { useStore } from 'effector-react'

import { PlayerDataList } from '@/entities/player/ui/player-data-list'

import { $server } from '@/shared/store'

import { useOperatorsPlayers } from '../lib/use-operators-players'

export function OperatorsPlayers() {
	const server = useStore($server)
	const { operatorsPlayers } = useOperatorsPlayers(server?.gameServerHash!)

	return (
		<PlayerDataList
			title="операторы"
			items={operatorsPlayers!}
			addDataPlaceholder={'никнейм или ip адрес игрока'}
		/>
	)
}
