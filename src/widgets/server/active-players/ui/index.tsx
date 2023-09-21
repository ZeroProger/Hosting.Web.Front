'use client'

import { useStore } from 'effector-react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
//#TODO: избавиться от сервисов внутри widgets и entities и features, вынести логику в store
import { ServerService } from 'services-temp/server-service'

import { $server } from '@/entities/server/store'

import { IPlayer } from '@/shared/api/common'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

import styles from './styles.module.scss'

export function ServerActivePlayers() {
	const server = useStore($server)
	const [activePlayers, setActivePlayers] = useState<IPlayer[]>([])

	const handleKickClick = () => {}
	const handleBanClick = () => {}

	useEffect(() => {
		if (server) {
			const data = ServerService.activePlayers({
				gameServerHash: server.gameServerHash,
			})

			setActivePlayers(data)
		}
	}, [server])

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
							{activePlayers.map((player) => (
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
										<Button onClick={handleKickClick} variant="default">
											<Icon name="TbCircleMinus" size={32} className={styles.kick} />
										</Button>
										<Button onClick={handleBanClick} variant="destructive">
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
