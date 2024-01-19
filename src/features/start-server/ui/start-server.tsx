import { useStore } from 'effector-react'
import { Play } from 'lucide-react'

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
			className="text-xl flex flex-row items-center flex-nowrap gap-2"
			onClick={handleClick}
			disabled={isLoading}
			variant="ghost"
		>
			<Play size={24} className="text-primary fill-primary" />
			Запустить
		</Button>
	)
}
