'use client'

// import { Popover } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { ServerMainInfo } from '@/entities/server/types'

// #TODO Avata
import { Icon } from '@/shared/ui/icon'

import { useServer } from '@/entities/server/store'
import { ServerUrls } from '@/shared/routes/urls'
import { isUndefined } from '@/shared/utils/isUndefined'
//#TODO: избавиться от сервисов внутри widgets и entities и features, вынести логику в store
import { ServerService } from 'services-temp/server-service'
import styles from './styles.module.scss'

const ServerMainInfo: FC = () => {
  const {server} = useServer()
  const [mainInfo, setMainInfo] = useState<ServerMainInfo[]>([])

	const handleCopyClick = (event: React.MouseEvent<HTMLElement>) => {
		const copyText =
			event.currentTarget.closest(`.${styles.value}`)?.querySelector('span')?.innerText || ''
		navigator.clipboard.writeText(copyText)
	}

	useEffect(() => {
		if (server) {
			const data = ServerService.mainInfo({
				gameServerHash: server.gameServerHash,
			})

			setMainInfo(data)
		}
	}, [server])

	return (
		<div className={styles.card}>
			<div className={styles.header}>Сервер</div>
			<hr className={styles.hr} />
			<div className={styles.body}>
				{server && mainInfo && (
					<>
						<div className={styles.rows}>
							{mainInfo?.map((row) => (
								<div key={row.label} className={styles.row}>
									<div className={styles.label}>{row.label}</div>
									<div className={styles.value}>
										<span
											className={clsx({
												[styles.copyable]: row.otherInfo?.copyable,
												[styles.online]: row.otherInfo?.isOnline,
												[styles.offline]:
													!isUndefined(row.otherInfo?.isOnline) && !row.otherInfo?.isOnline,
											})}
										>
											{row.value}
											{!isUndefined(row.otherInfo?.playersImages) && <> онлайн</>}
										</span>

                    {/* #TODO Avatar */}
										{/* {!isUndefined(row.otherInfo?.playersImages) ? (
											<AvatarGroup className={styles.avatarGroup} />
										) : null}
										{!isUndefined(row.otherInfo?.copyable) ? (
											<Popover shouldCloseOnBlur placement={'right'}>
												<Popover.Trigger>
													<div onClick={handleCopyClick}>
														<Icon name="Io5Copy" className="cursor-pointer" />
													</div>
												</Popover.Trigger>
												<Popover.Content className="flex flex-row items-center h-[40px] bg-backgroundLight border-lightGray border-2">
													<span className="px-4 text-lg">Скопировано</span>
												</Popover.Content>
											</Popover>
										) : null} */}
										{!isUndefined(row.otherInfo?.isSoftware) ||
										!isUndefined(row.otherInfo?.isVersion) ? (
											//#TODO: костыль, когда будут данные вместо 'fabric'
											//подставлять .value Ядра
											<Link
												href={
													row.otherInfo?.isSoftware
														? ServerUrls.server.software(server.gameServerHash)
														: row.otherInfo?.isVersion
														? ServerUrls.server.versions(
																server.gameServerHash,
																'vanila' /*server.software.slug*/
														  )
														: ServerUrls.server.overview(server.gameServerHash)
												}
												className={styles.link}
											>
												<Icon name="AiFillEdit" />
											</Link>
										) : null}
									</div>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default ServerMainInfo
