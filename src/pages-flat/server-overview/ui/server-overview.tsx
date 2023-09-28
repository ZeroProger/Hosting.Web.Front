'use client'

import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import { JoyrideGuide, overviewSteps } from '@/shared/lib/react-joyride'
import { useFetchServer } from '@/shared/queries/server'
import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import { ServerActivePlayers } from '@/widgets/server-active-players'
import { ServerConsole } from '@/widgets/server-console'
import { ServerCurrentUsage } from '@/widgets/server-current-usage'
import { ServerMainInfo } from '@/widgets/server-main-info'

import styles from './styles.module.scss'

export function ServerOverview() {
	const router = useRouter()

	const serverHash = useStore($serverHash)

	const { data: server } = useFetchServer(serverHash)

	const joyrideCallback = ({ status }: CallBackProps) => {
		if (status === 'finished') {
			router.push(ServerUrls.server.players(server?.gameServerHash!))
		}
	}

	return (
		<>
			<JoyrideGuide steps={overviewSteps} callback={joyrideCallback} />
			<section className={styles.container}>
				<div className={styles.column}>
					<div className="main-info">
						<ServerMainInfo />
					</div>
					<div className="active-players">
						<ServerActivePlayers />
					</div>
				</div>
				<div className={styles.column}>
					<div className="mini-console">
						<ServerConsole mini />
					</div>
					<div className="current-usage">
						<ServerCurrentUsage />
					</div>
				</div>
			</section>
		</>
	)
}
