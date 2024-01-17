import { ChangeEvent, useRef, useState } from 'react'

import { useSendCommandToServerConsoleMutation } from '../../queries'

export function useServerConsole() {
	const [inputValue, setInputValue] = useState('')

	const inputRef = useRef<HTMLInputElement>(null)
	const linesRef = useRef<HTMLDivElement>(null)

	const sendCommandMutation = useSendCommandToServerConsoleMutation()

	const handleSend = (value: string) => {
		if (value.trim().length === 0) return

		sendCommandMutation.mutateAsync({ message: value })

		linesRef?.current?.scrollTo(0, linesRef?.current?.scrollHeight)
	}

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const clearInput = () => {
		setInputValue('')
	}

	return {
		inputValue,
		inputRef,
		linesRef,
		functions: {
			handleInput,
			handleSend,
			clearInput,
		},
	}
}
