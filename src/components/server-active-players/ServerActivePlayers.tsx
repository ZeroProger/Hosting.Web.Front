import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { error, secondaryGray } from '@/config/constants'
import { getServerPlayersUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'

import styles from './ServerActivePlayers.module.scss'

const ServerActivePlayers: FC = () => {
	const server = useTypedSelector((state) => state.serverReducer.server)

	const handleKickClick = () => {}
	const handleBanClick = () => {}

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.headerTitle}>Активные игроки</div>
				<div className={styles.headerActions}>
					<Link href={getServerPlayersUrl(server.uuid)}>Управление</Link>
				</div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.body}>
				<div className={styles.rows}>
					{server.activePlayers.map((player) => (
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
									<span
										key={`user-${player.id}-role-${role.id}`}
										className={styles.role}
										style={{ color: role.textColor, backgroundColor: role.color }}
									>
										{role.name}
									</span>
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
		</div>
	)
}

export default ServerActivePlayers
