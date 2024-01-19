'use client'

import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import { RestartServer } from '@/features/restart-server'
import { StartServer } from '@/features/start-server'
import { StopServer } from '@/features/stop-server'

import { JoyrideGuide, overviewSteps } from '@/shared/lib/react-joyride'
import { useFetchServer } from '@/shared/queries/server'
import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import { ServerConsole } from '@/widgets/server-console'
import { ServerCurrentUsage } from '@/widgets/server-current-usage'
import { ServerMainInfo } from '@/widgets/server-main-info'
import { ServerOnlinePlayers } from '@/widgets/server-online-players'

import styles from './styles.module.scss'

export function ServerOverview() {
	const router = useRouter()

	const serverHash = useStore($serverHash)

	const { data: server, isLoading } = useFetchServer(serverHash)

	const joyrideCallback = ({ status }: CallBackProps) => {
		if (status === 'finished') {
			router.push(ServerUrls.server.players(serverHash!))
		}
	}

	return (
		<>
			<JoyrideGuide steps={overviewSteps} callback={joyrideCallback} />
			<section className={styles.container}>
				<div className={styles.column}>
					{server && (
						<div className="startup-control">
							<div className={styles.card}>
								<div className={styles.actions}>
									{server.isOnline ? <StopServer /> : <StartServer />}
									{server.isOnline && <RestartServer />}
								</div>
							</div>
						</div>
					)}
					<div className="main-info">
						<ServerMainInfo />
					</div>
					<div className="online-players">
						<ServerOnlinePlayers />
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
