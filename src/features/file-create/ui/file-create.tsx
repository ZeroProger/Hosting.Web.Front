import { FilePlus } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

export function FileCreate() {
	const handleCreateFile = () => {}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon">
					<FilePlus size={24} />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Создание файла</DialogTitle>
				<div className={styles.container}>
					<div className={styles.pickDirectory}>
						<div className={styles.pickResultText}>
							<span>Файл будет создан внутри директории:</span>
							<span className="font-semibold">~/world/data</span>
						</div>
					</div>
					<Input type="text" className="text-lg" placeholder="Название файла" />
					{/* #TODO: Расширение файла: Select с расширениями файла, которые можно создать, лучше их с бэка получать */}
					<Button
						variant="primary"
						className="self-end h-auto py-1 text-lg"
						onClick={handleCreateFile}
					>
						Создать
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
