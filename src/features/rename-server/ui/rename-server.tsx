import { PenLine } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

export function RenameServer() {
	const handleRenameServer = () => {}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">
					<PenLine size={28} />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm gap-4 place-items-center" hideClose>
				<DialogHeader className="flex items-center">
					<DialogTitle>Смена названия сервера</DialogTitle>
					<DialogDescription className="text-muted-foreground text-md">
						Название отображается только на сайте
					</DialogDescription>
				</DialogHeader>
				<div className={styles.container}>
					<Input type="text" className="text-lg w-auto" placeholder="Название сервера" />
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="default" className="w-max h-auto py-1 text-lg">
							Отмена
						</Button>
					</DialogClose>
					<Button
						variant="primary"
						className="w-max h-auto py-1 text-lg"
						onClick={handleRenameServer}
					>
						Изменить
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
