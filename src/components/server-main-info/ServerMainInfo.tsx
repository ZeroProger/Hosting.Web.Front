import { Popover } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { isUndefined } from '@/utils/objects/isUndefined'

import {
	getServerOverviewUrl,
	getServerSoftwareUrl,
	getServerVersionsUrl,
} from '@/config/url.config'

import { Icon } from '../ui/Icon'
import { AvatarGroup } from '../ui/avatar-group/AvatarGroup'

import styles from './ServerMainInfo.module.scss'

const ServerMainInfo: FC = () => {
	const server = useTypedSelector((state) => state.serverReducer.server)

	const handleCopyClick = (event: React.MouseEvent<HTMLElement>) => {
		const copyText =
			event.currentTarget.closest(`.${styles.value}`)?.querySelector('span')?.innerText || ''
		navigator.clipboard.writeText(copyText)
	}

	return (
		<div className={styles.card}>
			<div className={styles.header}>Сервер</div>
			<hr className={styles.hr} />
			<div className={styles.body}>
				<div className={styles.rows}>
					{server.mainInfo?.map((row) => (
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
								{!isUndefined(row.otherInfo?.playersImages) ? (
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
								) : null}
								{!isUndefined(row.otherInfo?.isSoftware) ||
								!isUndefined(row.otherInfo?.isVersion) ? (
									//#TODO: костыль, когда будут данные вместо 'fabric'
									//подставлять .value Ядра
									<Link
										href={
											row.otherInfo?.isSoftware
												? getServerSoftwareUrl(server.uuid)
												: row.otherInfo?.isVersion
												? getServerVersionsUrl(server.uuid, server.software.slug)
												: getServerOverviewUrl(server.uuid)
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
			</div>
		</div>
	)
}

export default ServerMainInfo
