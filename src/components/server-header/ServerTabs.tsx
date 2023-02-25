import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import {
	getServerBackupsUrl,
	getServerConsoleUrl,
	getServerFilesUrl,
	getServerModsUrl,
	getServerOverviewUrl,
	getServerPlayersUrl,
	getServerSettingsUrl,
} from '@/config/url.config'

import styles from './ServerTabs.module.scss'

const ServerTabs: FC<{ slug: string }> = ({ slug }) => {
	const router = useRouter()

	return (
		<>
			<Link
				href={getServerOverviewUrl(`${slug}`)}
				className={clsx({
					[styles.isActiveLink]: router.asPath === getServerOverviewUrl(`${slug}`),
				})}
			>
				Основая информация
			</Link>
			<Link
				href={getServerPlayersUrl(`${slug}`)}
				className={clsx({
					[styles.isActiveLink]: router.asPath === getServerPlayersUrl(`${slug}`),
				})}
			>
				Игроки
			</Link>
			<Link
				href={getServerModsUrl(`${slug}`)}
				className={clsx({
					[styles.isActiveLink]: router.asPath === getServerModsUrl(`${slug}`),
				})}
			>
				Моды
			</Link>
			<Link
				href={getServerConsoleUrl(`${slug}`)}
				className={clsx({
					[styles.isActiveLink]: router.asPath === getServerConsoleUrl(`${slug}`),
				})}
			>
				Консоль
			</Link>
			<Link
				href={getServerFilesUrl(`${slug}`)}
				className={clsx({
					[styles.isActiveLink]: router.asPath === getServerFilesUrl(`${slug}`),
				})}
			>
				Файлы
			</Link>
			<Link
				href={getServerBackupsUrl(`${slug}`)}
				className={clsx({
					[styles.isActiveLink]: router.asPath === getServerBackupsUrl(`${slug}`),
				})}
			>
				Бэкапы
			</Link>
			<Link
				href={getServerSettingsUrl(`${slug}`)}
				className={clsx({
					[styles.isActiveLink]: router.asPath === getServerSettingsUrl(`${slug}`),
				})}
			>
				Настройки
			</Link>
		</>
	)
}

export default ServerTabs
