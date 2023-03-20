import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useAppDispatch } from '@/hooks/useAppDispatch'

import { IParams } from '@/shared/types/base.types'

import { fetchServer } from '@/store/actions/a'

import ServerHeader from '../server-header/ServerHeader'

import styles from './ServerLayout.module.scss'

const ServerLayout: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { slug } = router.query as IParams

	useEffect(() => {
		if (slug) {
			dispatch(fetchServer(slug!))
		}
	}, [slug])

	return (
		<>
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
		</>
	)
}

export default ServerLayout
