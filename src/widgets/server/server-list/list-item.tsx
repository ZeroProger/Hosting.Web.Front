import clsx from 'clsx'
import Link from 'next/link'

import { ServerUrls } from '@/shared/routes/urls'
import { Icon } from '@/shared/ui/icon'

import { Server } from '../../types'

import styles from './styles.module.scss'

function ItemWrapper({
	isPublic,
	server,
	children,
}: {
	isPublic: boolean
	server: Server
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

function ItemContent({ server }: { server: Server }) {
	return (
		<>
			<div className={styles.name}>{server.gameServerName}</div>
			<div className={styles.ip}>{server.serverIp}</div>
			<div
				className={clsx(
					styles.status,
					{ [styles.online]: server.isOnline },
					{ [styles.offline]: !server.isOnline }
				)}
			>
				<Icon name="GoDotFill" size={24} />
				<span>{server.isOnline ? 'Онлайн' : 'Оффлайн'}</span>
			</div>
		</>
	)
}

export function ListItem(props: { isPublic: boolean; server: Server }) {
	return (
		<ItemWrapper {...props}>
			<ItemContent server={props.server} />
		</ItemWrapper>
	)
}
