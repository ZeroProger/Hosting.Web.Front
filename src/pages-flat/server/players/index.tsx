'use client'

import { useStore } from 'effector-react'
import { LocateOff, UserCheck, UserCog, UserX } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import { JoyrideGuide } from '@/shared/lib/react-joyride'
import { playersCategoriesSteps } from '@/shared/lib/react-joyride/steps/players'
import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import styles from './styles.module.scss'

export function ServerPlayers() {
	const router = useRouter()
	const params = useParams()

	const serverHash = useStore($serverHash)

	const joyrideCallback = ({ status }: CallBackProps) => {
		if (status === 'finished') {
			router.push(ServerUrls.server.players(serverHash!, '/white-list'))
		}
	}

	return (
		<>
			<JoyrideGuide
				steps={playersCategoriesSteps}
				run={!!serverHash}
				scrollOffset={185}
				callback={joyrideCallback}
			/>
			<div className={styles.container} id="server-players-step">
				<Link href={ServerUrls.server.players(serverHash!, 'white-list')} className={styles.group}>
					<UserCheck size={80} />
					<span>Белый список</span>
				</Link>
				<Link href={ServerUrls.server.players(serverHash!, 'operators')} className={styles.group}>
					<UserCog size={80} />
					<span>Операторы</span>
				</Link>
				<Link
					href={ServerUrls.server.players(serverHash!, 'banned-players')}
					className={styles.group}
				>
					<UserX size={80} />
					<span>Заблокированные игроки</span>
				</Link>
				<Link href={ServerUrls.server.players(serverHash!, 'banned-ips')} className={styles.group}>
					<LocateOff size={80} />
					<span>Заблокированные IP адреса</span>
				</Link>
			</div>
		</>
	)
}
