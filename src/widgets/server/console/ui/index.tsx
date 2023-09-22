'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { CallBackProps } from 'react-joyride'
import { ServerService } from 'services-temp/server-service'

//#TODO: избавиться от сервисов внутри widgets и entities и features, вынести логику в store
import { $server } from '@/entities/server/model'
import { IServerConsoleLineType } from '@/entities/server/types'

import { JoyrideGuide, consoleSteps } from '@/shared/lib/react-joyride'
import { ServerUrls } from '@/shared/routes/urls'
import { Input } from '@/shared/ui/input'

import { useServerConsole } from '../lib'

import styles from './styles.module.scss'

export function Console({ mini = false }: { mini?: boolean }) {
	const { serverConsole, inputRef, linesRef, inputValue, functions } = useServerConsole()
	const { setServerConsole, handleInput, clearInput, handleSend } = functions

	const { push } = useRouter()
	const server = useStore($server)

	const onGuideFinish = ({ status }: CallBackProps) =>
		status === 'finished' && push(ServerUrls.server.settings(server?.gameServerHash!))

	useEffect(() => {
		linesRef?.current?.scrollTo(0, linesRef?.current?.scrollHeight)
	}, [serverConsole])

	useEffect(() => {
		if (server) {
			const data = ServerService.console({
				gameServerHash: server.gameServerHash,
			})

			const isEmptyTest = Math.random() > 0.5

			setServerConsole(isEmptyTest ? data : [])
		}
	}, [server])

	return (
		<>
			{!mini && <JoyrideGuide steps={consoleSteps} callback={onGuideFinish} />}
			<div className={clsx(styles.card, { [styles.mini]: mini })} id="server-console-step">
				{server && (
					<>
						<div className={styles.header}>
							<div className={styles.headerTitle}>Консоль</div>
							{!mini && (
								<div className={styles.headerActions} id="server-logs-step">
									<Link href={ServerUrls.server.logs(server.gameServerHash)}>Журнал логов</Link>
								</div>
							)}
						</div>
						<div className={styles.hr}></div>
						<div className={styles.body}>
							<div className={styles.lines} ref={linesRef}>
								{serverConsole.length === 0 && (
									<div
										className={clsx(styles.consoleEmpty, {
											[styles.consoleEmptyFull]: !mini,
										})}
									>
										<span>Здесь пока пусто</span>
										<span>Запустите сервер для просмотра логов</span>
									</div>
								)}
								{serverConsole.map((line) => (
									<div
										key={line.id}
										className={clsx(styles.line, {
											[styles.error]: line.type === IServerConsoleLineType.Error,
											[styles.warn]: line.type === IServerConsoleLineType.Warning,
										})}
									>
										<div className={styles.info}>
											{`[${line.time} - ${line.type}]: `}
											<span className={styles.message}>{line.message}</span>
										</div>
									</div>
								))}
							</div>
							{!mini && (
								<div className={styles.enterCommand}>
									<Input
										ref={inputRef}
										placeholder="Введите команду..."
										value={inputValue}
										onKeyDown={(e) => {
											if (e.key === 'Enter') {
												handleSend(inputRef.current?.value || '')
												clearInput()
											}
										}}
										className="w-full focus-visible:ring-offset-0"
										onChange={handleInput}
									/>
								</div>
							)}
						</div>
					</>
				)}
			</div>
		</>
	)
}
