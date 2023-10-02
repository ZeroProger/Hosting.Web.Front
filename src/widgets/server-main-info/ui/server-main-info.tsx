'use client'

// import { Popover } from '@nextui-org/react'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { PencilLine } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

//import { ServerService } from 'services-temp/server-service'
import { ServerUrls } from '@/shared/routes/urls'
//#TODO: избавиться от сервисов внутри widgets и entities и features, вынести логику в store
import { $serverHash } from '@/shared/store'
import { Skeleton } from '@/shared/ui/skeleton'
// #TODO Avata
import { isUndefined } from '@/shared/utils/isUndefined'

import { useFetchServerMainInfo } from '../queries'

import styles from './styles.module.scss'

export const ServerMainInfo: FC = () => {
	const serverHash = useStore($serverHash)

	const { data: mainInfo, isLoading } = useFetchServerMainInfo()

	const handleCopyClick = (event: React.MouseEvent<HTMLElement>) => {
		const copyText =
			event.currentTarget.closest(`.${styles.value}`)?.querySelector('span')?.innerText || ''
		navigator.clipboard.writeText(copyText)
	}

	if (isLoading) return <Skeleton className="w-full h-[350px]" />

	if (!mainInfo) return null

	return (
		<div className={styles.card}>
			<div className={styles.header}>Основная информация</div>
			<hr className={styles.hr} />
			<div className={styles.body}>
				<div className={styles.rows}>
					{mainInfo.map((row) => (
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

								{/* #TODO Avatar Group ?? мб не нужно */}
								{/* {!isUndefined(row.otherInfo?.playersImages) ? (
											<AvatarGroup className={styles.avatarGroup} />
										) : null}
										{!isUndefined(row.otherInfo?.copyable) ? (
											<Popover shouldCloseOnBlur placement={'right'}>
												<Popover.Trigger>
													<div onClick={handleCopyClick}>
														<Icon name="copy" className="cursor-pointer" />
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
												? ServerUrls.server.software(serverHash!)
												: row.otherInfo?.isVersion
												? ServerUrls.server.versions(serverHash!, 'vanila' /*server.software.slug*/)
												: ServerUrls.server.overview(serverHash!)
										}
										className={styles.link}
									>
										<PencilLine size={24} />
									</Link>
								) : null}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
