'use client'

// import { Popover } from '@nextui-org/react'
import { useStore } from 'effector-react'
import { Copy } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'react-toastify'

import { useServerMainInfo } from '@/entities/server/model'

import { $serverHash } from '@/shared/store'
import { Skeleton } from '@/shared/ui/skeleton'

import styles from './styles.module.scss'

export const ServerMainInfo: FC = () => {
	const serverHash = useStore($serverHash)

	const { mainInfo, isLoading } = useServerMainInfo()

	const handleCopyClick = (event: React.MouseEvent<HTMLElement>) => {
		const copyText =
			event.currentTarget.closest(`.${styles.value}`)?.querySelector('span')?.innerText || ''

		navigator.clipboard.writeText(copyText)
		toast('IP скопирован')
	}

	if (isLoading) return <Skeleton className="w-full h-[310px]" />

	if (!mainInfo) return null

	return (
		<div className={styles.card}>
			<div className={styles.header}>Основная информация</div>
			<hr className={styles.hr} />
			<div className={styles.body}>
				<div className={styles.rows}>
					<div className={styles.row}>
						<div className={styles.label}>IP</div>
						<div className={styles.value}>
							<span>{mainInfo.ip}</span>
							<div onClick={handleCopyClick}>
								<Copy className="cursor-pointer" />
							</div>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.label}>Игроки</div>
						<div className={styles.value}>
							<span>
								{mainInfo.playersCount} / {mainInfo.maxPlayers}
							</span>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.label}>Ядро</div>
						<div className={styles.value}>
							<span>{mainInfo.software === null ? 'Vanila' : mainInfo.software}</span>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.label}>Версия</div>
						<div className={styles.value}>
							<span>{mainInfo.version}</span>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.label}>Карта</div>
						<div className={styles.value}>
							<span>{mainInfo.map}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

// {!isUndefined(row.otherInfo?.isSoftware) || !isUndefined(row.otherInfo?.isVersion) ? (
// 								<Link
// 									href={
// 										row.otherInfo?.isSoftware
// 											? ServerUrls.server.software(serverHash!)
// 											: row.otherInfo?.isVersion
// 											? ServerUrls.server.versions(serverHash!, 'vanila' /*server.software.slug*/)
// 											: ServerUrls.server.overview(serverHash!)
// 									}
// 									className={styles.link}
// 								>
// 									<PencilLine size={24} />
// 								</Link>
// 							) : null}
