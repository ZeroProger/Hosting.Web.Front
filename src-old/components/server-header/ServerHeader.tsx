import { Badge, Button, Loading, Modal, Text } from '@nextui-org/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { ServerService } from '@/services/server.service'

import { getServerFullAddress } from '@/utils/servers/getServerFullAddress'

import { getServerModUrl, getServerPlayersUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'
import { AvatarGroup } from '../ui/avatar-group/AvatarGroup'

import styles from './ServerHeader.module.scss'
import ServerTabs from './ServerTabs'

interface IServerHeader {}

const ServerHeader: FC<IServerHeader> = () => {
	const router = useRouter()
	const { server, isLoading } = useTypedSelector((state) => state.server)
	const modsCart = useTypedSelector((state) => state.mods.cart)
	const { submitCart, resetCart, startServer, stopServer } = useActions()
	const { data: activePlayers } = useQuery(
		getServerPlayersUrl(server?.gameServerHash || '', 'getServerActivePlayers'),
		() =>
			ServerService.controller.getServerActivePlayers({
				gameServerHash: String(server?.gameServerHash),
			}),
		{ enabled: server !== null }
	)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModalOpen = useCallback(() => setIsModalOpen(true), [server])

	const handleModalClose = useCallback(() => setIsModalOpen(false), [server])

	const handleBackBtn = useCallback(() => {
		router.back()
	}, [server])

	const handleStopServerBtn = useCallback(() => {
		if (server && !isLoading) {
			stopServer({ gameServerHash: server.gameServerHash })
		}
	}, [server])

	const handleStartServerBtn = useCallback(() => {
		if (server && !isLoading) {
			startServer({ gameServerHash: server.gameServerHash })
		}
	}, [server])

	const handleSubmitCart = useCallback(() => {
		handleModalClose()
		submitCart()
	}, [server])

	const handleResetCart = useCallback(() => {
		handleModalClose()
		resetCart()
	}, [server])

	useEffect(() => {
		if (isModalOpen) setIsModalOpen(false)
	}, [router.asPath])

	return (
		<div className={styles.container} id="server-header-step">
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
									<Button
										className={styles.btnStop}
										onClick={handleStopServerBtn}
										disabled={isLoading}
									>
										Остановить сервер
										{isLoading && <Loading color={'white'} />}
									</Button>
								) : (
									<Button
										className={styles.btnStart}
										onClick={handleStartServerBtn}
										disabled={isLoading}
									>
										Запустить сервер
										{isLoading && <Loading color={'white'} />}
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
								<span>
									{server.serverPorts.length > 0 ? (
										<>{getServerFullAddress(server)}</>
									) : (
										<>Запустите сервер для получения IP</>
									)}
								</span>
							</div>
							{activePlayers && (
								<div className={styles.subBarUsers}>
									<AvatarGroup translate="no" animated={false} />
									<span>{activePlayers.length} / 10</span>
								</div>
							)}
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
									<button
										className={styles.modsCartBtn}
										id="mods-cart-step"
										onClick={handleModalOpen}
									>
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
									<div className={styles.cartMods} id="modal-mods-cart">
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
