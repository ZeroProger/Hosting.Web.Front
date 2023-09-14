import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { FC, Fragment, useEffect, useState } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IPlayer } from '@/shared/types/player.types'

import { ServerService } from '@/services/server.service'

import { error, secondaryGray } from '@/config/constants'
import { getServerPlayersUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'

import styles from './ServerActivePlayers.module.scss'

const ServerActivePlayers: FC = () => {
	const server = useTypedSelector((state) => state.server.server)
	const [activePlayers, setActivePlayers] = useState<IPlayer[]>([])

	const handleKickClick = () => {}
	const handleBanClick = () => {}

	useEffect(() => {
		if (server) {
			const data = ServerService.controller.getServerActivePlayers({
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
							<Link href={getServerPlayersUrl(server.gameServerHash)}>Управление</Link>
						</div>
					</div>
					<hr className={styles.hr} />
					<div className={styles.body}>
						<div className={styles.rows}>
							{activePlayers.map((player) => (
								<div key={player.id} className={styles.row}>
									<div className={styles.avatar}>
										<Avatar
											src={player.image}
											alt={`Аватар игрока ${player.name}`}
											size="md"
											squared
											bordered
											css={{
												'.nextui-avatar-bg': {
													backgroundColor: 'transparent',
												},
											}}
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
										<button type="button" onClick={handleKickClick}>
											<Icon
												name="TbCircleMinus"
												size={32}
												color={secondaryGray}
												className={styles.kick}
											/>
										</button>
										<button type="button" onClick={handleBanClick}>
											<Icon name="Io5Ban" size={32} color={error} className={styles.ban} />
										</button>
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

export default ServerActivePlayers
