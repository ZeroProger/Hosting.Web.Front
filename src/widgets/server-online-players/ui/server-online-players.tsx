'use client'

import { useStore } from 'effector-react'
import Image from 'next/image'
import Link from 'next/link'

import steveHead from '@/app/assets/images/steve-head.webp'

import { useServerMainInfo } from '@/entities/server/model'

import { BanPlayer } from '@/features/ban-player'
import { KickPlayer } from '@/features/kick-player'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Skeleton } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export function ServerOnlinePlayers() {
	const serverHash = useStore($serverHash)
	const maxListLength = 3

	const { onlinePlayers, isLoading } = useServerMainInfo()

	if (isLoading) return <Skeleton className="w-full h-[200px]" />

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.headerTitle}>Активные игроки</div>
				<div className={styles.headerActions}>
					<Link href={ServerUrls.server.players(serverHash!)}>Управление</Link>
				</div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.body}>
				<div className={styles.rows}>
					{onlinePlayers.length === 0 && (
						<div className="flex justify-center items-center text-lg">
							На сервере пока нет игроков
						</div>
					)}
					{onlinePlayers.slice(0, maxListLength).map((player) => (
						<div key={player} className={styles.row}>
							<div className={styles.avatar}>
								<Image src={steveHead.src} alt={`Аватар игрока ${player}`} width={32} height={32} />
							</div>
							<div className={styles.userName}>{player}</div>
							<div className={styles.actions}>
								<KickPlayer playerNickname={player} />
								<BanPlayer playerNickname={player} />
							</div>
						</div>
					))}
					{onlinePlayers.length > maxListLength && (
						<div className="flex justify-center items-center">
							<Button variant="ghost" className="text-lg h-auto py-1 px-4">
								Посмотреть всех
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
