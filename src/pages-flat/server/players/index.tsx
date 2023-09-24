'use client'

import { LocateOff, UserCheck, UserCog, UserX } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { ServerUrls } from '@/shared/routes/urls'

import styles from './styles.module.scss'

export function ServerPlayers() {
	const params = useParams()
	const serverHash = params.serverHash as string

	return (
		<div className={styles.container}>
			<Link href={ServerUrls.server.players(serverHash, 'white-list')} className={styles.group}>
				<UserCheck size={80} />
				<span>Белый список</span>
			</Link>
			<Link href={ServerUrls.server.players(serverHash, 'operators')} className={styles.group}>
				<UserCog size={80} />
				<span>Операторы</span>
			</Link>
			<Link href={ServerUrls.server.players(serverHash, 'banned-players')} className={styles.group}>
				<UserX size={80} />
				<span>Заблокированные игроки</span>
			</Link>
			<Link href={ServerUrls.server.players(serverHash, 'banned-ips')} className={styles.group}>
				<LocateOff size={80} />
				<span>Заблокированные IP адреса</span>
			</Link>
		</div>
	)
}
