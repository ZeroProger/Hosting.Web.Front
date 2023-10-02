import { Trash2 } from 'lucide-react'

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

export function FileNodeRemove({ path }: { path: string }) {
	const handleRemoveNode = () => {
		console.log(`remove node by path: `, path)
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant="ghost"
					className="h-auto py-1 text-lg text-foreground hover:bg-destructive hover:text-destructive-foreground flex flex-nowrap items-center gap-2"
				>
					<Trash2 size={20} />
					Удалить
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
					<AlertDialogDescription className="flex flex-col gap-2">
						<span>Вы собираетесь удалить папку/файл по пути:</span>
						<span className="font-bold text-foreground">~/{path}</span>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Отменить</AlertDialogCancel>
					<AlertDialogAction onClick={handleRemoveNode}>Удалить</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
