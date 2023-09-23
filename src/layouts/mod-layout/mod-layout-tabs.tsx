'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ModUrls } from '@/shared/routes/urls'

import styles from './mod-layout-tabs.module.scss'

export function ModLayoutTabs({ modId }: { modId: number }) {
	const pathname = usePathname()

	const descriptionUrl = ModUrls.mod(modId)
	const filesUrl = ModUrls.files(modId)
	const imagesUrl = ModUrls.images(modId)

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
