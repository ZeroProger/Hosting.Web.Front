import { FormElement, Input } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IServerConsoleLine, ServerConsoleLineType } from '@/shared/types/server.types'

import { lightGray } from '@/config/constants'
import { getServerLogsUrl } from '@/config/url.config'

import styles from './ServerMiniConsole.module.scss'

interface IServerMiniConsole {
	fullConsole?: boolean
}

const ServerMiniConsole: FC<IServerMiniConsole> = ({ fullConsole }) => {
	const [serverConsoleData, setServerConsoleData] = useState<IServerConsoleLine[]>([])
	const [inputValue, setInputValue] = useState('')

	const { console, uuid } = useTypedSelector((state) => state.serverReducer.server)

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
		setServerConsoleData((oldArray) => [...oldArray, newLine])
	}

	const handleChange = (e: ChangeEvent<FormElement>) => {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		linesRef?.current?.scrollTo(0, linesRef?.current?.scrollHeight)
	}, [serverConsoleData])

	useEffect(() => {
		setServerConsoleData(console)
	}, [console])

	return (
		<div className={clsx(styles.card, { [styles.fullConsole]: fullConsole })}>
			<div className={styles.header}>
				<div className={styles.headerTitle}>Консоль</div>
				{fullConsole && (
					<div className={styles.headerActions}>
						<Link href={getServerLogsUrl(uuid)}>Журнал логов</Link>
					</div>
				)}
			</div>
			<div className={styles.hr}></div>
			<div className={styles.body}>
				<div className={styles.lines} ref={linesRef}>
					{serverConsoleData.map((line) => (
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
		</div>
	)
}

export default ServerMiniConsole
