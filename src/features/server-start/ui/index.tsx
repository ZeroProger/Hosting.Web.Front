import { useStore } from 'effector-react'

import { $server } from '@/shared/store'
import { Button } from '@/shared/ui/button'

import { useStartServerMutation } from '../model'

export function StartServerButton() {
	const server = useStore($server)

	const { isLoading, mutateAsync } = useStartServerMutation()

	const handleClick = () => {
		mutateAsync({ gameServerHash: server?.gameServerHash! })
	}

	return (
		<Button
			className="text-2xl flex flex-row items-center flex-nowrap gap-4"
			onClick={handleClick}
			disabled={isLoading}
			variant="primary"
		>
			Запустить
		</Button>
	)
}
