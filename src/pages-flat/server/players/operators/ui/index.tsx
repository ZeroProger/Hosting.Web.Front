'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $serverHash } from '@/shared/store'

import { useOperators } from '../lib/use-operators-players'

export function Operators() {
	const serverHash = useStore($serverHash)

	const { operators, isLoading } = useOperators(serverHash!)

	return (
		<PlayersList
			title="Операторы"
			isLoading={isLoading}
			players={operators}
			addDataPlaceholder={'Введите никнейм игрока'}
		/>
	)
}
