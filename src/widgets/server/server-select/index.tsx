'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useServer } from '@/entities/server/store'

import { Server } from '@/shared/api/common'
import { ServerUrls } from '@/shared/routes/urls'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

export function ServerSelect({ servers }: { servers: Server[] }) {
	const router = useRouter()
	const params = useParams()

	const { server, resetServer } = useServer()

	const defaultServer = servers.find((server) => server.gameServerHash === params?.serverHash)

	useEffect(() => {
		if (params?.serverHash === undefined && server !== null) {
			handleResetServer()
		}
	}, [params])

	const handleSelect = (value: string) => {
		router.push(ServerUrls.server.overview(value))
	}

	const handleResetServer = async () => {
		await resetServer()
	}

	if (servers.length === 0) return null

	return (
		<Select
			value={server ? server.gameServerHash : undefined}
			defaultValue={defaultServer ? defaultServer.gameServerHash : undefined}
			onValueChange={handleSelect}
		>
			<SelectTrigger className="w-full text-xl">
				<SelectValue>{server ? server.gameServerName : 'Выберите сервер'}</SelectValue>
			</SelectTrigger>
			<SelectContent sideOffset={6}>
				{servers.map((serverItem) => (
					<SelectItem
						key={serverItem.gameServerHash}
						value={serverItem.gameServerHash}
						className="cursor-pointer text-xl"
					>
						{serverItem.gameServerName}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
