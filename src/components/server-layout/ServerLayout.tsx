import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IParams } from '@/shared/types/base.types'

import { getServersUrl } from '@/config/url.config'

import ServerHeader from '../server-header/ServerHeader'

import styles from './ServerLayout.module.scss'

const ServerLayout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const { slug } = router.query as IParams
	const server = useTypedSelector((state) => state.server.server)
	const { getServer } = useActions()
	const [gameServerHash, setGameServerHash] = useLocalStorage('gameServerHash', '')

	useEffect(() => {
		if (slug) {
			if (!server) {
				setGameServerHash(slug)
				getServer({ gameServerHash: slug })
			}
		} else {
			if (server) {
				if (!server.gameServerName && gameServerHash) {
					getServer({ gameServerHash: slug })
				}
				if (!server.gameServerName && !gameServerHash) {
					router.push(getServersUrl())
				}
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
