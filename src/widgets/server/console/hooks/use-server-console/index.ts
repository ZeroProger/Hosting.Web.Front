import { ChangeEvent, useRef, useState } from 'react'

import { IServerConsoleLine, IServerConsoleLineType } from '@/shared/types'

export function useServerConsole() {
	//#TODO: переделать в effector store
	const [serverConsole, setServerConsole] = useState<IServerConsoleLine[]>([])
	const [inputValue, setInputValue] = useState('')

	const inputRef = useRef<HTMLInputElement>(null)
	const linesRef = useRef<HTMLDivElement>(null)

	const handleSend = (value: string) => {
		//#TODO: Тут будет логика отправки сообщений на сервер
		const newLine: IServerConsoleLine = {
			id: Math.random().toString(),
			message: `/${value}`,
			time: new Date().toLocaleString('ru-RU', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			}),
			type: IServerConsoleLineType.Info,
		}
		setServerConsole((oldArray) => [...oldArray, newLine])
	}

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const clearInput = () => {
		setInputValue('')
	}

	return {
		serverConsole,
		inputValue,
		inputRef,
		linesRef,
		functions: {
			handleInput,
			handleSend,
			setServerConsole,
			clearInput,
		},
	}
}
