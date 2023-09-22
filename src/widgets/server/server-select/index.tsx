'use client'

import { useStore } from 'effector-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { $server, resetServerFx } from '@/entities/server/model'

import { Server } from '@/shared/api/common'
import { ServerUrls } from '@/shared/routes/urls'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

export function ServerSelect({ servers }: { servers: Server[] }) {
	const router = useRouter()
	const params = useParams()

	const server = useStore($server)

	const defaultServer = servers.find((server) => server.gameServerHash === params?.serverHash)

	const handleResetServer = () => {
		resetServerFx()
	}

	useEffect(() => {
		if (params?.serverHash === undefined && server !== null) {
			handleResetServer()
		}
	}, [params])

	const handleSelect = (value: string) => {
		console.log(value)
		router.push(ServerUrls.server.overview(value))
	}

	if (servers.length === 0) return null

	return (
		<Select
			value={server ? server.gameServerHash : ''}
			defaultValue={defaultServer ? defaultServer.gameServerHash : ''}
			onValueChange={handleSelect}
		>
			<SelectTrigger className="w-full text-xl px-4 bg-transparent border-none ring-2 ring-foreground/50 ring-offset-0 rounded-2xl">
				<SelectValue aria-label={server ? server.gameServerName : 'Выберите сервер'}>
					{server ? server.gameServerName : 'Выберите сервер'}
				</SelectValue>
			</SelectTrigger>
			<SelectContent sideOffset={6} className="rounded-2xl">
				{servers.map((serverItem) => (
					<SelectItem
						key={serverItem.gameServerHash}
						value={serverItem.gameServerHash}
						className="cursor-pointer text-xl rounded-2xl"
					>
						{serverItem.gameServerName}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
