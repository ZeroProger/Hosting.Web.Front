import { useStore } from 'effector-react'

import { $server } from '@/shared/store'
import { Button } from '@/shared/ui/button'

import { useStopServerMutation } from '../model'

export function StopServerButton() {
	const server = useStore($server)

	const { isLoading, mutateAsync } = useStopServerMutation()

	const handleClick = () => {
		mutateAsync({ gameServerHash: server?.gameServerHash! })
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
