'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { CallBackProps } from 'react-joyride'

import { useServer } from '@/entities/server/model'
import { ServerService } from '@/entities/server/service'
import { ServerConsoleLine, ServerConsoleLineType } from '@/entities/server/types'

import { JoyrideGuide, consoleSteps } from '@/shared/lib/react-joyride'
import { ServerUrls } from '@/shared/routes/urls'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

interface IServerMiniConsole {
	fullConsole?: boolean
}

export function ServerMiniConsole({ fullConsole }: IServerMiniConsole) {
	const [serverConsole, setServerConsole] = useState<ServerConsoleLine[]>([])
	const [inputValue, setInputValue] = useState('')

	const { push } = useRouter()
	const { server } = useServer()
	const inputRef = useRef<HTMLInputElement>(null)
	const linesRef = useRef<HTMLDivElement>(null)

	const handleEnter = (value: string) => {
		//#TODO: Тут будет логика отправки сообщений на сервер
		const newLine: ServerConsoleLine = {
			id: Math.random().toString(),
			message: `/${value}`,
			time: new Date().toLocaleString('ru-RU', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			}),
			type: ServerConsoleLineType.Info,
		}
		setServerConsole((oldArray) => [...oldArray, newLine])
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

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
			{fullConsole && (
				<JoyrideGuide
					steps={consoleSteps}
					callback={onGuideFinish}
					continuous
					disableOverlayClose
					hideBackButton
					hideCloseButton
					scrollOffset={150}
				/>
			)}
			<div
				className={clsx(styles.card, { [styles.fullConsole]: fullConsole })}
				id="server-console-step"
			>
				{server && (
					<>
						<div className={styles.header}>
							<div className={styles.headerTitle}>Консоль</div>
							{fullConsole && (
								<div className={styles.headerActions} id="server-logs-step">
									<Link href={ServerUrls.server.logs(server.gameServerHash)}>Журнал логов</Link>
								</div>
							)}
						</div>
						<div className={styles.hr}></div>
						<div className={clsx(styles.body, { [styles.mini]: !fullConsole })}>
							<div className={clsx(styles.lines, { [styles.mini]: !fullConsole })} ref={linesRef}>
								{serverConsole.length === 0 && (
									<div
										className={clsx(styles.consoleEmpty, {
											[styles.consoleEmptyFull]: fullConsole,
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
											[styles.error]: line.type === ServerConsoleLineType.Error,
											[styles.warn]: line.type === ServerConsoleLineType.Warning,
										})}
									>
										<div className={styles.info}>
											{`[${line.time} - ${line.type}]: `}
											<span className={styles.message}>{line.message}</span>
										</div>
									</div>
								))}
							</div>
							{fullConsole && (
								<div className={styles.enterCommand}>
									<Input
										ref={inputRef}
										placeholder="Введите команду..."
										value={inputValue}
										onKeyDown={(e) => {
											if (e.key === 'Enter') {
												handleEnter(inputRef.current?.value || '')
												setInputValue('')
											}
										}}
										className="w-full"
										onChange={handleChange}
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

export default ServerMiniConsole
