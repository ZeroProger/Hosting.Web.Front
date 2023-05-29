import { Badge, Button, Modal, Text } from '@nextui-org/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IPlayer } from '@/shared/types/player.types'

import { ServerService } from '@/services/server.service'

import { getServerModUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'
import { AvatarGroup } from '../ui/avatar-group/AvatarGroup'

import styles from './ServerHeader.module.scss'
import ServerTabs from './ServerTabs'

interface IServerHeader {}

const ServerHeader: FC<IServerHeader> = () => {
	const router = useRouter()
	const server = useTypedSelector((state) => state.server.server)
	const modsCart = useTypedSelector((state) => state.mods.cart)
	const { submitCart, resetCart } = useActions()
	const [activePlayers, setActivePlayers] = useState<IPlayer[]>([])

	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModalOpen = () => setIsModalOpen(true)

	const handleModalClose = () => setIsModalOpen(false)

	const handleBackBtn = () => {
		router.back()
	}

	const handleStopServerBtn = () => {
		if (server) {
			const stopGamePromise = ServerService.controller.stopGameServer({
				gameServerHash: server.gameServerHash,
			})

			stopGamePromise.then((data) => {
				if (data.data.error.length > 0) {
					toast(data.data.error)
				}
				if (data.data.success) {
					router.reload()
				}
			})
		}
	}

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

	const handleSubmitCart = () => {
		handleModalClose()
		submitCart()
	}

	const handleResetCart = () => {
		handleModalClose()
		resetCart()
	}

	useEffect(() => {
		if (server) {
			const data = ServerService.controller.getServerActivePlayers({
				gameServerHash: server.gameServerHash,
			})

			setActivePlayers(data)
		}
	}, [server])

	useEffect(() => {
		setIsModalOpen(false)
	}, [router.asPath])

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
						<div className={styles.cart}>
							{/* <button type="button" className={styles.otherActionsBtn}>
								<Icon name="RiShareForwardFill" className={styles.otherActionsIcon} size={28} />
								<span className={styles.otherActionsText}>Поделиться</span>
							</button> */}
							{modsCart.length > 0 && (
								<Badge size="lg" color="primary" content={modsCart.length}>
									<button className={styles.modsCartBtn} onClick={handleModalOpen}>
										Моды к установке
									</button>
								</Badge>
							)}
							<Modal
								closeButton
								onClose={handleModalClose}
								open={isModalOpen}
								aria-labelledby="Установка выбранных модификаций"
								className="bg-backgroundLight border-lightGray border-2"
								width="600px"
							>
								<Modal.Header className="text-2xl">Установка выбранных модификаций</Modal.Header>
								<Modal.Body>
									<div className={styles.cartMods}>
										{modsCart.map((mod) => (
											<Link
												key={mod.id}
												className={styles.cartMod}
												href={getServerModUrl(String(mod.id))}
											>
												<div className={styles.cartModImage}>
													<Image
														src={mod.logo.thumbnailUrl}
														alt={mod.summary}
														width={40}
														height={40}
													/>
												</div>
												<div className={styles.cartModTitle}>{mod.name}</div>
											</Link>
										))}
										<div className={styles.cartActions}>
											<button className={styles.cartSubmitBtn} onClick={handleSubmitCart}>
												Установить
											</button>
											<button className={styles.cartResetBtn} onClick={handleResetCart}>
												Очистить
											</button>
										</div>
									</div>
								</Modal.Body>
							</Modal>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default ServerHeader
