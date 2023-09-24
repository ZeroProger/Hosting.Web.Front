'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $server } from '@/shared/store'

import { useOperators } from '../lib/use-operators-players'

export function Operators() {
	const server = useStore($server)
	const { operators, isLoading } = useOperators(server?.gameServerHash!)

	return (
		<PlayersList
			title="Операторы"
			isLoading={isLoading}
			players={operators}
			addDataPlaceholder={'Введите никнейм игрока'}
		/>
	)
}
