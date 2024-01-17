'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { CallBackProps } from 'react-joyride'

import { JoyrideGuide, consoleSteps } from '@/shared/lib/react-joyride'
import { useFetchServer } from '@/shared/queries/server'
import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { IServerConsoleLineType } from '@/shared/types'
import { Input } from '@/shared/ui/input'
import { Skeleton } from '@/shared/ui/skeleton'

import { useServerConsole } from '../hooks'
import { useFetchServerConsole } from '../queries'

import styles from './styles.module.scss'

export function ServerConsole({ mini = false }: { mini?: boolean }) {
	const router = useRouter()

	const { inputRef, linesRef, inputValue, functions } = useServerConsole()
	const { handleInput, clearInput, handleSend } = functions

	const serverHash = useStore($serverHash)

	const { data: server } = useFetchServer(serverHash)
	const { data: serverConsole, isLoading } = useFetchServerConsole()

	const joyrideCallback = ({ status }: CallBackProps) => {
		if (status === 'finished') {
			router.push(ServerUrls.server.settings(serverHash!))
		}
	}

	useEffect(() => {
		linesRef?.current?.scrollTo(0, linesRef?.current?.scrollHeight)
	}, [serverConsole])

	if (!server || isLoading) return <Skeleton className="w-full h-[400px]" />

	if (!serverConsole || !server.isOnline) {
		return (
			<div
				className={clsx(styles.consoleEmpty, {
					[styles.consoleEmptyFull]: !mini,
				})}
			>
				<span>Здесь пока пусто</span>
				<span>Запустите сервер для просмотра логов</span>
			</div>
		)
	}

	return (
		<>
			{!mini && <JoyrideGuide steps={consoleSteps} callback={joyrideCallback} />}
			<div className={clsx(styles.card, { [styles.mini]: mini })} id="server-console-step">
				<div className={styles.header}>
					<div className={styles.headerTitle}>Консоль</div>
					{!mini && (
						<div className={styles.headerActions} id="server-logs-step">
							<Link href={ServerUrls.server.logs(serverHash!)}>Журнал логов</Link>
						</div>
					)}
				</div>
				<div className={styles.hr}></div>
				<div className={styles.body}>
					<div className={styles.lines} ref={linesRef}>
						{serverConsole.map((line) => (
							<div
								key={line.Id}
								className={clsx(styles.line, {
									[styles.error]: line.Record.indexOf(IServerConsoleLineType.Error) !== -1,
									[styles.warn]: line.Record.indexOf(IServerConsoleLineType.Warning) !== -1,
								})}
							>
								<div className={styles.messageWrapper}>
									<span className={styles.message}>{line.Record}</span>
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
			</div>
		</>
	)
}
