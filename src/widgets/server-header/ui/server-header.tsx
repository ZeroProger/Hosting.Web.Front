'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import { Bookmark, Globe, MoreHorizontal } from 'lucide-react'

import { ModsCart } from '@/features/mods-cart'
import { StartServer } from '@/features/start-server'
import { StopServer } from '@/features/stop-server'

import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { SubHeading } from '@/shared/ui/subheading'

import { ServerTabs } from '../../server-tabs'

import { ServerHeaderLoading } from './loading'
import styles from './styles.module.scss'

export function ServerHeader() {
	const serverHash = useStore($serverHash)

	const { data: server, isLoading } = useFetchServer(serverHash)

	const getServerFullAddress = () => {
		const controllerPort = server?.serverPorts.find((port) => port.portKind === 'controller')

		const serverPort = server?.serverPorts.find((port) => port.port !== controllerPort?.port)

		return `${server?.serverIp}:${serverPort?.port}`
	}

	if (!server || isLoading) return <ServerHeaderLoading />

	return (
		<div className={styles.container} id="server-header-step">
			<div className={styles.bars}>
				<div className={styles.mainBar}>
					<div className={styles.mainBarInfo}>
						<SubHeading className="text-3xl font-medium mb-0">{server.gameServerName}</SubHeading>
					</div>
					<div className={styles.mainBarActions}>
						{server.isOnline ? <StopServer /> : <StartServer />}
						<Popover>
							<PopoverTrigger asChild>
								<Button variant="default" size="icon" className="py-0 px-1">
									<MoreHorizontal strokeWidth={2} size={32} />
								</Button>
							</PopoverTrigger>
							<PopoverContent align="end" sideOffset={8} className="flex flex-col gap-1 w-max p-1">
								<Button variant="ghost" className="h-auto py-1 text-lg">
									Сменить название
								</Button>
								<Button variant="ghost" className="h-auto py-1 text-lg">
									Продлить
								</Button>
							</PopoverContent>
						</Popover>
					</div>
				</div>
				<div className={styles.subBar}>
					<div className={styles.subBarAddress}>
						<Globe size={24} />
						<span>{getServerFullAddress()}</span>
					</div>
					{/* {activePlayers && (
						<div className={styles.subBarUsers}>
							<AvatarGroup translate="no" animated={false} />
							<span>{activePlayers.length} / 10</span>
						</div>
					)} */}
					<div className={styles.subBarCore}>
						<Bookmark />
						<span>
							{/* {server.software.name} {server.version.name} */}
							{/* #TODO: Заглушка, потом поправить на данные с сервера */}
							Vanila 1.19.3
						</span>
					</div>
					<div
						className={clsx(
							styles.subBarStatus,
							{ [styles.online]: server.isOnline },
							{ [styles.offline]: !server.isOnline }
						)}
					>
						<span>{server.isOnline ? 'Онлайн' : 'Оффлайн'}</span>
					</div>
					<div className={styles.cart}>
						<ModsCart />
					</div>
				</div>
			</div>
			<div className={styles.controls}>
				<ServerTabs serverHash={server.gameServerHash} />
			</div>
		</div>
	)
}
