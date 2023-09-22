'use client'

import clsx from 'clsx'

import { Button } from '@/shared/ui/button'
import { SubHeading } from '@/shared/ui/heading'
import { Icon } from '@/shared/ui/icon'

import { ServerTabs } from '../../server-tabs'
import { useServerHeader } from '../lib/use-server-header'

import { ServerHeaderLoading } from './loading'
import styles from './styles.module.scss'

export function ServerHeader() {
	const { server, isLoading, isModalOpen, functions } = useServerHeader()

	const {
		handleModalOpen,
		handleModalClose,
		handleGoBack,
		handleStartServer,
		handleStopServer,
		handleSubmitCart,
		handleResetCart,
	} = functions

	if (!server || isLoading) return <ServerHeaderLoading />

	return (
		<div className={styles.container} id="server-header-step">
			<div className={styles.bars}>
				<div className={styles.mainBar}>
					<div className={styles.mainBarInfo}>
						<Button
							onClick={handleGoBack}
							className={
								'inline rounded-full w-10 h-10 min-w-0 text-2xl hover:bg-secondary/80 px-2 py-2'
							}
							variant="default"
						>
							<Icon name="MdArrowBackIos" size={24} />
						</Button>
						<SubHeading className="text-3xl mb-0">{server.gameServerName}</SubHeading>
					</div>
					<div className={styles.mainBarActions}>
						{server.isOnline ? (
							<Button
								className={styles.btnStop}
								onClick={handleStopServer}
								disabled={isLoading}
								variant="destructive"
							>
								Остановить сервер
								{/* {isLoading && <Loading color={'white'} />} */}
							</Button>
						) : (
							<Button
								className={styles.btnStart}
								onClick={handleStartServer}
								disabled={isLoading}
								variant="primary"
							>
								Запустить сервер
								{/* {isLoading && <Loading color={'white'} />} */}
							</Button>
						)}

						<Button variant="default">
							<Icon name="BsThreeDots" size={24} />
						</Button>
					</div>
				</div>
				<div className={styles.subBar}>
					<div className={styles.subBarAddress}>
						<Icon name="TbWorld" size={24} />
						<span>
							{server.serverPorts.length > 0 ? (
								//#TODO: getServerFullAddress
								<>{server.serverIp}</>
							) : (
								<>Запустите сервер для получения IP</>
							)}
						</span>
					</div>
					{/* {activePlayers && (
						<div className={styles.subBarUsers}>
							<AvatarGroup translate="no" animated={false} />
							<span>{activePlayers.length} / 10</span>
						</div>
					)} */}
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
						<Icon name="GoDotFill" />
						<span>{server.isOnline ? 'Онлайн' : 'Оффлайн'}</span>
					</div>
				</div>
			</div>
			<div className={styles.controls}>
				<ServerTabs serverHash={server.gameServerHash} />
				<div className={styles.cart}>
					{/* <button type="button" className={styles.otherActionsBtn}>
						<Icon name="RiShareForwardFill" className={styles.otherActionsIcon} size={28} />
						<span className={styles.otherActionsText}>Поделиться</span>
					</button> */}
					{/* {modsCart.length > 0 && (
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
					</Modal> */}
				</div>
			</div>
		</div>
	)
}
