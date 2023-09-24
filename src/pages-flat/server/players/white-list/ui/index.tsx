'use client'

import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/players-list'

import { $server } from '@/shared/store'

import { useWhitelist } from '../lib/use-whitelist-players'

export function WhiteList() {
	const server = useStore($server)
	const { whitelist } = useWhitelist(server?.gameServerHash!)

	return (
		<PlayersList
			title="whitelist"
			players={whitelist!}
			addDataPlaceholder={'никнейм или ip адрес игрока'}
		/>
	)
}
