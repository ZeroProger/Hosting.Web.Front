import { RotateCcw } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'

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

import { generateRandomString } from '../lib'

import styles from './styles.module.scss'

export function ReinstallServer() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [reinstallCode, setReinstallCode] = useState<string>('')
	const [inputValue, setInputValue] = useState<string>('')

	const handleUpdateReinstallCode = (open: boolean) => {
		setIsModalOpen(open)

		if (open) {
			setReinstallCode(generateRandomString(6))
		}
	}

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleReinstallServer = () => {
		if (inputValue !== reinstallCode) {
			toast.error('Введён неверный код')
			return
		}

		toast.success('Начали переустановку сервера')
		setIsModalOpen(false)
	}

	return (
		<Dialog open={isModalOpen} onOpenChange={handleUpdateReinstallCode}>
			<DialogTrigger asChild>
				<Button variant="ghost" className="text-lg gap-2 px-4 text-foreground/90">
					<RotateCcw size={24} className="text-primary" />
					Переустановить
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm gap-4 place-items-center" hideClose>
				<DialogHeader className="flex items-center">
					<DialogTitle>Переустановить сервер</DialogTitle>
					<DialogDescription className="text-muted-foreground text-md">
						Чтобы подтвердить переустановку сервера введите в поле ниже строку
						<br />
						<span className="text-primary">{reinstallCode}</span>
					</DialogDescription>
				</DialogHeader>
				<div className={styles.container}>
					<Input
						type="text"
						className="text-lg w-auto"
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Введите код"
					/>
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
						onClick={handleReinstallServer}
					>
						Изменить
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
