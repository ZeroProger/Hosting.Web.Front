'use client'

import { MinusCircle } from 'lucide-react'

import { Button } from '@/shared/ui/button'

import { useKickPlayerMutation } from '../queries'

export function KickPlayer({ playerNickname }: { playerNickname: string }) {
	const kickPlayerMutation = useKickPlayerMutation()

	const handleClick = () => {
		kickPlayerMutation.mutateAsync(playerNickname)
	}

	return (
		<Button
			variant="default"
			size="icon"
			className="px-1 py-1 text-input hover:bg-input/40 bg-transparent"
			onClick={handleClick}
		>
			<MinusCircle size={32} />
		</Button>
	)
}
