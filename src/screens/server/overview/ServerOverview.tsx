import { Button, Modal, Text, useModal } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import Joyride from 'react-joyride'

import ServerActivePlayers from '@/components/server-active-players/ServerActivePlayers'
import ServerCurrentUsage from '@/components/server-current-usage/ServerCurrentUsage'
import ServerHeader from '@/components/server-header/ServerHeader'
import ServerMainInfo from '@/components/server-main-info/ServerMainInfo'
import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import Meta from '@/utils/meta/Meta'

import { getServerPlayersUrl } from '@/config/url.config'

import styles from './ServerOverview.module.scss'

interface IServerOverview {}

const ServerOverview: FC<IServerOverview> = () => {
	const server = useTypedSelector((state) => state.server.server)
	const [isLearningStarted, setIsLearningStarted] = useState(false)
	const { setVisible, bindings } = useModal(true)
	const handleStartLearning = () => {
		setVisible(false)
		setIsLearningStarted(true)
	}
	const handleSkip = () => {
		setVisible(false)
	}
	const { push } = useRouter()
	return (
		<>
			<Joyride
				hideCloseButton
				disableOverlayClose
				run={isLearningStarted}
				showProgress
				continuous
				scrollOffset={70}
				callback={({ status }) =>
					status === 'finished' && push(getServerPlayersUrl(server?.gameServerHash!))
				}
				steps={[
					{
						content: '1',
						target: '#server-header-step',
						disableBeacon: true,
						placement: 'auto',
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
						disableScrollParentFix: true,
					},
					{
						content: '2',
						target: '.main-info',
						disableBeacon: true,
						placement: 'auto',
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
					{
						content: '3',
						target: '.active-players',
						disableBeacon: true,
						placement: 'auto',
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
					{
						content: '4',
						target: '.mini-console',
						disableBeacon: true,
						placement: 'auto',
						locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
					{
						content: '5',
						target: '.current-usage',
						disableBeacon: true,
						placement: 'auto',
						locale: { last: <strong>Дальше</strong>, back: <strong>Назад</strong> },
					},
				]}
				styles={{
					options: {
						zIndex: 1000000,
					},
				}}
			/>
			<Modal {...bindings} aria-labelledby="Ознакомление с панелью управления сервером">
				<Modal.Header>
					<Text size={20}>Ознакомление с панелью управления сервером</Text>
				</Modal.Header>
				<Modal.Body>Добро пожаловать в обучение управлению игровым сервером!</Modal.Body>
				<Modal.Footer>
					<Button auto onClick={handleSkip}>
						Пропустить
					</Button>
					<Button auto onClick={handleStartLearning}>
						Начать обучение
					</Button>
				</Modal.Footer>
			</Modal>
			<Meta
				title={
					server
						? `Основная информация о сервере ${server.gameServerName}`
						: 'Основная информация о сервере'
				}
			>
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
			</Meta>
		</>
	)
}

export default ServerOverview
