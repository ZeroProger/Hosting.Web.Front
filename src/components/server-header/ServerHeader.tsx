import { Button, Text } from '@nextui-org/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IPlayer } from '@/shared/types/player.types'

import { ServerService } from '@/services/server.service'

import { Icon } from '../ui/Icon'
import { AvatarGroup } from '../ui/avatar-group/AvatarGroup'

import styles from './ServerHeader.module.scss'
import ServerTabs from './ServerTabs'

interface IServerHeader {}

const ServerHeader: FC<IServerHeader> = () => {
	const router = useRouter()
	const server = useTypedSelector((state) => state.server.server)
	const [activePlayers, setActivePlayers] = useState<IPlayer[]>([])

	const handleBackBtn = () => {
		router.back()
	}

	const handleStopServerBtn = () => {}

	const handleStartServerBtn = () => {
		if (server) {
			const startContainerPromise = ServerService.compositor.startServerContainer({
				gameServerHash: server.gameServerHash,
			})

			startContainerPromise.then((data) => {
				if (data.data.success === true) {
					const startGameServerPromise = ServerService.controller.startGameServer({
						gameServerHash: data.data.gameServerHash,
					})

					startGameServerPromise.then((data) => {})
				}
			})
		}
	}

	useEffect(() => {
		if (server) {
			const data = ServerService.controller.getServerActivePlayers({
				gameServerHash: server.gameServerHash,
			})

			setActivePlayers(data)
		}
	}, [server])

	return (
		<div className={styles.container}>
			{server && (
				<>
					<div className={styles.bars}>
						<div className={styles.mainBar}>
							<div className={styles.mainBarInfo}>
								<Button
									onClick={handleBackBtn}
									icon={<Icon name="MdArrowBackIos" size={24} />}
									className={styles.backBtn}
								></Button>
								<Text className={styles.mainBarName}>{server.gameServerName}</Text>
							</div>
							<div className={styles.mainBarActions}>
								{server.isOnline ? (
									<Button className={styles.btnError} onClick={handleStopServerBtn}>
										Остановить сервер
									</Button>
								) : (
									<Button className={styles.btnStart} onClick={handleStartServerBtn}>
										Запустить сервер
									</Button>
								)}

								<Button
									icon={<Icon name="BsThreeDots" size={24} />}
									className="btn-default"
								></Button>
							</div>
						</div>
						<div className={styles.subBar}>
							<div className={styles.subBarAddress}>
								<Icon name="TbWorld" size={24} />
								<span>{server.serverIp}</span>
							</div>
							<div className={styles.subBarUsers}>
								<AvatarGroup />
								<span>{activePlayers.length} / 10</span>
							</div>
							<div className={styles.subBarCore}>
								<Icon name="BsBookmarkFill" />
								<span>
									{/* {server.software.name} {server.version.name} */}
									{/* #TODO: Заглушка, потом поправить на данные с сервера */}
									Vanila 1.19.3
								</span>
							</div>
							<div
								className={clsx(
									styles.subBarStatus,
									{ [styles.online]: server.isOnline },
									{ [styles.offline]: !server.isOnline }
								)}
							>
								<Icon name="GoPrimitiveDot" />
								<span>{server.isOnline ? 'Онлайн' : 'Оффлайн'}</span>
							</div>
						</div>
					</div>
					<div className={styles.controls}>
						<div className={styles.tabs}>
							<ServerTabs slug={server.gameServerHash} />
						</div>
						<div className={styles.otherActions}>
							<button type="button" className={styles.otherActionsBtn}>
								<Icon name="RiShareForwardFill" className={styles.otherActionsIcon} size={28} />
								<span className={styles.otherActionsText}>Поделиться</span>
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default ServerHeader
