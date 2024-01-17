'use client'

import { useStore } from 'effector-react'
import Image from 'next/image'
import Link from 'next/link'

import steveHead from '@/app/assets/images/steve-head.webp'

import { BanPlayer } from '@/features/ban-player'
import { KickPlayer } from '@/features/kick-player'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Skeleton } from '@/shared/ui/skeleton'

import { useFetchServerActivePlayers } from '../queries'

import styles from './styles.module.scss'

export function ServerActivePlayers() {
	const serverHash = useStore($serverHash)
	const maxListLength = 3

	const { data: activePlayers, isLoading } = useFetchServerActivePlayers()

	if (isLoading) return <Skeleton className="w-full h-[300px]" />

	if (!activePlayers) return null

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
					{activePlayers.length === 0 && (
						<div className="flex justify-center items-center text-lg">
							На сервере пока нет игроков
						</div>
					)}
					{activePlayers.slice(0, maxListLength).map((player) => (
						<div key={player.id} className={styles.row}>
							<div className={styles.avatar}>
								<Image
									src={steveHead.src}
									alt={`Аватар игрока ${player.name}`}
									width={32}
									height={32}
								/>
							</div>
							<div className={styles.userName}>{player.name}</div>
							<div className={styles.actions}>
								<KickPlayer playerNickname={player.name} />
								<BanPlayer playerNickname={player.name} />
							</div>
						</div>
					))}
					{activePlayers.length > maxListLength && (
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
