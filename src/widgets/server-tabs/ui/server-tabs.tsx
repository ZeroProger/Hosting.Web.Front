import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ModUrls, ServerUrls } from '@/shared/routes/urls'

import styles from './styles.module.scss'

export function ServerTabs({ serverHash }: { serverHash: string }) {
	const pathname = usePathname()

	const overviewUrl = ServerUrls.server.overview(serverHash)
	const playersUrl = ServerUrls.server.players(serverHash)
	const modsUrl = ModUrls.mods(serverHash)
	const consoleUrl = ServerUrls.server.console(serverHash)
	const filesUrl = ServerUrls.server.files(serverHash)
	const backupsUrl = ServerUrls.server.backups(serverHash)
	const settingsUrl = ServerUrls.server.settings(serverHash)

	return (
		<div className={styles.list}>
			<Link
				href={overviewUrl}
				className={clsx(styles.link, styles.link, {
					[styles.isActiveLink]: pathname?.startsWith(overviewUrl),
				})}
			>
				Основая информация
			</Link>
			<Link
				href={playersUrl}
				className={clsx(styles.link, {
					[styles.isActiveLink]: pathname?.startsWith(playersUrl),
				})}
			>
				Игроки
			</Link>
			<Link
				href={modsUrl}
				className={clsx(styles.link, {
					[styles.isActiveLink]: pathname?.startsWith(modsUrl),
				})}
			>
				Моды
			</Link>
			<Link
				href={consoleUrl}
				className={clsx(styles.link, {
					[styles.isActiveLink]: pathname?.startsWith(consoleUrl),
				})}
			>
				Консоль
			</Link>
			<Link
				href={filesUrl}
				className={clsx(styles.link, {
					[styles.isActiveLink]: pathname?.startsWith(filesUrl),
				})}
			>
				Файлы
			</Link>
			<Link
				href={backupsUrl}
				className={clsx(styles.link, {
					[styles.isActiveLink]: pathname?.startsWith(backupsUrl),
				})}
			>
				Резервные копии
			</Link>
			<Link
				href={settingsUrl}
				className={clsx(styles.link, {
					[styles.isActiveLink]: pathname?.startsWith(settingsUrl),
				})}
			>
				Настройки
			</Link>
		</div>
	)
}
