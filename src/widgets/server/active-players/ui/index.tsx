'use client';

import { useStore } from 'effector-react';
import Image from 'next/image';
import Link from 'next/link'
import { Fragment } from 'react'

import { useBanPlayer } from '@/features/players/lib/useBanPlayer'
import { useKickPlayer } from '@/features/players/lib/useKickPlayer'

import { ServerUrls } from '@/shared/routes/urls'
//#TODO: избавиться от сервисов внутри widgets и entities и features, вынести логику в store
import { $server } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

// import { $activePlayers, getActivePlayers } from '../model'
import { useActivePlayers } from '../lib/useActivePlayers'

import styles from './styles.module.scss'

export function ServerActivePlayers() {
	const server = useStore($server)
	const { data: activePlayers } = useActivePlayers({ gameServerHash: server?.gameServerHash! })
	const { mutate: kick } = useKickPlayer(server?.gameServerHash!)
	const { mutate: ban } = useBanPlayer(server?.gameServerHash!)
	// const activePlayers = useStore($activePlayers)

	// useEffect(() => {
	// 	if (server) {
	// 		getActivePlayers({ gameServerHash: server.gameServerHash })
	// 	}
	// }, [server])

	return (
		<div className={styles.card}>
			{server && (
				<>
					<div className={styles.header}>
						<div className={styles.headerTitle}>Активные игроки</div>
						<div className={styles.headerActions}>
							<Link href={ServerUrls.server.players(server.gameServerHash)}>Управление</Link>
						</div>
					</div>
					<hr className={styles.hr} />
					<div className={styles.body}>
						<div className={styles.rows}>
							{activePlayers?.map((player) => (
								<div key={player.id} className={styles.row}>
									<div className={styles.avatar}>
										<Image
											src={player.image}
											alt={`Аватар игрока ${player.name}`}
											width={32}
											height={32}
										/>
									</div>
									<div className={styles.userName}>{player.name}</div>
									<div className={styles.roles}>
										{player.roles?.map((role) => (
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
										))}
									</div>
									<div className={styles.actions}>
										{/* #TODO: kick and ban => features/player/... */}
										{/* Передавать 2 эти фичи через пропсы bunButton and kickButton в /entities/player/row/ui <PlayerRow/> */}
										{/*  */}
										<Button onClick={() => kick(player.id)} variant="default">
											<Icon name="TbCircleMinus" size={32} className={styles.kick} />
										</Button>
										<Button onClick={() => ban(player.id)} variant="destructive">
											<Icon name="Io5Ban" size={32} className={styles.ban} />
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	)
}