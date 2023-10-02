'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'

import { setServerHashFx } from '@/shared/store'

import { Breadcrumbs } from '@/widgets/breadcrumbs'
import { ServerHeader } from '@/widgets/server-header'

import styles from './styles.module.scss'

export function ServerLayout({ children }: { children: React.ReactNode }) {
	const params = useParams()

	useEffect(() => {
		if (params && params.serverHash !== undefined) {
			setServerHashFx(String(params.serverHash))
		}
	}, [params])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.headerContainer}>
					<Breadcrumbs />
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
