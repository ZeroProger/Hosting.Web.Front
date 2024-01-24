import { CalendarPlus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/shared/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

import styles from './styles.module.scss'

const prolongTimeMap = new Map<string, string>([
	['30', '1 месяц'],
	['90', '3 месяца'],
])

export function ProlongServer() {
	const [prolongTime, setProlongTime] = useState('30')

	const handleChangeProlongTime = (value: string) => {
		setProlongTime(value)
	}

	const handleProlongServer = () => {}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" className="text-lg gap-2 px-4 text-foreground/90">
					<CalendarPlus size={24} className="text-primary" />
					Продлить
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm gap-4 place-items-center" hideClose>
				<DialogHeader className="flex items-center">
					<DialogTitle>Продлить сервер</DialogTitle>
				</DialogHeader>
				<div className={styles.container}>
					<Select
						defaultValue={prolongTime}
						value={prolongTime}
						onValueChange={handleChangeProlongTime}
					>
						<SelectTrigger className="w-auto text-lg">
							<SelectValue>{prolongTimeMap.get(prolongTime)}</SelectValue>
						</SelectTrigger>
						<SelectContent sideOffset={6}>
							{Array.from(prolongTimeMap.entries()).map(([key, value]) => (
								<SelectItem value={key} key={key} className="text-lg cursor-pointer">
									{value}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Input type="text" className="text-lg w-auto" placeholder="Промокод" />
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
						onClick={handleProlongServer}
					>
						Продлить
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
