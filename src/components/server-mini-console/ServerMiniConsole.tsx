import { FormElement, Input } from '@nextui-org/react';
import clsx from 'clsx';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import Joyride from 'react-joyride'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IServerConsoleLine, ServerConsoleLineType } from '@/shared/types/server.types'

import { ServerService } from '@/services/server.service'

import { lightGray } from '@/config/constants'
import { getServerLogsUrl, getServerSettingsUrl } from '@/config/url.config'

import styles from './ServerMiniConsole.module.scss'

interface IServerMiniConsole {
	fullConsole?: boolean
}

const ServerMiniConsole: FC<IServerMiniConsole> = ({ fullConsole }) => {
	const [serverConsole, setServerConsole] = useState<IServerConsoleLine[]>([])
	const [inputValue, setInputValue] = useState('')

	const server = useTypedSelector((state) => state.server.server)
	const { push } = useRouter()
	const inputRef = useRef<HTMLInputElement>(null)
	const linesRef = useRef<HTMLDivElement>(null)

	const handleEnter = (value: string) => {
		//#TODO: Тут будет логика отправки сообщений на сервер
		const newLine: IServerConsoleLine = {
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

	const handleChange = (e: ChangeEvent<FormElement>) => {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		linesRef?.current?.scrollTo(0, linesRef?.current?.scrollHeight)
	}, [serverConsole])

	useEffect(() => {
		if (server) {
			const data = ServerService.controller.getServerConsole({
				gameServerHash: server.gameServerHash,
			})

			setServerConsole(data)
		}
	}, [server])

	return (
		<>
			{fullConsole && (
				<Joyride
					continuous
					run
					disableOverlayClose
					hideCloseButton
					callback={({ status }) =>
						status === 'finished' && push(getServerSettingsUrl(server?.gameServerHash!))
					}
					steps={[
						{
							content: '15',
							target: '#server-logs-step',
							disableBeacon: true,
							placement: 'auto',
							locale: { last: <strong>Дальше</strong> },
						},
					]}
				/>
			)}
			<div className={clsx(styles.card, { [styles.fullConsole]: fullConsole })}>
				{server && (
					<>
						<div className={styles.header}>
							<div className={styles.headerTitle}>Консоль</div>
							{fullConsole && (
								<div className={styles.headerActions} id="server-logs-step">
									<Link href={getServerLogsUrl(server.gameServerHash)}>Журнал логов</Link>
								</div>
							)}
						</div>
						<div className={styles.hr}></div>
						<div className={styles.body}>
							<div className={styles.lines} ref={linesRef}>
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
							<div className={styles.enterCommand}>
								<Input
									ref={inputRef}
									placeholder="Введите команду..."
									fullWidth
									value={inputValue}
									animated={false}
									shadow={false}
									contentLeftStyling={false}
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											handleEnter(inputRef.current?.value || '')
											setInputValue('')
										}
									}}
									onChange={handleChange}
									contentLeft={<div className={styles.slash}>/</div>}
									css={{
										'& .nextui-input-wrapper': {
											backgroundColor: lightGray,
											borderRadius: '16px',
										},
									}}
								/>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default ServerMiniConsole