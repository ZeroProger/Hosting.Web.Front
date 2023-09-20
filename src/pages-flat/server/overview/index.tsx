'use client'

import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import { useServer } from '@/entities/server/store'

import { JoyrideGuide, overviewSteps } from '@/shared/lib/react-joyride'
import { ServerUrls } from '@/shared/routes/urls'

import ServerActivePlayers from '@/widgets/server/active-players/ui'
import ServerCurrentUsage from '@/widgets/server/current-usage/ui'
import ServerMainInfo from '@/widgets/server/main-info/ui'
import ServerMiniConsole from '@/widgets/server/mini-console/ui'

import styles from './styles.module.scss'

export function ServerOverview() {
	const { push } = useRouter()
	const { server, isLoading } = useServer()

	const onGuideFinish = ({ status }: CallBackProps) =>
		status === 'finished' && push(ServerUrls.server.players(server?.gameServerHash!))

	return (
		<>
			{server && !isLoading && (
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
								<ServerMiniConsole />
							</div>
							<div className="current-usage">
								<ServerCurrentUsage />
							</div>
						</div>
					</section>
				</>
			)}
		</>
	)
}
