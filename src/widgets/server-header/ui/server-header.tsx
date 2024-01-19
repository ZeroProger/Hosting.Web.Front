'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import { Gamepad2, Globe } from 'lucide-react'

import { useServerMainInfo } from '@/entities/server/model'

import { CheckServerTariff } from '@/features/check-server-tariff'
import { ModsCart } from '@/features/mods-cart'
import { ProlongServer } from '@/features/prolong-server'
import { ReinstallServer } from '@/features/reinstall-server'
import { RenameServer } from '@/features/rename-server'

import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { SubHeading } from '@/shared/ui/subheading'

import { ServerTabs } from '../../server-tabs'

import { ServerHeaderLoading } from './loading'
import styles from './styles.module.scss'

export function ServerHeader() {
	const serverHash = useStore($serverHash)

	const { data: server, isLoading } = useFetchServer(serverHash)
	const { mainInfo } = useServerMainInfo()

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
						<RenameServer />
					</div>
					<div className={styles.mainBarActions}>
						<ProlongServer />
						<ReinstallServer />
						<CheckServerTariff />
					</div>
				</div>
				<div className={styles.subBar}>
					<div className={styles.subBarAddress}>
						<Globe size={24} />
						<span>{getServerFullAddress()}</span>
					</div>
					<div className={styles.subBarGame}>
						<Gamepad2 size={24} />
						<span>{server.gameKind}</span>
					</div>
					{/* {mainInfo !== null && (
						<div className={styles.subBarCore}>
							<Bookmark />
							<span>
								{mainInfo?.software === null ? 'Vanila' : mainInfo?.software} {mainInfo?.version}
							</span>
						</div>
					)} */}
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
