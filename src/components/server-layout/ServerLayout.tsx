import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IParams } from '@/shared/types/base.types'

import { getServersUrl } from '@/config/url.config'

import { fetchServer } from '@/store/actions/servers'

import ServerHeader from '../server-header/ServerHeader'

import styles from './ServerLayout.module.scss'

const ServerLayout: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { slug } = router.query as IParams
	const server = useTypedSelector((state) => state.serverReducer.server)
	const [serverUuid, setServerUuid] = useLocalStorage('serverUuid', '')

	useEffect(() => {
		if (slug) {
			setServerUuid(slug)
			dispatch(fetchServer(slug!))
		} else {
			if (!server.name && serverUuid) {
				dispatch(fetchServer(serverUuid))
			}
			if (!server.name && !serverUuid) {
				router.push(getServersUrl())
			}
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
