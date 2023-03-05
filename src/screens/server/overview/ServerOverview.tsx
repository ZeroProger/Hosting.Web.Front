import { FC, useEffect, useState } from 'react'

import ServerActivePlayers from '@/components/server-active-players/ServerActivePlayers'
import ServerCurrentUsage from '@/components/server-current-usage/ServerCurrentUsage'
import ServerMainInfo from '@/components/server-main-info/ServerMainInfo'
import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'

import { useAppDispatch } from '@/hooks/useAppDispatch'

import { fetchServer } from '@/store/actions/a'

import styles from './ServerOverview.module.scss'

interface IServerOverview {}

const ServerOverview: FC<IServerOverview> = () => {
	const dispatch = useAppDispatch()
	const [uuid, setUuid] = useState<string | null>(null)
	const [lsData, setLsData] = useState<string | null>(null)

	//#TODO: НЕ ТРОГАТЬ, КОСТЫЛЬ ВСЕ КОСТЫЛЕЙ - тронешь - сайт умрет!
	useEffect(() => {
		const lsData = localStorage?.getItem('serverUUID')!
		setLsData(lsData)
	})

	useEffect(() => {
		if (lsData) {
			setUuid(lsData)
		}
	}, [lsData])

	useEffect(() => {
		if (uuid) {
			dispatch(fetchServer(uuid!))
		}
	}, [uuid])

	return (
		<>
			<div className={styles.container}>
				<div className={styles.column}>
					<ServerMainInfo />
					<ServerActivePlayers />
				</div>
				<div className={styles.column}>
					<ServerMiniConsole />
					<ServerCurrentUsage />
				</div>
			</div>
		</>
	)
}

export default ServerOverview
