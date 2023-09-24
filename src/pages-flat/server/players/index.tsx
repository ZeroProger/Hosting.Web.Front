'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { ServerUrls } from '@/shared/routes/urls'
import { Icon } from '@/shared/ui/icon'

import styles from './styles.module.scss'

export function ServerPlayers() {
	const params = useParams()
	const serverHash = params.serverHash as string
	return (
		<div className={styles.container}>
			<Link href={ServerUrls.server.players(serverHash, 'white-list')} className={styles.group}>
				<Icon name="FaUserCheck" size={80} />
				<span>Белый список</span>
			</Link>
			<Link href={ServerUrls.server.players(serverHash, 'operators')} className={styles.group}>
				<Icon name="FaUserCheck" size={80} />
				<span>Операторы</span>
			</Link>
			<Link href={ServerUrls.server.players(serverHash, 'banned-players')} className={styles.group}>
				<Icon name="FaUserCheck" size={80} />
				<span>Забаненные игроки</span>
			</Link>
			<Link href={ServerUrls.server.players(serverHash, 'banned-ips')} className={styles.group}>
				<Icon name="FaUserCheck" size={80} />
				<span>Забаненные ip-адреса</span>
			</Link>
		</div>
	)
}
