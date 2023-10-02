'use client'

import { useStore } from 'effector-react'
import Image from 'next/image'
import Link from 'next/link'

import playerHead from '@/app/assets/images/head1.webp'

import { BanPlayer } from '@/features/ban-player'
import { KickPlayer } from '@/features/kick-player'

import { ServerUrls } from '@/shared/routes/urls'
//#TODO: избавиться от сервисов внутри widgets и entities и features, вынести логику в store
import { $serverHash } from '@/shared/store'
import { Skeleton } from '@/shared/ui/skeleton'

import { useFetchServerActivePlayers } from '../queries'

import styles from './styles.module.scss'

export function ServerActivePlayers() {
	const serverHash = useStore($serverHash)

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
					{activePlayers.map((player) => (
						<div key={player.id} className={styles.row}>
							<div className={styles.avatar}>
								<Image
									src={playerHead.src}
									alt={`Аватар игрока ${player.name}`}
									width={32}
									height={32}
								/>
							</div>
							<div className={styles.userName}>{player.name}</div>
							{/* <div className={styles.roles}> */}
							{/* {player.roles?.map((role) => (
											<Fragment key={`user-${player.id}-role-${role?.id}`}>
												{role && (
													<span
														className={styles.role}
														style={{ color: role.textColor, backgroundColor: role.backgroundColor }}
													>
														{role.name}
													</span>
												)}
											</Fragment>
										))} */}
							{/* </div> */}
							<div className={styles.actions}>
								<KickPlayer playerNickname={player.name} />
								<BanPlayer playerNickname={player.name} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
