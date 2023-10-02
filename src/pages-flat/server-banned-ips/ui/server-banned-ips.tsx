'use client'

import { useStore } from 'effector-react'

import { IpsList } from '@/entities/player/ui/ips-list'

import { $serverHash } from '@/shared/store'

import { useBannedIps } from '../queries'

export function ServerBannedIps() {
	const serverHash = useStore($serverHash)

	const { bannedIps, isLoading } = useBannedIps(serverHash!)

	return (
		<IpsList
			title="Заблокированные IP-адреса"
			isLoading={isLoading}
			ips={bannedIps}
			addDataPlaceholder={'Введите IP или никнейм игрока'}
		/>
	)
}
