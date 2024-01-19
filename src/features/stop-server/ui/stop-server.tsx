import { useStore } from 'effector-react'
import { Square } from 'lucide-react'

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
			className="text-xl flex flex-row items-center flex-nowrap gap-2"
			onClick={handleClick}
			disabled={isLoading}
			variant="ghost"
		>
			<Square size={24} className="text-destructive fill-destructive" />
			Остановить
		</Button>
	)
}
