import { useStore } from 'effector-react'

import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'

import { useStopServerMutation } from '../model'

export function StopServer() {
	const serverHash = useStore($serverHash)

	const { isLoading, mutateAsync } = useStopServerMutation()

	const handleClick = () => {
		mutateAsync({ gameServerHash: serverHash! })
	}

	return (
		<Button
			className="text-2xl flex flex-row items-center flex-nowrap gap-4"
			onClick={handleClick}
			disabled={isLoading}
			variant="destructive"
		>
			Остановить
		</Button>
	)
}
