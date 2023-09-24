'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $server } from '@/shared/store'

import { useOperators } from '../lib/use-operators-players'

export function Operators() {
	const server = useStore($server)
	const { operators } = useOperators(server?.gameServerHash!)

	return (
		<PlayersList
			title="операторы"
			players={operators!}
			addDataPlaceholder={'никнейм или ip адрес игрока'}
		/>
	)
}
