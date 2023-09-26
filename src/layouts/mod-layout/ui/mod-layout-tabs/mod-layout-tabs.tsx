'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import styles from './mod-layout-tabs.module.scss'

export function ModLayoutTabs({ modId }: { modId: number }) {
	const pathname = usePathname()

	const serverHash = useStore($serverHash)

	const descriptionUrl = ModUrls.mod(serverHash!, modId)
	const filesUrl = ModUrls.files(serverHash!, modId)
	const imagesUrl = ModUrls.images(serverHash!, modId)

	return (
		<ul className={styles.tabs}>
			<Link
				href={descriptionUrl}
				className={clsx({ [styles.active]: pathname === descriptionUrl })}
			>
				Описание
			</Link>
			<Link href={filesUrl} className={clsx({ [styles.active]: pathname.startsWith(filesUrl) })}>
				Файлы
			</Link>
			<Link href={imagesUrl} className={clsx({ [styles.active]: pathname.startsWith(imagesUrl) })}>
				Изображения
			</Link>
		</ul>
	)
}
