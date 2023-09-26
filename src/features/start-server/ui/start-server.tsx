import { useStore } from 'effector-react'

import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'

import { useStartServerMutation } from '../model'

export function StartServer() {
	const serverHash = useStore($serverHash)

	const { isLoading, mutateAsync } = useStartServerMutation()

	const handleClick = () => {
		mutateAsync({ gameServerHash: serverHash! })
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
