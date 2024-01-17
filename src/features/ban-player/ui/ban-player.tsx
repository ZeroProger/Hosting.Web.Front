import { Ban } from 'lucide-react'

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

import { useBanPlayerMutation } from '../queries'

export function BanPlayer({ playerNickname }: { playerNickname: string }) {
	const banPlayerMutation = useBanPlayerMutation()

	const handleBanPlayer = () => {
		banPlayerMutation.mutateAsync({ playerNickname })
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant="destructive"
					size="icon"
					className="px-1 py-1 text-destructive hover:bg-destructive/40 bg-transparent"
				>
					<Ban size={32} />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
					<AlertDialogDescription>
						Вы собираетесь <span className="font-bold">забанить</span> игрока&nbsp;
						<span className="text-primary">{playerNickname}</span> на вашем сервере.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Отменить</AlertDialogCancel>
					<AlertDialogAction onClick={handleBanPlayer}>Забанить</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
