import { useModal } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import Joyride from 'react-joyride'

import styles from './ServerOverview.module.scss'
import ServerActivePlayers from '@/components/server-active-players/ServerActivePlayers'
import ServerCurrentUsage from '@/components/server-current-usage/ServerCurrentUsage'
import ServerMainInfo from '@/components/server-main-info/ServerMainInfo'
import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'
import { joyrideStylesOptions, joyrideStylesTooltip } from '@/config/constants'
import { getServerPlayersUrl } from '@/config/url.config'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useTypedSelector } from '@/hooks/useTypedSelector'

interface IServerOverview {}

const ServerOverview: FC<IServerOverview> = () => {
	const { push } = useRouter()
	const server = useTypedSelector((state) => state.server.server)
	const [isGuideStarted, setIsGuideStarted] = useState(false)
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)
	const { setVisible, bindings } = useModal(!isGuideCompleted)

	const handleStartGuide = () => {
		setVisible(false)
		setIsGuideStarted(true)
	}

	const handleSkipGuide = () => {
		setVisible(false)
		setIsGuideCompleted(true)
	}

	return (
		<>
			<Joyride
				hideCloseButton
				hideBackButton
				continuous
				disableOverlayClose
				run={isGuideStarted && !isGuideCompleted}
				scrollOffset={200}
				callback={({ status }) =>
					status === 'finished' && push(getServerPlayersUrl(server?.gameServerHash!))
				}
				styles={{ options: joyrideStylesOptions, tooltip: joyrideStylesTooltip }}
				steps={[
					{
						content:
							'Блок с основной информацией о вашем сервере: название, IP адрес, кол-во игроков и онлайн-статус. Также здесь расположена кнопка запуска/остановки сервера. Этот блок будет виден на всех страницах управления сервера и благодаря ему вы сможете всегда контролировать состояние вашего сервера.',
						target: '#server-header-step',
						disableBeacon: true,
						placement: 'auto',
						styles: { options: { width: 800 } },
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
						disableScrollParentFix: true,
					},
					{
						content:
							'Здесь расположена дополнительная информация о вашем сервере: ядро, версия, и т.п.',
						target: '.main-info',
						disableBeacon: true,
						placement: 'auto',
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
					{
						content:
							'Тут видны игроки находящиеся на сервере в данный момент, вы видите их роли, а также можете кикнуть или забанить их. Кнопка "Управление" переместит вас на страницу с подробным управлением игроками и их возможностями',
						target: '.active-players',
						disableBeacon: true,
						placement: 'top',
						styles: { options: { width: 600 } },
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
					{
						content:
							'Небольшая консоль для мониторинга игрового сервера, отображает события происходящие на нём, процесс запуска и ошибки, возникающие в процессе',
						target: '.mini-console',
						disableBeacon: true,
						placement: 'bottom',
						styles: { options: { width: 600 } },
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
					{
						content:
							'Информация о использовании вашим сервером ресурсов, выделенных согласно оплаченному тарифу',
						target: '.current-usage',
						disableBeacon: true,
						placement: 'top',
						styles: { options: { width: 500 } },
						locale: { last: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
				]}
			/>

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

export default ServerOverview
