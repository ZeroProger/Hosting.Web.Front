'use client'

import { useStore } from 'effector-react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { $serverSelect, closeServerSelect, openServerSelect } from '@/entities/server/model'

import { useFetchServer } from '@/shared/queries/server'
import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash, resetServerHashFx } from '@/shared/store'
import { IServer } from '@/shared/types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

export function ServerSelect({ servers }: { servers: IServer[] }) {
	const router = useRouter()
	const params = useParams()
	const pathname = usePathname()

	const serverHash = useStore($serverHash)
	const { isServerSelectOpen } = useStore($serverSelect)

	const { data: server } = useFetchServer(serverHash)

	const defaultServer =
		servers && servers.length > 0
			? servers.find((server) => server.gameServerHash === params?.serverHash)
			: null

	const handleResetServer = () => {
		resetServerHashFx()
	}

	const handleSelect = (value: string) => {
		if (isServerSelectOpen) {
			router.push(ServerUrls.server.overview(value))
		}
	}

	const handleOpenChange = (open: boolean) => {
		if (open) {
			openServerSelect()
		}
	}

	useEffect(() => {
		if (params?.serverHash === undefined && server !== null) {
			handleResetServer()
		}
	}, [params])

	useEffect(() => {
		if (isServerSelectOpen) {
			closeServerSelect()
		}
	}, [pathname])

	if (!servers || servers.length === 0) return null

	return (
		<Select
			value={server ? server.gameServerHash : ''}
			defaultValue={defaultServer ? defaultServer.gameServerHash : ''}
			onValueChange={handleSelect}
			onOpenChange={handleOpenChange}
		>
			<SelectTrigger className="w-full text-xl px-4 bg-transparent">
				<SelectValue aria-label={server ? server.gameServerName : 'Выберите сервер'}>
					{server ? server.gameServerName : 'Выберите сервер'}
				</SelectValue>
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
