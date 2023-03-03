import { FormElement, Input } from '@nextui-org/react'
import clsx from 'clsx'
import { serverConsole } from 'fakeData/server.data'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import { IServerConsoleLine, ServerConsoleLineType } from '@/shared/types/server.types'

import { lightGray } from '@/config/constants'

import styles from './ServerMiniConsole.module.scss'

const ServerMiniConsole: FC = () => {
	const [serverConsoleData, setServerConsoleData] = useState<IServerConsoleLine[]>(serverConsole)
	const [inputValue, setInputValue] = useState('')

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
		linesRef?.current?.scrollTo(0, linesRef?.current?.clientHeight)
	}, [serverConsoleData])

	return (
		<div className={styles.card}>
			<div className={styles.header}>Консоль</div>
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
