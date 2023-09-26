'use client'

import { useStore } from 'effector-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Server } from '@/shared/api/common'
import { useFetchServer } from '@/shared/queries/server'
import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash, resetServerHashFx } from '@/shared/store'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

import { closeHeaderMenu } from '@/widgets/header'

export function ServerSelect({ servers }: { servers: Server[] }) {
	const router = useRouter()
	const params = useParams()

	const serverHash = useStore($serverHash)

	const { data: server } = useFetchServer(serverHash)

	const defaultServer = servers.find((server) => server.gameServerHash === params?.serverHash)

	const handleResetServer = () => {
		resetServerHashFx()
	}

	useEffect(() => {
		if (params?.serverHash === undefined && server !== null) {
			handleResetServer()
		}
	}, [params])

	const handleSelect = (value: string) => {
		router.push(ServerUrls.server.overview(value))
		closeHeaderMenu()
	}

	if (servers.length === 0) return null

	return (
		<Select
			value={server ? server.gameServerHash : ''}
			defaultValue={defaultServer ? defaultServer.gameServerHash : ''}
			onValueChange={handleSelect}
		>
			<SelectTrigger className="w-full text-xl px-4 bg-transparent border-none ring-2 ring-foreground/50 ring-offset-0 rounded-layout">
				<SelectValue aria-label={server ? server.gameServerName : 'Выберите сервер'}>
					{server ? server.gameServerName : 'Выберите сервер'}
				</SelectValue>
			</SelectTrigger>
			<SelectContent sideOffset={6} className="rounded-layout">
				{servers.map((serverItem) => (
					<SelectItem
						key={serverItem.gameServerHash}
						value={serverItem.gameServerHash}
						className="cursor-pointer text-xl rounded-layout"
					>
						{serverItem.gameServerName}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}