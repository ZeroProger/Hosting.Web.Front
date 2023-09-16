'use client'

import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import { useServer } from '@/entities/server/model'

import { JoyrideGuide, overviewSteps } from '@/shared/lib/react-joyride'
import { ServerUrls } from '@/shared/routes/urls'

import ServerActivePlayers from '@/widgets/server/active-players/ui'
import ServerCurrentUsage from '@/widgets/server/current-usage/ui'
import ServerMainInfo from '@/widgets/server/main-info/ui'
import ServerMiniConsole from '@/widgets/server/mini-console/ui'

import styles from './styles.module.scss'

export function ServerOverview() {
	const { push } = useRouter()
	const { server } = useServer()

	const onGuideFinish = ({ status }: CallBackProps) =>
		status === 'finished' && push(ServerUrls.server.players(server?.gameServerHash!))

	return (
		<>
			<JoyrideGuide steps={overviewSteps} callback={onGuideFinish} />
			<div className={styles.container}>
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
			</div>
		</>
	)
}
