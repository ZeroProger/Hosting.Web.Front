import { Ban } from 'lucide-react'

import { Button } from '@/shared/ui/button'

import { useBanPlayerMutation } from '../queries'

export function BanPlayer({ playerNickname }: { playerNickname: string }) {
	const banPlayerMutation = useBanPlayerMutation()

	const handleClick = () => {
		banPlayerMutation.mutateAsync(playerNickname)
	}

	return (
		<Button
			variant="destructive"
			size="icon"
			className="px-1 py-1 text-destructive hover:bg-destructive/40 bg-transparent"
			onClick={handleClick}
		>
			<Ban size={32} />
		</Button>
	)
}
