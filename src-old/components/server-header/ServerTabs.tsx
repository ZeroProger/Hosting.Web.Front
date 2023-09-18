import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import {
	getServerBackupsUrl,
	getServerConsoleUrl,
	getServerFilesUrl,
	getServerModSearchUrl,
	getServerModUrl,
	getServerModsUrl,
	getServerOverviewUrl,
	getServerPlayersUrl,
	getServerSettingsUrl,
} from '@/config/url.config'

import styles from './ServerTabs.module.scss'

const ServerTabs: FC<{ slug: string }> = ({ slug }) => {
	const router = useRouter()
	const modId = String(router.query?.id!)

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
				className={clsx(
					{
						[styles.isActiveLink]: router.asPath === getServerPlayersUrl(`${slug}`),
					},
					{
						[styles.isActiveLink]:
							router.asPath ===
							getServerPlayersUrl(`${slug}`, `/${router.asPath.split('/').splice(4).join('/')}`),
					}
				)}
			>
				Игроки
			</Link>
			<Link
				href={getServerModsUrl()}
				className={clsx(
					{
						[styles.isActiveLink]: router.asPath === getServerModsUrl(),
					},
					{
						[styles.isActiveLink]:
							router.asPath ===
							getServerModUrl(modId, `/${router.asPath.split('/').splice(4).join('/')}`),
					},
					{
						[styles.isActiveLink]:
							router.asPath.split('?').at(0) === getServerModSearchUrl().split('?').at(0),
					}
				)}
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
					[styles.isActiveLink]:
						router.asPath.split('/').slice(0, 4).join('/') === getServerFilesUrl(`${slug}`),
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
				Резервные копии
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
