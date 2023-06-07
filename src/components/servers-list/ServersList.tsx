import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { IServer } from '@/shared/types/server.types'

import { getServerFullAddress } from '@/utils/servers/getServerFullAddress'

import { getServerUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'

import styles from './ServersList.module.scss'

interface IServersList {
	servers: IServer[]
	isPublic?: boolean
}

const ServersList: FC<IServersList> = ({ servers, isPublic = false }) => {
	return (
		<div className={styles.servers}>
			{servers?.map((server) => (
				<>
					{isPublic ? (
						<div
							key={server.gameServerHash}
							className={clsx(styles.server, { [styles.isPublic]: isPublic })}
						>
							<div className={styles.name}>{server.gameServerName}</div>
							<div className={styles.ip}>{getServerFullAddress(server)}</div>
							<div
								className={clsx(
									styles.status,
									{ [styles.online]: server.isOnline },
									{ [styles.offline]: !server.isOnline }
								)}
							>
								<Icon name="GoPrimitiveDot" size={24} />
								<span>{server.isOnline ? 'Онлайн' : 'Оффлайн'}</span>
							</div>
						</div>
					) : (
						<Link
							key={server.gameServerHash}
							href={getServerUrl(server.gameServerHash)}
							className={styles.server}
						>
							<div className={styles.name}>{server.gameServerName}</div>
							<div className={styles.ip}>{getServerFullAddress(server)}</div>
							<div
								className={clsx(
									styles.status,
									{ [styles.online]: server.isOnline },
									{ [styles.offline]: !server.isOnline }
								)}
							>
								<Icon name="GoPrimitiveDot" size={24} />
								<span>{server.isOnline ? 'Онлайн' : 'Оффлайн'}</span>
							</div>
						</Link>
					)}
				</>
			))}
		</div>
	)
}

export default ServersList
