'use client'

import { useStore } from 'effector-react'

import { IpsList } from '@/entities/player/ui/ips-list'

import { $server } from '@/shared/store'

import { useBannedIps } from '../lib/use-banned-ips'

export function BannedIps() {
	const server = useStore($server)
	const { bannedIps } = useBannedIps(server?.gameServerHash!)

	return (
		<IpsList
			title="операторы"
			ips={bannedIps!}
			addDataPlaceholder={'никнейм или ip адрес игрока'}
		/>
	)
}
