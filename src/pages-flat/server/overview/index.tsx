'use client'

import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import { $pendingServer, $server } from '@/shared/store'

import { JoyrideGuide, overviewSteps } from '@/shared/lib/react-joyride'
import { ServerUrls } from '@/shared/routes/urls'

import { ServerActivePlayers } from '@/widgets/server/active-players'
import { Console } from '@/widgets/server/console'
import { ServerCurrentUsage } from '@/widgets/server/current-usage'
import { ServerMainInfo } from '@/widgets/server/main-info'

import { ServerOverviewLoading } from './loading'
import styles from './styles.module.scss'

export function ServerOverview() {
	const { push } = useRouter()
	const server = useStore($server)
	const isLoading = useStore($pendingServer)

	const onGuideFinish = ({ status }: CallBackProps) =>
		status === 'finished' && push(ServerUrls.server.players(server?.gameServerHash!))

	if (!server || isLoading) return <ServerOverviewLoading />

	return (
		<>
			<JoyrideGuide steps={overviewSteps} callback={onGuideFinish} />
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
						<Console mini />
					</div>
					<div className="current-usage">
						<ServerCurrentUsage />
					</div>
				</div>
			</section>
		</>
	)
}
