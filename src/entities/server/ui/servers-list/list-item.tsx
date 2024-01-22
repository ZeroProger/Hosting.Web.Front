import clsx from 'clsx'
import Link from 'next/link'

import { ServerUrls } from '@/shared/routes/urls'
import { IServer } from '@/shared/types'

import styles from './styles.module.scss'

function ItemWrapper({
	isPublic,
	server,
	children,
}: {
	isPublic: boolean
	server: IServer
	children: React.ReactNode
}) {
	if (isPublic)
		return (
			<div
				key={server.gameServerHash}
				className={clsx(styles.server, { [styles.isPublic]: isPublic })}
			>
				{children}
			</div>
		)
	return (
		<Link
			key={server.gameServerHash}
			href={ServerUrls.server.overview(server.gameServerHash)}
			className={styles.server}
		>
			{children}
		</Link>
	)
}

function ItemContent({ server }: { server: IServer }) {
	const getServerFullAddress = () => {
		const controllerPort = server?.serverPorts.find((port) => port.portKind === 'controller')

		const serverPort = server?.serverPorts.find((port) => port.port !== controllerPort?.port)

		return `${server?.serverIp}:${serverPort?.port}`
	}

	return (
		<>
			<div className={styles.name}>{server.gameServerName}</div>
			<div className={styles.ip}>{getServerFullAddress()}</div>
			<div
				className={clsx(
					styles.status,
					{ [styles.online]: server.isOnline },
					{ [styles.offline]: !server.isOnline }
				)}
			>
				<span>{server.isOnline ? 'Онлайн' : 'Оффлайн'}</span>
			</div>
		</>
	)
}

export function ListItem(props: { isPublic: boolean; server: IServer }) {
	return (
		<ItemWrapper {...props}>
			<ItemContent server={props.server} />
		</ItemWrapper>
	)
}
