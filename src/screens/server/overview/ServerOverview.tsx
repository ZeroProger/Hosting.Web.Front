import { Modal, useModal } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Joyride from 'react-joyride'

import ServerActivePlayers from '@/components/server-active-players/ServerActivePlayers'
import ServerCurrentUsage from '@/components/server-current-usage/ServerCurrentUsage'
import ServerMainInfo from '@/components/server-main-info/ServerMainInfo'
import ServerMiniConsole from '@/components/server-mini-console/ServerMiniConsole'

import useLocalStorage from '@/hooks/useLocalStorage'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import Meta from '@/utils/meta/Meta'

import { joyrideStylesOptions, joyrideStylesTooltip } from '@/config/constants'
import { getServerPlayersUrl } from '@/config/url.config'

import styles from './ServerOverview.module.scss'

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

	useEffect(() => {
		console.log(isGuideCompleted)
	}, [])

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
			<Modal
				{...bindings}
				className={styles.guideModal}
				aria-labelledby="Ознакомление с панелью управления сервером"
				width="600px"
			>
				<Modal.Header className={styles.guideModalHeader}>
					Ознакомление с панелью управления сервером
				</Modal.Header>
				<Modal.Body className={styles.guideModalBody}>
					<p>Поздравляем вас с созданием собственного сервера!</p>
					<p>
						Предлагаем вам пройти обучение и ознакомиться с возможностями панели управления игровым
						сервером.
					</p>
					<p>Вы научитесь:</p>
					<ul>
						<li>Быстро ориентироваться в информации о вашем игровом сервере</li>
						<li>Создавать и останавливать сервер</li>
						<li>Управлять игроками</li>
						<li>Устанавливать модификации</li>
						<li>Взаимодействовать с консолью управления игровым сервером</li>
						<li>Настраивать основной файл конфигурации игрового сервера</li>
					</ul>
				</Modal.Body>
				<Modal.Footer className={styles.guideModalFooter}>
					<button type="button" className={styles.skipGuideBtn} onClick={handleSkipGuide}>
						Пропустить обучение
					</button>
					<button type="button" className={styles.startGuideBtn} onClick={handleStartGuide}>
						Начать обучение
					</button>
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
