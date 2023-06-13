'use client'

import { FormElement, Input } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import Joyride from 'react-joyride'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

import useLocalStorage from '@/hooks/useLocalStorage'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IServerConsoleLine } from '@/shared/types/server.types'

import { ServerService } from '@/services/server.service'

import { toastError } from '@/utils/toast/toast-error'

import { getMessagingLogsChunkUrl } from '@/config/api/servers-api.config'
import { joyrideStylesOptions, joyrideStylesTooltip, lightGray } from '@/config/constants'
import { getServerLogsUrl, getServerSettingsUrl } from '@/config/url.config'

import styles from './ServerMiniConsole.module.scss'

interface IServerMiniConsole {
	fullConsole?: boolean
}

const ServerMiniConsole: FC<IServerMiniConsole> = ({ fullConsole }) => {
	const logsRefetchInterval = 2000
	const [serverConsole, setServerConsole] = useState<IServerConsoleLine[]>([])
	const [inputValue, setInputValue] = useState('')
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)

	const server = useTypedSelector((state) => state.server.server)
	const { push } = useRouter()
	const inputRef = useRef<HTMLInputElement>(null)
	const linesRef = useRef<HTMLDivElement>(null)

	const { isSuccess: isGetLogsChunkSuccess, data: logsChunk } = useQuery(
		getMessagingLogsChunkUrl(),
		() => ServerService.messaging.getLogsChunk({ gameServerHash: String(server?.gameServerHash) }),
		{
			select: ({ data }) => data.data,
			enabled: server !== null,
			refetchInterval: logsRefetchInterval,
		}
	)

	const handleEnter = (value: string) => {
		const sendPromise = ServerService.messaging.send({
			gameServerHash: String(server?.gameServerHash),
			message: value,
			postSystem: 'rcon',
		})

		sendPromise
			.then(({ data }) => {
				if (data.success) {
					toast.success('Команда успешно применена')
					return
				}
				if (data.error.length > 0) {
					toast.error('Ошибка, проверьте введенную команду')
					return
				}
			})
			.catch((error) => {
				toastError(error)
			})
	}

	const handleChange = (e: ChangeEvent<FormElement>) => {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		linesRef?.current?.scrollTo(0, linesRef?.current?.scrollHeight)
	}, [serverConsole])

	useEffect(() => {
		if (server) {
			const getLogsChunkPromise = ServerService.messaging.getLogsChunk({
				gameServerHash: server.gameServerHash,
			})

			getLogsChunkPromise
				.then(({ data }) => {
					if (data.success) {
						setServerConsole((prev) => [...prev, ...data.data])
					}
				})
				.catch((error) => {
					toastError(error)
				})
		}
	}, [server])

	return (
		<>
			{fullConsole && (
				<Joyride
					scrollOffset={150}
					continuous
					run={!isGuideCompleted}
					disableOverlayClose
					hideCloseButton
					hideBackButton
					callback={({ status }) =>
						status === 'finished' && push(getServerSettingsUrl(server?.gameServerHash!))
					}
					styles={{ options: joyrideStylesOptions, tooltip: joyrideStylesTooltip }}
					steps={[
						{
							content:
								'Здесь вы можете следить за состоянием вашего игрового сервера и управлять им, вводя в консоль внутриигровые команды, они будут применены в игре и результат будет отображен в консоли',
							target: '#server-console-step',
							disableBeacon: true,
							placement: 'auto',
							locale: { next: <strong>Дальше</strong> },
							styles: { options: { width: 800 } },
						},
						{
							content:
								'Здесь вы можете посмотреть полный файл с информацией о запуске, работе и ошибках вашего сервера',
							target: '#server-logs-step',
							disableBeacon: true,
							placement: 'auto',
							styles: { options: { width: 500 } },
							locale: { last: <strong>Дальше</strong> },
						},
					]}
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
									<Link href={getServerLogsUrl(server.gameServerHash)}>Журнал логов</Link>
								</div>
							)}
						</div>
						<div className={styles.hr}></div>
						<div className={clsx(styles.body, { [styles.mini]: !fullConsole })}>
							<div className={clsx(styles.lines, { [styles.mini]: !fullConsole })} ref={linesRef}>
								{serverConsole.map((line) => (
									<div
										key={line.id}
										className={clsx(styles.line, {
											[styles.error]: line.message.includes('ERROR'),
											[styles.warn]: line.message.includes('WARN'),
										})}
									>
										<div className={styles.info}>
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
							)}
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default ServerMiniConsole
