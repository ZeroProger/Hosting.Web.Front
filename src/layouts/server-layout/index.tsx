'use client'

import { useParams, usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { setServerHashFx } from '@/shared/store'

import { ServerHeader } from '@/widgets/server/server-header'

import styles from './styles.module.scss'

export function ServerLayout({ children }: { children: React.ReactNode }) {
	const params = useParams()
	const pathname = usePathname()

	useEffect(() => {
		if (params && params.serverHash !== undefined) {
			setServerHashFx(String(params.serverHash))
		}
	}, [pathname])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.headerContainer}>
					<ServerHeader />
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.contentContainer}>
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</div>
	)
}
