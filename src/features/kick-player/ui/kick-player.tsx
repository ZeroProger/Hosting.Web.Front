'use client'

import { MinusCircle } from 'lucide-react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'

import { useKickPlayerMutation } from '../queries'

export function KickPlayer({ playerNickname }: { playerNickname: string }) {
	const kickPlayerMutation = useKickPlayerMutation()

	const handleKickPlayer = () => {
		kickPlayerMutation.mutateAsync(playerNickname)
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant="default"
					size="icon"
					className="px-1 py-1 text-input hover:bg-input/40 bg-transparent"
				>
					<MinusCircle size={32} />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
					<AlertDialogDescription>
						Вы собираетесь кикнуть игрока <span className="text-primary">{playerNickname}</span> с
						вашего сервера.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Отменить</AlertDialogCancel>
					<AlertDialogAction onClick={handleKickPlayer}>Кикнуть</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
